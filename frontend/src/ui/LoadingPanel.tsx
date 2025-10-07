import { Spinner } from "./Spinner";

interface LoadingPanelProps {
  spinnerSize?: number;
  spinnerColor?: string;
  opacity?: number;
}

function LoadingPanel({
  spinnerSize = 48,
  spinnerColor = "#fff",
  opacity = 40,
}: LoadingPanelProps) {
  return (
    <div className="absolute inset-0 w-full h-full flex justify-center items-center bg-transparent z-10">
      <div
        style={{ opacity: opacity / 100 }}
        className="w-full h-full flex flex-1 bg-black"
      />
      <div className="w-fit h-fit absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Spinner size={spinnerSize} color={spinnerColor} />
      </div>
    </div>
  );
}

export { LoadingPanel };
