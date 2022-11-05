type Props = {
  title: string;
  prefix: string;
  term: string;
  suffix: string;
};

export const Example = ({ title, prefix, term, suffix }: Props) => {
  return (
    <em className="mt-2 flex space-x-2 text-slate-600">
      <span>{title}</span>
      <div>
        <span>{prefix}</span>
        <span className=" text-primary_green">{term}</span>
        <span>{suffix}</span>
      </div>
    </em>
  );
};
