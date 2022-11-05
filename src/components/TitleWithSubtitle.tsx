type MainTitleWithSubtitleProps = {
  title: string;
  subTitle?: string;
};

export const MainTitleWithSubtitle = ({
  title,
  subTitle,
}: MainTitleWithSubtitleProps) => {
  return (
    <div className="flex items-end space-x-2">
      <h1 className="font-bold text-4xl font-display">{title}</h1>
      <span className="text-primary_green font-medium text-lg">{subTitle}</span>
    </div>
  );
};
