type Props = { children: React.ReactNode; done?: boolean };

export default function TodoText({ children, done }: Props) {
  return (
    <span className={done ? "line-through  text-[#9aa3b2]" : "text-[#121214]"}>
      {children}
    </span>
  );
}
