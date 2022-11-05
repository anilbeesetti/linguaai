type Props = {
  children: React.ReactNode;
};
export const SubTitle = ({ children }: Props) => {
  return <h2 className="mx-1 text-xl font-medium">{children}</h2>;
};
