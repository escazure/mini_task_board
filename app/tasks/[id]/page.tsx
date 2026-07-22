"use client";

import { use, useContext } from "react";
import Link from "next/link";
import { TaskContext } from "@/context/TaskContext";

export default function TaskDetailPage({ params }: { params: Promise<{id: string}>}){
    const { id } = use(params);

    const context = useContext(TaskContext);

    if(!context){
        return <p>TaskContext is missing</p>;
    }

    const task = context.tasks.find((t) => String(t.id) === id);

    if(!task){
        return (
            <div>
                <h1>Task with ID {id} is missing</h1>
                <Link href="/">Return to main page</Link>
            </div>
        );
    }

    return (
        <div>
            <h1 className="text-2xl font-bold">{task.title}</h1>
            <p>{task.description}</p>
            Status: <strong>{task.status}</strong>
            <br/>
            <Link href="/">Return to main page</Link>
        </div>
    );
}