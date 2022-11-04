type ClickableWordProps = {
  word: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement> | undefined;
};

export const ClickableWord = ({ word, onClick }: ClickableWordProps) => {
  return (
    <a
      className=" text-primary_green underline cursor-pointer"
      onClick={onClick}
    >
      {word}
    </a>
  );
};
