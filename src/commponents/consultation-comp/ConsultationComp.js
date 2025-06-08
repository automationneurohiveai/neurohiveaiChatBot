import "./Consultation.css";
import { useState } from "react";
import Success from "../success-modal/Success";
import { useUIContext } from "../../Context/UIContext";

export default function ConsultationComp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    phone: "",
    agreedToTerms: false,
  });

  const [errors, setErrors] = useState({});

  const { visible, setVisible } = useUIContext();
  // Email validation
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Website validation
  const validateWebsite = (website) => {
    if (!website) return true; // Field is optional
    try {
      const url = website.startsWith("http") ? website : `https://${website}`;
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  // Handle input changes
  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    // Clear errors on input
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  // Form validation
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (formData.website && !validateWebsite(formData.website)) {
      newErrors.website = "Please enter a valid website URL";
    }

    if (!formData.agreedToTerms) {
      newErrors.terms = "You must agree to the terms and privacy policy";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Form submission logic will be here
      console.log("Form is valid:", formData);
      setVisible(true);
    }
  };

  return (
    <>
      <div className="section flex gap-[140px] ">
        <div className="max-w-[468px]">
          <h2 className="title-2 text-linear">Get Your Free AI Consultation</h2>
          <p className="mt-[10px] text-[#818181]">
            Discover how AI can boost your business performance. Let's explore
            together how NeuroHive AI can streamline your operations.
          </p>
          <div className="grid grid-cols-2 gap-[20px] mt-[30px]">
            <div className="consult-card saas-hover-effect">
              <h3 className="title-3">+40% Productivity</h3>
              <p className="main-txt text-[#818181]">
                Boost productivity by 40% with AI automation
              </p>
              <img
                src={`${process.env.PUBLIC_URL}/image/consultation/icon-graph.svg`}
                alt="Consultation Icon 1"
                className="consultation-img"
              />
            </div>
            <div className="consult-card saas-hover-effect">
              <h3 className="title-3">Easy Automation</h3>
              <p className="main-txt text-[#818181]">
                Automate routine processes easily
              </p>
              <img
                src={`${process.env.PUBLIC_URL}/image/consultation/icon-Mashine.svg`}
                alt="Consultation Icon 2"
                className="consultation-img"
              />
            </div>
            <div className="consult-card saas-hover-effect">
              <h3 className="title-3">Personalized Solutions</h3>
              <p className="main-txt text-[#818181]">
                Personalized AI solutions for your business
              </p>
              <img
                src={`${process.env.PUBLIC_URL}/image/consultation/icon-ai.svg`}
                alt="Consultation Icon 3"
                className="consultation-img"
              />
            </div>
            <div className="consult-card saas-hover-effect">
              <h3 className="title-3">GDPR Secure</h3>
              <p className="main-txt text-[#818181]">
                GDPR compliant and data secure
              </p>
              <img
                src={`${process.env.PUBLIC_URL}/image/consultation/icon-lock.svg`}
                alt="Consultation Icon 4"
                className="consultation-img"
              />
            </div>
          </div>
        </div>
        <form className="consultation-form" onSubmit={handleSubmit}>
          <h3 className="subtitle-cover">Contact form</h3>
          <p className="txt-caption-3 max-w-[233px] text-[#818181] text-center">
            Fill out the form below and we'll get back to you within 24 hours.
          </p>
          <div className="flex flex-col gap-[10px] mt-[20px] w-full">
            <div>
              <input
                className={`input-style-1 ${errors.name ? "border-red-500" : ""}`}
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <input
                className={`input-style-1 ${errors.email ? "border-red-500" : ""}`}
                type="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <input
              className="input-style-1"
              type="text"
              placeholder="Company"
              value={formData.company}
              onChange={(e) => handleInputChange("company", e.target.value)}
            />

            <div>
              <input
                className={`input-style-1 ${errors.website ? "border-red-500" : ""}`}
                type="text"
                placeholder="Website"
                value={formData.website}
                onChange={(e) => handleInputChange("website", e.target.value)}
              />
              {errors.website && (
                <p className="text-red-500 text-sm mt-1">{errors.website}</p>
              )}
            </div>

            <input
              className="input-style-1"
              type="tel"
              placeholder="Phone"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
            />
          </div>

          <label className="custom-checkbox-label mt-[15px] w-full">
            <input
              type="checkbox"
              checked={formData.agreedToTerms}
              onChange={(e) =>
                handleInputChange("agreedToTerms", e.target.checked)
              }
            />
            <div className="checkmark"></div>
            <span className="main-txt text-[#818181]">
              I agree to the terms and privacy policy
            </span>
          </label>
          {errors.terms && (
            <p className="text-red-500 text-sm mt-1">{errors.terms}</p>
          )}

          <div className="flex mt-[30px] items-center gap-[10px]">
            <img src={`${process.env.PUBLIC_URL}/image/lock.svg`} />
            <p className="text-[#818181] text-[12px]">
              All your information is encrypted and fully protected. Check our
              <a href="" className="text-black">
                {" "}
                Privacy Policy
              </a>
            </p>
          </div>
          <button
            className="w-full black-btn py-[18px] mt-[20px]"
            type="submit"
          >
            Submit form
          </button>
        </form>
      </div>
      {visible && <Success />}

      {/* Success Modal */}
    </>
  );
}
