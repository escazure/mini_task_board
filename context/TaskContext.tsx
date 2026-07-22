"use client";

import { createContext, useState } from "react";
import { Task } from "@/types/task";

const initialTasks: Task[] = [
  { id: 1, title: "Task 1", description: "Donec maximus ex nec neque.", status: "done" },
  { id: 2, title: "Task 2", description: "Lorem ipsum dolor sit amet.", status: "in-progress" },
  { id: 3, title: "Task 3", description: "In vestibulum diam vitae congue.", status: "todo" },
  { id: 4, title: "Task 4", description: "Etiam sollicitudin massa sapien. Sed.", status: "todo" },
  { id: 5, title: "Task 5", description: "Mauris id congue sem, at.", status: "todo" },
  { id: 6, title: "Task 6", description: "Nulla ac leo ut nunc.", status: "todo" },
];

interface TaskContextType {
    tasks: Task[];
    addTask: (newTask: Task) => void;
}

export const TaskContext = createContext<TaskContextType | undefined>(undefined);

export function TaskProvider({ children }: { children: React.ReactNode}){
    const [tasks, setTasks] = useState<Task[]>(initialTasks);

    const addTask = (newTask: Task) => {
        setTasks((prevTasks) => [newTask, ...prevTasks]);
    }

    return (
        <TaskContext.Provider value={{ tasks, addTask }}>
            {children}
        </TaskContext.Provider>
    );
}