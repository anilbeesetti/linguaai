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
    <div className="w-full relative">
      {effect && (
        <div className="absolute block inset-0 bg-slate-600 rounded-2xl -rotate-2"></div>
      )}
      <div className="rounded-2xl transition shadow-lg w-full relative bg-white">
        <div className="p-4 flex flex-row items-center gap-2">
          {isLoading ? (
            <div className="flex relative w-7 h-7 rounded-full items-center justify-center">
              <div className="rounded-full h-6 w-6 bg-primary-100"></div>
              <div className=" animate-ping absolute inset-0 rounded-full bg-primary-100"></div>
            </div>
          ) : (
            <ResponseInfoIcon isError={isError} isSuccess={isSuccess} />
          )}

          <div>
            <h1 className=" font-semibold text-sm">{title}</h1>
            <p className=" text-xs text-gray-500">{subtitle}</p>
          </div>
        </div>
        {isError ? (
          <div className="mt-3 rounded-md p-2">{error}</div>
        ) : (
          isSuccess && <div className="px-3">{children}</div>
        )}
      </div>
    </div>
  );
};

export default ResultCard;
