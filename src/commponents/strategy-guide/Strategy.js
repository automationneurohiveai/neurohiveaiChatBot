import { useForm } from "react-hook-form";
import "./Strategy.css";
import { usePostEmailFooter } from "../../server/usePostEmailFooter";
import InputValidation from "../InputValidation/InputValidation";

export default function Strategy() {
  const { submitDataValidationEmail } = usePostEmailFooter();
  const { handleSubmit, reset, control } = useForm({
    defaultValues: {
      email: "",
    },
  });

  const handleSubmitEmail = (data) => {
    submitDataValidationEmail(data);
    reset();
  };

  return (
    <section className="strategy">
      <div className="w-full mob:max-w-[347px] flex flex-col items-center">
        <h2 className="title-2 text-white mob:text-center">
          Get Your Free AI Strategy Guide
        </h2>
        <ul className="flex items-center gap-[42px] mt-[10px]">
          <li className="text-[#FB5D21]">Get Guide + PDF Template Gift</li>
          <li className="text-[#FB5D21]">Get Access to the Demo Platform</li>
        </ul>
        <div className="w-[523px] mt-[30px] py-[15px] px-[30px] bg-[#1B1B1B] rounded-[10px] flex justify-between mob:w-full mob:bg-transparent mob:p-0 mob:flex-col mob:gap-[30px]">
          <InputValidation
            name="email"
            control={control}
            placeholder="Type your E-mail here..."
            className="title-3 mob:bg-[#1B1B1B] mob:px-[30px] mob:py-[15px]"
            rules={{
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            }}
          />
          <button
            className="orange-btn"
            onClick={handleSubmit(handleSubmitEmail)}
          >
            Get Guide & Demo
          </button>
        </div>
      </div>
    </section>
  );
}
