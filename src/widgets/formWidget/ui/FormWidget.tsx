import { lazy, Suspense, useState } from "react";
import type { FormType } from "../model/enums";
import { Button } from "shared/ui/button";

const FORMS = {
  native: lazy(() => import("features/nativeForm").then((module) => ({ default: module.NativeForm }))),
  formik: lazy(() => import("features/formikForm").then((module) => ({ default: module.FormikForm }))),
  rhf: lazy(() => import("features/rhfForm").then((module) => ({ default: module.RhfForm }))),
};

export const FormWidget = () => {
  const [chosenForm, setChosenForm] = useState<FormType>("native");

  const FormComponent = FORMS[chosenForm];

  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-4 mb-4">
        <Button
          text="Форма на нативном React 19"
          onClick={() => setChosenForm("native")}
          className="bg-amber-500"
        />
        <Button text="Форма на Formik" onClick={() => setChosenForm("formik")} className="bg-green-500" />
        <Button
          text="Форма на React Hook Form"
          onClick={() => setChosenForm("rhf")}
          className="bg-purple-500"
        />
      </div>
      <Suspense fallback={<div>Загрузка...</div>}>
        <FormComponent />
      </Suspense>
    </div>
  );
};
