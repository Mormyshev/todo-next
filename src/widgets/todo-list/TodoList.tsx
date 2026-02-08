"use client";

import { useSelector } from "react-redux";
import type { RootState } from "@/shared/store/store";
import { TodoItem } from "@/widgets/todo-item";

const TodoList = () => {
  const todos = useSelector((state: RootState) => state.todos);
  if (todos.length === 0) return null;

  return (
    <div className="w-[320px]">
      <ul className=" mr-auto p-4 border border-[#e9edf2] rounded-[5px] bg-white mb-4">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            done={todo.done}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
