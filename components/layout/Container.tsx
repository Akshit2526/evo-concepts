interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full max-w-[1700px] px-10 xl:px-12 ${className}`}
    >
      {children}
    </div>
  );
}