import { twMerge } from "tailwind-merge";

interface ModernNavigationButtonProps {
  className?: string;
  label?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  onMouseUp?: () => void;
  onMouseDown?: () => void;
}

export function ModernNavigationButton({
  className,
  label,
  icon,
  onClick,
  onMouseDown,
  onMouseUp,
}: ModernNavigationButtonProps) {
  return (
    <button
      onClick={onClick}
      onMouseUp={onMouseUp}
      onMouseDown={onMouseDown}
      className={twMerge(
        `
        w-full h-12
        flex items-center justify-center gap-2
        bg-[var(--clr-surface-a30)]
        hover:bg-[var(--clr-surface-a40)]
        active:bg-[var(--clr-surface-a50)]
        text-[var(--clr-text-primary)]
        font-medium
        rounded-xl
        shadow-[0_1px_2px_rgba(0,0,0,0.3)]
        hover:shadow-[0_2px_6px_rgba(0,0,0,0.4)]
        transition-all duration-200
        cursor-pointer select-none
        backdrop-blur-sm
        `,
        className
      )}
    >
      {icon && <span className="text-lg">{icon}</span>}
      {label && <span>{label}</span>}
    </button>
  );
}
