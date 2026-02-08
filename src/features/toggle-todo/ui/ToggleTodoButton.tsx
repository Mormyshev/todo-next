"use client";

import { useDispatch } from "react-redux";
import type { AppDispatch } from "@/shared/store/store";
import { toggleTodo } from "@/entities/todo/model/todoSlice";
import { Checkbox } from "@/shared/ui/checkbox";

type Props = { id: string; done: boolean };

export default function ToggleTodoButton({ id, done }: Props) {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <Checkbox
      className="mr-2"
      checked={done}
      onChange={() => dispatch(toggleTodo(id))}
    />
  );
}
