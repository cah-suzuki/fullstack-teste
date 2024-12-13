import * as z from 'zod';

export const user = z.object({
  uuid : z.string(),
  name: z.string(),
  email: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  deactivatedAt: z.string(),
})

const STATUS = ["PENDING", "IN_PROGRESS", "FINISHED"] as const;

export const task = z.object({
  uuid : z.string(),
  title: z.string(),
  userUUID: z.string(),
  status: z.enum(STATUS),
  finishedAt: z.string(),
  description: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  deactivatedAt: z.string(),

})

export const userLoginSchema = z.object({
  password: z
    .string({
      required_error: 'Nome é obrigatório',
      invalid_type_error: 'Nome deve ser um texto',
    })
    .min(1, { message: 'Nome é obrigatório' }),
    email: z
    .string()
    .min(1, { message: "This field has to be filled." })
    .email("This is not a valid email.")
    
}).superRefine(({ password }, checkPassComplexity) => {
  const containsUppercase = (ch: string) => /[A-Z]/.test(ch);
  const containsLowercase = (ch: string) => /[a-z]/.test(ch);
  const containsSpecialChar = (ch: string) =>
    /[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~ ]/.test(ch);
  let countOfUpperCase = 0,
    countOfLowerCase = 0,
    countOfNumbers = 0,
    countOfSpecialChar = 0;
  for (let i = 0; i < password.length; i++) {
    const ch = password.charAt(i);
    if (!isNaN(+ch)) countOfNumbers++;
    else if (containsUppercase(ch)) countOfUpperCase++;
    else if (containsLowercase(ch)) countOfLowerCase++;
    else if (containsSpecialChar(ch)) countOfSpecialChar++;
  }
  if (
    countOfLowerCase < 1 ||
    countOfUpperCase < 1 ||
    countOfSpecialChar < 1 && countOfNumbers < 1
  ) {
    checkPassComplexity.addIssue({
      code: "custom",
      message: "password does not meet complexity requirements",
    });
  }
});



export const userRegisterSchema = z.object({
  name: z.string({
    required_error: 'Nome é obrigatório',
    invalid_type_error: 'Nome deve ser um texto',
  })
  .min(1, { message: 'Nome é obrigatório' }),
  password: z
    .string({
      required_error: 'Nome é obrigatório',
      invalid_type_error: 'Nome deve ser um texto',
    })
    .min(1, { message: 'Nome é obrigatório' }),
    email: z
    .string()
    .min(1, { message: "This field has to be filled." })
    .email("This is not a valid email.")
    
}).superRefine(({ password }, checkPassComplexity) => {
  const containsUppercase = (ch: string) => /[A-Z]/.test(ch);
  const containsLowercase = (ch: string) => /[a-z]/.test(ch);
  const containsSpecialChar = (ch: string) =>
    /[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~ ]/.test(ch);
  let countOfUpperCase = 0,
    countOfLowerCase = 0,
    countOfNumbers = 0,
    countOfSpecialChar = 0;
  for (let i = 0; i < password.length; i++) {
    const ch = password.charAt(i);
    if (!isNaN(+ch)) countOfNumbers++;
    else if (containsUppercase(ch)) countOfUpperCase++;
    else if (containsLowercase(ch)) countOfLowerCase++;
    else if (containsSpecialChar(ch)) countOfSpecialChar++;
  }
  if (
    countOfLowerCase < 1 ||
    countOfUpperCase < 1 ||
    countOfSpecialChar < 1 && countOfNumbers < 1
  ) {
    checkPassComplexity.addIssue({
      code: "custom",
      message: "password does not meet complexity requirements",
    });
  }
});


export type userLogin = z.infer<typeof userLoginSchema>;
export type userRegister = z.infer<typeof userRegisterSchema>;

