import { twMerge } from "tailwind-merge";
import { X } from "lucide-react";

interface ModerTextInputProps {
  text: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onClear?: () => void;
}

function ModernTextInput({
  text = "",
  placeholder,
  onChange,
  className,
  onFocus,
  onClear,
}: ModerTextInputProps) {
  function clearInput(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.preventDefault();
    event.stopPropagation();
    onClear?.();
  }

  return (
    <div
      className={twMerge(
        `
    flex
    flex-row
    items-center
    relative
    font-bold
    w-full
    h-14  /* sabit bir yükseklik belirle */
    bg-[var(--clr-surface-a10)]
    rounded-md
    border-4
    border-transparent
    focus-within:border-[var(--clr-primary-secondary)]
    transition-colors
    duration-500
  `,
        className
      )}
    >
      <input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        onFocus={onFocus}
        value={text}
        className={twMerge(`
      flex-1
      h-full
      bg-transparent
      text-[var(--clr-text-primary)]
      outline-none
      border-none
      px-4
      text-base
    `)}
      />
      <div
        className={twMerge(`
      flex 
      items-center 
      justify-center 
      pr-4
      hover:cursor-pointer
      text-[var(--clr-surface-a40)]
      hover:text-[var(--clr-surface-a50)]
      transition-colors
      duration-300
    `)}
        onMouseUp={clearInput}
      >
        <X />
      </div>
    </div>
  );
}

export { ModernTextInput };
