import React, { createContext, useState } from "react";
export interface ITask{
    id: string;
    title: string;
    content: string;
}

interface ITaskContext{
    TaskList: ITask[];
    addTask: (title: string, content: string) => void;
    removeTask: (removingId: string) => void;
}

export const TaskContext = createContext({} as ITaskContext);

interface ITaskProviderProps{
    children: React.ReactNode;
}

//Parâmetros de função
export const TaskProvider = ({ children }: ITaskProviderProps) => {
    // o estado é uma variável reativa
    const [TaskList, setTaskList] = useState<ITask[]>([]); 

    const addTask = (title: string, content: string) => {
        const newTask: ITask = {
            id: crypto.randomUUID(),
            title,
            content,
        };
        setTaskList([...TaskList, newTask]);
    }

    const removeTask = (removingId: string) => {
        const newTaskList = TaskList.filter(Task => Task.id !== removingId);
        setTaskList(newTaskList);
    }

    return(
        <TaskContext.Provider value={{ TaskList, addTask, removeTask }}>
            {children}
        </TaskContext.Provider>
    )
}