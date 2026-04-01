import { lazy, Suspense, useState } from "react";
import type { FormType } from "../model/enums";
import { Button } from "shared/ui/button";

const COMPONENTS = {
  ClickTimer: lazy(() => import("features/refExamples").then((module) => ({ default: module.ClickTimer }))),
  PreviousInput: lazy(() =>
    import("features/refExamples").then((module) => ({ default: module.PreviousInput })),
  ),
  FocusTracker: lazy(() =>
    import("features/refExamples").then((module) => ({ default: module.FocusTracker })),
  ),
  DebouncedLogger: lazy(() =>
    import("features/refExamples").then((module) => ({ default: module.DebouncedLogger })),
  ),
  WebsocketLogger: lazy(() =>
    import("features/refExamples").then((module) => ({ default: module.WebsocketLogger })),
  ),
};

export const UseRefExamplesWidget = () => {
  const [chosenForm, setChosenForm] = useState<FormType>("ClickTimer");

  const ChosenComponent = COMPONENTS[chosenForm];

  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-4 mb-4">
        <Button text="ClickTimer" onClick={() => setChosenForm("ClickTimer")} className="bg-amber-500" />
        <Button
          text="PreviousInput"
          onClick={() => setChosenForm("PreviousInput")}
          className="bg-green-500"
        />
        <Button text="FocusTracker" onClick={() => setChosenForm("FocusTracker")} className="bg-purple-500" />
        <Button
          text="DebouncedLogger"
          onClick={() => setChosenForm("DebouncedLogger")}
          className="bg-zinc-500"
        />
        <Button
          text="WebsocketLogger"
          onClick={() => setChosenForm("WebsocketLogger")}
          className="bg-pink-500"
        />
      </div>
      <Suspense fallback={<div>Загрузка...</div>}>
        <ChosenComponent />
      </Suspense>
    </div>
  );
};
