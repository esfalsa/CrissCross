function ErrorMessage({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2 p-4">
      <p className="font-semibold tracking-tight">{title}</p>
      <div>{children}</div>
    </div>
  );
}

export default ErrorMessage;
