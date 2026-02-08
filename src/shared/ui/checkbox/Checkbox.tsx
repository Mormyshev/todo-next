type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement>;

export default function Checkbox({ className, ...props }: CheckboxProps) {
  return (
    <input
      type="checkbox"
      {...props}
      className={`h-4 w-4 cursor-pointer appearance-none rounded-full border border-[#d4d6d8] bg-white checked:bg-[#92c5f4] checked:border-[#92c5f4] ${
        className ?? ""
      }`}
    />
  );
}
