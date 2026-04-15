import { HoverableBlock } from "entities/hoverableBlock";
import { DeleteButton } from "features/deleteButton";

export const PortalShowcasePage = () => {
  return (
    <div>
      <h1>Страница с примерами работы React Portal</h1>
      <div className="mt-4 flex justify-center">
        <HoverableBlock />
      </div>
      <div className="mt-4 flex justify-center">
        <DeleteButton />
      </div>
    </div>
  );
};
