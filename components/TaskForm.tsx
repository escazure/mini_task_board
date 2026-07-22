"use client";

import { TaskContext } from "@/context/TaskContext";
import { TaskStatus } from "@/types/task";
import { useState, useContext } from "react";

export default function TaskForm(){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState<TaskStatus>("todo");
    const [error, setError] = useState("");

    const context = useContext(TaskContext);
    if(!context){
        return <p>TaskContext is missing</p>;
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();


        if(!title.trim() || !description.trim()){
            setError("Please fill in title and description");
            return;
        }

        context.addTask({
            id: Date.now(),
            title: title,
            description: description, 
            status: status
        });

        setTitle("");
        setDescription("");
        setStatus("todo");
        setError("");
    }

    return (
        <form onSubmit={handleSubmit}>
            {error && <p>{error}</p>}
            <label>Title: </label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="border"></input>
            <br/>
            <label>Description: </label>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="border"></textarea>
            <br/>
            <label>Status: </label>
            <select value={status} onChange={(e) => setStatus(e.target.value as TaskStatus)} className="border">
                <option value="todo">ToDo</option>
                <option value="in-progress">In-Progress</option>
                <option value="done">Done</option>
            </select>
            <br/>
            <button type="submit" className="font-bold">Add task</button>
        </form>
    );
}