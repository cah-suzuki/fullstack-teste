"use client";
import { useContext } from "react";
import { TaskContext } from "../../app/provider/taskProvider";
import { TaskCard } from "../../components/common/cards";

export default function DashboardPage() {
   const { TaskList } = useContext(TaskContext);

   return (
       <ul>
         {TaskList.map((Task) => (
            <TaskCard key={Task.id} Task={Task} />
         ))}
      </ul>
)
};
