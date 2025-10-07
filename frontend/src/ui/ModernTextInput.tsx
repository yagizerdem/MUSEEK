import { twMerge } from "tailwind-merge";
import { X } from "lucide-react";
import { useRef } from "react";

interface ModerTextInputProps {
  text: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

function ModernTextInput({
  text = "",
  placeholder,
  onChange,
  className,
  onFocus,
}: ModerTextInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  function clearInput(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.preventDefault();
    event.stopPropagation();
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  }

  return (
    <div
      className={`
    w-fit
    h-fit
    flex flex-1 flex-row
    relative
    font-bold
    `}
    >
      <input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        onFocus={onFocus}
        ref={inputRef}
        value={text}
        className={twMerge(
          `
    relative
    w-full 
    h-full 
    bg-[var(--clr-surface-a10)]
    text-[var(--clr-text-primary)]
    rounded-md
    p-4
    outline-none
    border-transparent
    focus:outline-none
    focus:ring-0
    focus:border-[var(--clr-primary-secondary)]
    focus:bg-[var(--clr-surface-a10)]
    transition-colors
    border-solid
    border-4
    duration-500
    `,
          className
        )}
      />
      <div
        className={`
        relative 
        right-8 
        flex items-center 
        justify-center 
        align-middle
        hover:cursor-pointer
        text-[var(--clr-surface-a40)]
        hover:text-[var(--clr-surface-a50)]
        transition-colors
        transition-duration-300`}
        onMouseUp={clearInput}
      >
        <X />
      </div>
    </div>
  );
}

export { ModernTextInput };
