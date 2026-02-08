"use client";

import { Input } from "@/shared/ui/input";
import { AddTodoButton } from "@/features/add-todo/ui";
import { useState } from "react";

const AddBar = () => {
  const [title, setTitle] = useState("");

  return (
    <div className="flex mb-[20px] relative">
      <Input
        type="text"
        placeholder="Введите название заметки..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="px-4 py-2 border border-[#e9edf2] min-w-[320px] rounded-[5px] bg-white  placeholder:text-[#adb1b8] hover:placeholder:text-[#c4c4c4] hover:border-[#92c5f4] focus:outline-none focus:ring-0 focus:border-[#92c5f4]"
      />
      <AddTodoButton title={title} onAdded={() => setTitle("")} />
    </div>
  );
};

export default AddBar;
