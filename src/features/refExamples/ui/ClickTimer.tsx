import { useRef } from "react";

type CountRefData = {
  firstClickTime: number | null;
  count: number;
};

export const ClickTimer = () => {
  const counterRef = useRef<CountRefData>({
    firstClickTime: null,
    count: 0,
  });
  const handleClick = () => {
    if (counterRef.current.count === 0) {
      counterRef.current.firstClickTime = Date.now();
    } else {
      console.log(
        "Время между текущим кликом и первым:",
        Date.now() - (counterRef.current.firstClickTime ?? 0),
        "мс",
      );
    }
    counterRef.current.count += 1;

    console.log("Кликов:", counterRef.current.count);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <h3>Компонент ClickTimer</h3>
      <button onClick={handleClick} className="px-4 py-2 bg-blue-500 text-white rounded">
        Нажми меня
      </button>
      <div>{"Смотрим в консоль :)"}</div>
    </div>
  );
};
