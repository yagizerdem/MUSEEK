import logo from "../../assets/Logo.png";

export function Title() {
  return (
    <div className="w-full h-12 bg-(--color-secondary) flex flex-row items-center draggable">
      <div className="flex flex-row items-center">
        <img src={logo} alt="Logo" className="h-8 ml-4 rounded-sm" />
        <h1 className="text-(--color-foreground) ml-4 text-lg font-semibold">
          Museek
        </h1>
      </div>
      <div className="flex flex-row gap-1"></div>
    </div>
  );
}
