import logo from "../../assets/Logo.png";
import { Button } from "../ui/button";
import { Fullscreen, Minus, X } from "lucide-react";

export function Title() {
  return (
    <div className="w-full h-12 bg-(--color-secondary) flex flex-row items-center draggable justify-between">
      <div className="flex flex-row items-center">
        <img src={logo} alt="Logo" className="h-8 ml-4 rounded-sm" />
        <h1 className="text-(--color-foreground) ml-4 text-lg font-semibold">
          Museek
        </h1>
      </div>
      <div className="flex flex-row gap-1 ">
        <Button
          size="sm"
          variant="outline"
          className="mr-2 cursor-pointer no-drag"
        >
          <Minus />
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="mr-2 cursor-pointer no-drag"
        >
          <Fullscreen />
        </Button>
        <Button
          variant="destructive"
          size="sm"
          className="mr-2 cursor-pointer no-drag"
        >
          <X />
        </Button>
      </div>
    </div>
  );
}
