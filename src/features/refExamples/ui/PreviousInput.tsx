import { useState, useRef } from "react";
import { Input } from "shared/ui/input";

export const PreviousInput = () => {
  const [value, setValue] = useState("");
  const prevValue = useRef("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    prevValue.current = value;
    setValue(e.target.value);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <h3>Компонент PreviousInput</h3>
      <Input label="Текстовое поле" name="refInput" value={value} onChange={onChange} />
      <div>{"Предыдущее значение: " + prevValue.current}</div>
    </div>
  );
};
