"use client";

import { useContext, useState } from "react";
import { TaskContext } from "@/context/TaskContext";
import { TaskStatus } from "@/types/task";
import Link from "next/link";
import TaskForm from "@/components/TaskForm";

export default function HomePage(){
    const context = useContext(TaskContext);
    const [filter, setFilter] = useState<TaskStatus | "all">("all");
    const filterOptions = ["all", "todo", "in-progress", "done"];

    if(!context){
        return <p>TaskContext is missing</p>;
    }

    const filteredTasks = context.tasks.filter((task) => {
        if (filter === "all") return true;
        return task.status === filter;
    });

    return (
        <div style={{ display: "flex", flexDirection: "row", gap: "10px"}}>
            <div>
                <div style={{ marginBottom: "16px", display: "flex", gap: "8px" }} className="border p-3">
                    {filterOptions.map((filterOption) => (
                        <button 
                            key={filterOption} 
                            onClick={() => setFilter(filterOption as TaskStatus | "all")}
                            style={{ fontWeight: filter === filterOption ? "bold" : "normal"}}>
                            {filterOption}
                        </button>
                    ))}
                </div>
                <ul className="border p-3">
                    {filteredTasks.map((task) => (
                        <li key={task.id}><strong>{task.title}</strong>: {task.status} | <Link href={`/tasks/${task.id}`}><strong>Details</strong></Link></li>
                    ))}
                </ul>
            </div>
            <div>
                <TaskForm/>
            </div>
        </div>
    );
}