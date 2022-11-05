import { ResponseInfoIcon } from "./ResponseInfoIcon";

type Props = {
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  error: string;
  title: string;
  subtitle: string;
  idleText?: string;
  effect: boolean;
  children: React.ReactNode;
};

const ResultCard = ({
  isLoading,
  isSuccess,
  isError,
  error,
  title,
  idleText,
  effect,
  subtitle,
  children,
}: Props) => {
  return (
    <div
      className={`p-4 bg-white rounded-2xl transition shadow-lg w-full relative ${
        effect &&
        "before:content-[''] before:absolute before:block before:inset-0 before:bg-slate-600 before:rounded-2xl before:-rotate-2 before:-z-[1]"
      }`}
    >
      <div className="flex flex-row items-center gap-2">
        {isLoading ? (
          <div className="flex relative w-7 h-7 rounded-full items-center justify-center">
            <div className="rounded-full h-6 w-6 bg-primary-100"></div>
            <div className=" animate-ping absolute inset-0 rounded-full bg-primary-100"></div>
          </div>
        ) : (
          <ResponseInfoIcon isError={isError} isSuccess={isSuccess} />
        )}

        <div>
          <h1 className=" font-medium text-sm">{title}</h1>
          <p className=" text-xs text-gray-500">{subtitle}</p>
        </div>
      </div>
      {isError ? (
        <div className="mt-3 rounded-md p-2">{error}</div>
      ) : (
        isSuccess && <div className="px-3">{children}</div>
      )}
    </div>
  );
};

export default ResultCard;
