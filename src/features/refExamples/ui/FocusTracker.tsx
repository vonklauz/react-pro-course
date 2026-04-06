import { useRef } from "react";
import { Button } from "shared/ui/button";
import { Input } from "shared/ui/input";

export const FocusTracker = () => {
  const firstInputRef = useRef<HTMLInputElement>(null);
  const secondInputRef = useRef<HTMLInputElement>(null);
  const focusCounterRef = useRef(0);

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    if (event.relatedTarget) {
      focusCounterRef.current += 1;
      console.log("Количество фокусов:", focusCounterRef.current);
    }
  };

  const handleFocusFirstInput = () => {
    firstInputRef.current?.focus();
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <h3>Компонент FocusTracker</h3>
      <Input label="Текстовое поле 1" name="refInput1" onFocus={handleFocus} ref={firstInputRef} />
      <Input label="Текстовое поле 2" name="refInput2" onFocus={handleFocus} ref={secondInputRef} />
      <Button text="Сфокусироваться на первом" className="bg-mauve-500" onClick={handleFocusFirstInput} />
    </div>
  );
};
