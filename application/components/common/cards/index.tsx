"use client";
import { useContext } from "react";
import { TaskContext } from "../../../app/provider/taskProvider";

export interface ITask{
    id: string;
    title: string;
    content: string;
}

interface ITaskCardProps {
   Task: ITask;
}

export const TaskCard = ({ Task }: ITaskCardProps) => {
   const { removeTask } = useContext(TaskContext);

   const handleRemove = () => {
      if (confirm("Quer mesmo remover está nota?")) removeTask(Task.id);
   };

   return (
      <li>
         <h3>{Task.title}</h3>
         <p>{Task.content}</p>
         <button onClick={handleRemove}>Remover a nota</button>
      </li>
   );
};