import { useRef } from "react";
import { Input } from "shared/ui/input";

export const DebouncedLogger = () => {
  const timeoutRef = useRef<number | null>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      console.log(e.target.value);
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <h3>Компонент DebouncedLogger</h3>
      <Input label="Текстовое поле" name="refInput" onChange={onChange} />
    </div>
  );
};
