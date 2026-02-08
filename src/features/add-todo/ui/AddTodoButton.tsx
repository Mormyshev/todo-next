"use client";

import { useDispatch } from "react-redux";
import { addTodo } from "@/entities/todo/model/todoSlice";
import type { AppDispatch } from "@/shared/store/store";
import { Button } from "@/shared/ui/button";
import { Plus } from "lucide-react";

type Props = { title: string; onAdded?: () => void };

export default function AddTodoButton({ title, onAdded }: Props) {
  const dispatch = useDispatch<AppDispatch>();

  const handleAdd = () => {
    if (!title.trim()) return;
    dispatch(addTodo({ id: crypto.randomUUID(), title, done: false }));
    onAdded?.();
  };

  return (
    <Button
      onClick={handleAdd}
      className="cursor-pointer flex-wrap px-4 py-2 border border-[#e9edf2] bg-[#92c5f4] hover:bg-[#62aaec] rounded-[5px] rounded-tl-[0px] rounded-bl-[0px] absolute left-[263px]"
    >
      <Plus className="text-[#fff]" />
    </Button>
  );
}
