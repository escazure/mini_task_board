"use client";

import { useContext } from "react";
import { TaskContext } from "@/context/TaskContext";

export default function HomePage(){
    const context = useContext(TaskContext);

    if(!context){
        return <p>TaskContext is missing</p>;
    }

    return (
        <ul>
            {context.tasks.map((task) => (
                <li key={task.id}><strong>{task.title}</strong>: {task.description} <strong>{task.status}</strong></li>
            ))}
        </ul>
    );
}