import { FieldArray, Formik } from "formik";
import { FormWrapper } from "entities/formWrapper";
import { FormikInput } from "entities/formikInput";
import { Button } from "shared/ui/button";
import { schema } from "shared/lib/validation";
import { CrossIcon } from "shared/ui/crossIcon";

export const FormikForm = () => {
  return (
    <div className="w-[100%] max-w-[400px]">
      <Formik
        initialValues={{ name: "", email: "", password: "", confirmPassword: "", socials: [] }}
        onSubmit={(values) => {
          console.log("Submit на Formik форме", { values });
        }}
        validationSchema={schema}
      >
        {({ handleSubmit, values }) => (
          <FormWrapper onSubmit={handleSubmit} title="Форма на Formik">
            <>
              <FormikInput name="name" type="text" label="Имя" placeholder="Введите имя" />
              <FormikInput name="email" type="email" label="Email" placeholder="Введите email" />
              <FormikInput name="password" type="password" label="Пароль" placeholder="Введите пароль" />
              <FormikInput
                name="confirmPassword"
                type="password"
                label="Подтвердить пароль"
                placeholder="Подтвердить пароль"
              />
              <FieldArray name="socials">
                {({ remove, push }) => (
                  <>
                    {values.socials.map((_, index: number) => (
                      <div key={index} className="flex">
                        <div className="w-[100%]">
                          <FormikInput
                            name={`socials.${index}.url`}
                            type="text"
                            label="URL социальной сети"
                            placeholder="https://example.com"
                          />
                        </div>
                        <CrossIcon onClick={() => remove(index)} />
                      </div>
                    ))}
                    {values.socials.length < 4 && (
                      <Button
                        text="Добавить социальную сеть"
                        type="button"
                        className="bg-emerald-300 text-[12px] mb-[12px]"
                        onClick={() => push({ url: "" })}
                      />
                    )}
                  </>
                )}
              </FieldArray>
              <Button text="Отправить" type="submit" className="w-[100%] bg-blue-500" />
            </>
          </FormWrapper>
        )}
      </Formik>
    </div>
  );
};
