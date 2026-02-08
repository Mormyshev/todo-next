type ButtonProps = {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
};

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button {...props} className={`cursor-pointer ${props.className ?? ""}`}>
      {children}
    </button>
  );
}
