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
            <div className="border p-3 w-fit">
                <h1>Task with ID {id} is missing</h1>
                <Link href="/"><strong>Return to main page</strong></Link>
            </div>
        );
    }

    return (
        <div className="border p-3 w-fit">
            <h1 className="text-2xl font-bold">{task.title}</h1>
            <p>{task.description}</p>
            Status: <i>{task.status}</i>
            <br/>
            <Link href="/"><strong>Return to main page</strong></Link>
        </div>
    );
}