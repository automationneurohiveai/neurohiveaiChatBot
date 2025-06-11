import { useForm } from "react-hook-form";
import "./Strategy.css";
import { usePostEmailFooter } from "../../server/usePostEmailFooter";
import InputValidation from "../InputValidation/InputValidation";
import { useState } from "react";

export default function Strategy() {
  const { submitDataValidationEmail } = usePostEmailFooter();
  const [consents, setConsents] = useState({
    agreedToTerms: false,
    agreedToMarketing: false,
  });
  const [errors, setErrors] = useState({});

  const { handleSubmit, reset, control } = useForm({
    defaultValues: {
      email: "",
    },
  });

  const handleConsentChange = (field, value) => {
    setConsents((prev) => ({
      ...prev,
      [field]: value,
    }));

    // Clear errors when user interacts
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  const validateForm = (data) => {
    const newErrors = {};

    if (!consents.agreedToTerms) {
      newErrors.terms = "You must agree to the terms and privacy policy";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmitEmail = (data) => {
    if (validateForm(data)) {
      const submissionData = {
        ...data,
        consentData: {
          termsAndPrivacy: consents.agreedToTerms,
          marketing: consents.agreedToMarketing,
          timestamp: new Date().toISOString(),
          ipAddress: "client-ip",
        },
      };

      console.log("Strategy form submission:", submissionData);
      submitDataValidationEmail(submissionData);
      reset();
      setConsents({ agreedToTerms: false, agreedToMarketing: false });
    }
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
        <div className="w-[523px] mt-[30px] mob:w-full">
          <div className="py-[15px] px-[30px] bg-[#1B1B1B] rounded-[10px] flex justify-between mob:bg-transparent mob:p-0 mob:flex-col mob:gap-[30px]">
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

          <div className="consent-checkboxes mt-[20px] mob:mt-[15px]">
            <label className="custom-checkbox-label mb-[10px] w-full flex items-start text-white">
              <input
                type="checkbox"
                checked={consents.agreedToTerms}
                onChange={(e) =>
                  handleConsentChange("agreedToTerms", e.target.checked)
                }
                className="mr-[10px] mt-[2px]"
              />
              <span className="text-sm">
                I agree to the{" "}
                <a
                  href="/terms"
                  target="_blank"
                  className="text-orange-400 hover:underline"
                >
                  terms of service
                </a>{" "}
                and{" "}
                <a
                  href="/privacy-policy"
                  target="_blank"
                  className="text-orange-400 hover:underline"
                >
                  privacy policy
                </a>{" "}
                <span className="text-red-500">*</span>
              </span>
            </label>
            {errors.terms && (
              <p className="text-red-500 text-sm mt-1">{errors.terms}</p>
            )}

            <label className="custom-checkbox-label mt-[10px] w-full flex items-start text-white">
              <input
                type="checkbox"
                checked={consents.agreedToMarketing}
                onChange={(e) =>
                  handleConsentChange("agreedToMarketing", e.target.checked)
                }
                className="mr-[10px] mt-[2px]"
              />
              <span className="text-sm">
                I would like to receive marketing communications and updates
                (optional)
              </span>
            </label>
          </div>
        </div>
      </div>
    </section>
  );
}
