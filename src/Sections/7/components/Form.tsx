import { useState } from "react";
import { useForm } from "react-hook-form";
import { sendContact } from "./email";

export type FormData = {
  name: string;
  email: string;
  tel: string;
  message: string;
};

export const Form = () => {
  const [loading, setLoading] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    setLoading(true);
    sendContact(data)
      .then(() => {
        setSubmitSuccess(true);
        setTimeout(() => {
          setSubmitSuccess(false);
          reset();
        }, 3000);
      })
      .catch(() => {
        setSubmitSuccess(false);
        reset();
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-xl bg-gradient-to-t from-[#2ABA64] to-[#3369FF] py-[25px] xl:py-[35px] xl:pb-[45px] md:w-1/2"
      aria-live="polite"
      aria-atomic="true"
    >
      <div className="text-[24px] xl:text-[41px] font-bold font-gopher text-center">
        ¿Quieres compartirme algo?
      </div>
      <div className="flex flex-col gap-[8px] xl:gap-[22px] px-[50px] xl:px-[95px] mt-1 xl:mt-5 text-white xl:text-[22px]">
        <label htmlFor="name">
          <div>Nombre:</div>
          <input
            id="name"
            type="text"
            aria-label="Nombre"
            {...register("name", { required: true })}
            className={`w-full bg-[#FAFAFA] rounded-md h-[28px] xl:h-[46px] border-2 ${
              errors.name ? "border-red-500" : "border-[#122E3F]"
            } text-[#071E2C] px-[7px]`}
          />
          {errors.name && (
            <p className="text-red-700" role="alert" aria-live="assertive">
              Nombre es requerido
            </p>
          )}
        </label>

        <label htmlFor="email">
          <div>Correo electrónico:</div>
          <input
            id="email"
            type="email"
            aria-label="Correo"
            {...register("email", { required: true })}
            className={`w-full bg-[#FAFAFA] rounded-md h-[28px] xl:h-[46px] border-2 ${
              errors.email ? "border-red-500" : "border-[#122E3F]"
            } text-[#071E2C] px-[7px]`}
          />
          {errors.email && (
            <p className="text-red-700" role="alert" aria-live="assertive">
              Correo electrónico es requerido
            </p>
          )}
        </label>

        <label htmlFor="tel">
          <div>Teléfono:</div>
          <input
            id="tel"
            type="text"
            aria-label="Telefono"
            {...register("tel", { required: true })}
            className={`w-full bg-[#FAFAFA] rounded-md h-[28px] xl:h-[46px] border-2 ${
              errors.tel ? "border-red-500" : "border-[#122E3F]"
            } text-[#071E2C] px-[7px]`}
          />
          {errors.tel && (
            <p className="text-red-700" role="alert" aria-live="assertive">
              Teléfono es requerido
            </p>
          )}
        </label>

        <label htmlFor="message">
          <div>Tu mensaje (opcional)</div>
          <textarea
            id="message"
            aria-label="Mensaje"
            {...register("message")}
            className={`w-full bg-[#FAFAFA] rounded-md h-[120px] xl:h-[196px] border-2 ${
              errors.message ? "border-red-500" : "border-[#122E3F]"
            } text-[#071E2C] px-[7px]`}
          />
        </label>
        <div>
          <button
            type="submit"
            className="flex justify-center items-center text-[13px] xl:text-[16px] font-bold bg-[#09202E] rounded-md h-[28px] xl:h-[40px] w-full xl:w-[320px] m-auto xl:mt-[16px]"
            onKeyDown={(e) => e.key === "Enter" && handleSubmit(onSubmit)()}
            disabled={loading}
          >
            {loading ? "Enviando..." : "Enviar"}
          </button>
          {submitSuccess && (
            <p className="text-center">¡Formulario enviado con éxito!</p>
          )}
        </div>
      </div>
    </form>
  );
};
