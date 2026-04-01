import { UseRefExamplesWidget } from "widgets/useRefExamplesWidget/ui/UseRefExamplesWidget";

export const UseRefPage = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="mb-[12px]">Примеры использования useRef</h1>
      <UseRefExamplesWidget />
    </div>
  );
};
