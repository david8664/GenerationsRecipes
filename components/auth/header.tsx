interface HeaderProps {
  label: string;
}

const Header = ({ label }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <h1>התחברות</h1>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};
export default Header;
