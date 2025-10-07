import type React from "react";
import { ModernTextInput } from "../../ui/ModernTextInput";
import { useSearchTracks } from "../../context/SearchTracksContext";

function SearchTracksBar() {
  const { query, setQuery } = useSearchTracks();

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    event.stopPropagation();

    const inputValue = event.target.value;
    setQuery(inputValue);

    console.log("triggerred");
  }

  function handleClearInput() {
    setQuery("");
  }

  return (
    <div
      className={`
        shadow-[0_0_60px_rgba(255,255,255,0.3)]
        rounded-md
    w-fit 
    h-fit 
    flex 
    flex-1 
    flex-row`}
    >
      <ModernTextInput
        text={query}
        onChange={handleInputChange}
        onClear={handleClearInput}
      />
    </div>
  );
}

export { SearchTracksBar };
