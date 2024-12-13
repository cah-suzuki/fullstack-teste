"use client";
import {
    TextField,
    Typography,
    SnackbarCloseReason,
  } from '@mui/material';
  import { Controller, useForm } from 'react-hook-form';
  // eslint-disable-next-line import/no-extraneous-dependencies
  import { zodResolver } from '@hookform/resolvers/zod';
  import { userRegisterSchema, userRegister } from '../../app/types/zod';
  import { useContext} from 'react';
  import * as S from './styles';
  import { Api } from '../../app/services/api'
  import { Button } from '../../components/common/button';
  import { redirect } from 'next/navigation'
  import { UserContext } from '../../app/provider/userProvider';
import React from 'react';
import { useRouter } from 'next/navigation'


  
  export default function RegisterPage() {
    const context = useContext(UserContext);
    // implementar controle de login pelo context 
    const {setIsAuth} = context;
    const router = useRouter()

      const [open, setOpen] = React.useState(false);
// implementar toast 
      const handleToast = () => {
        setOpen(true);
      };
    
      const handleClose = (
        event: React.SyntheticEvent | Event,
        reason?: SnackbarCloseReason,
      ) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };
  
    const { control, handleSubmit,register, trigger } = useForm<userRegister>({
      mode: 'onChange',
      resolver: zodResolver(userRegisterSchema),
      defaultValues: {
        name: undefined,
        email: undefined,
        password: undefined,
      },
    });

  
    const onSubmit = async (data:userRegister) => {
    try {
        const resUser = await Api().post(
          `/user`,
          data
        );
        router.push('/auth/login')
        return resUser;
      } catch (error) {
        console.error(error);
        return error;
      };
    }

    const handleButtonNavigate= () => {
        redirect('/auth/login')
    }
  
    return (
      <S.Content>
          <Typography component='h3'>
            Login
          </Typography>
          <S.InfoInput onSubmit={handleSubmit(onSubmit)}>
          <Controller
              name='name'
              control={control}
              render={(obj) => (
                <TextField
                  {...obj.field}
                  className='name-textfield'
                  placeholder='Nome'
                  error={!!obj.fieldState.error}
                  helperText={
                    obj?.fieldState?.error
                      ? obj?.fieldState?.error?.message
                      : undefined
                  }
                  label='Nome'
                  value={obj.field.value}
                  onChange={(event) => {
                    obj.field.onChange(event.target.value);
                  }}
                />
              )}
            />
            <Controller
              name='email'
              control={control}
              render={(obj) => (
                <TextField
                  {...obj.field}
                  // trocar o classname do styles tbm de name para email 
                  className='email-textfield'
                  placeholder='Email'
                  error={!!obj.fieldState.error}
                  helperText={
                    obj?.fieldState?.error
                      ? obj?.fieldState?.error?.message
                      : undefined
                  }
                  label='Email'
                  value={obj.field.value}
                  onChange={(event) => {
                    obj.field.onChange(event.target.value);
                  }}
                />
              )}
            />
            <Controller
              name='password'
              control={control}
              render={(obj) => (
                <TextField
                  {...obj.field}
                  // trocar o classname do styles tbm de name para email 
                  className='password-textfield'
                  placeholder='Senha'
                  error={!!obj.fieldState.error}
                  helperText={
                    obj?.fieldState?.error
                      ? obj?.fieldState?.error?.message
                      : undefined
                  }
                  label='Senha'
                  value={obj.field.value}
                  onChange={(event) => {
                    obj.field.onChange(event.target.value);
                  }}
                />
              )}
            />
            <div
              style={{
           
              }}
              className='container-button-save'
            >
              <Button
              title='Salvar'
              type='submit'
              style='grey'
              >
              </Button>
            </div>
          </S.InfoInput>
          <div    className='container-button-register'>
            <span>Retornar ao login ?</span>
          <Button
              title='Login'
              type='submit'
              style='grey'
              onClick={() => handleButtonNavigate()}
              >
              </Button>
          </div>

      </S.Content>
    );
  }