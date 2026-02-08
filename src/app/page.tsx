import { Header } from "@/widgets/header";
import { SearchBar } from "@/widgets/add-bar";
import { TodoList } from "@/widgets/todo-list";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center">
      <div className="max-w-[420px] w-full mt-16 flex flex-col items-center">
        <Header />
        <SearchBar />
        <TodoList />
      </div>
    </main>
  );
}
