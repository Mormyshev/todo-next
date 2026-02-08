import { ToggleTodoButton } from "@/features/toggle-todo/ui";
import { DeleteTodoButton } from "@/features/delete-todo/ui";
import { TodoText } from "@/shared/ui/todo-text";

type Props = { id: string; title: string; done: boolean };

export default function TodoItem({ id, title, done }: Props) {
  return (
    <li className="w-full flex items-center not-last:mb-4 border border-[#e9edf2] bg-[#f5f7fa] p-2 rounded-[5px]">
      <ToggleTodoButton id={id} done={done} />
      <TodoText done={done}>{title}</TodoText>
      <div className="flex gap-[10px] ml-auto">
        <DeleteTodoButton id={id} />
      </div>
    </li>
  );
}
