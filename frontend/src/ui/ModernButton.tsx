import { twMerge } from "tailwind-merge";
import React from "react";

interface ModernButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseUp?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseDown?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseEnter?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseLeave?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  text?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
}

function ModernButton({
  onClick,
  onMouseUp,
  onMouseDown,
  onMouseEnter,
  onMouseLeave,
  disabled = false,
  text,
  icon,
  iconPosition = "left",
  className,
}: ModernButtonProps) {
  return (
    <button
      onClick={onClick}
      onMouseUp={onMouseUp}
      onMouseDown={onMouseDown}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      disabled={disabled}
      className={twMerge(
        `
        relative
        inline-flex
        items-center
        justify-center
        gap-2
        px-5
        py-3
        rounded-xl
        font-semibold
        transition-all
        duration-300
        border
        border-transparent
        shadow-[0_0_10px_rgba(255,255,255,0.1)]
        bg-[var(--clr-surface-a20)]
        text-[var(--clr-text-primary)]
        hover:bg-[var(--clr-surface-a30)]
        hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]
        active:scale-95
        focus:outline-none
        focus:ring-2
        focus:ring-[var(--clr-primary-secondary)]
        disabled:opacity-50
        disabled:cursor-not-allowed
        `,
        className
      )}
    >
      {icon && iconPosition === "left" && (
        <span className="flex items-center">{icon}</span>
      )}
      {text && <span>{text}</span>}
      {icon && iconPosition === "right" && (
        <span className="flex items-center">{icon}</span>
      )}
    </button>
  );
}

export { ModernButton };
