"use client";

import { useDispatch } from "react-redux";
import { deleteTodo } from "@/entities/todo/model/todoSlice";
import type { AppDispatch } from "@/shared/store/store";
import { Button } from "@/shared/ui/button";
import { Trash2 } from "lucide-react";

type Props = { id: string };

export default function DeleteTodoButton({ id }: Props) {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <Button className="" onClick={() => dispatch(deleteTodo(id))}>
      <Trash2 className="stroke-red-400 w-4" />
    </Button>
  );
}
