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
    agreedToMarketing: false,
  });

  const [errors, setErrors] = useState({});

  // Cards data array for map method
  const consultationCards = [
    {
      id: 1,
      title: "+40% Productivity",
      description: "Boost productivity by 40% with AI automation",
      icon: "icon-graph.svg",
      alt: "Consultation Icon 1",
    },
    {
      id: 2,
      title: "Easy Automation",
      description: "Automate routine processes easily",
      icon: "icon-Mashine.svg",
      alt: "Consultation Icon 2",
    },
    {
      id: 3,
      title: "Personalized Solutions",
      description: "Personalized AI solutions for your business",
      icon: "icon-ai.svg",
      alt: "Consultation Icon 3",
    },
    {
      id: 4,
      title: "GDPR Secure",
      description: "GDPR compliant and data secure",
      icon: "icon-lock.svg",
      alt: "Consultation Icon 4",
    },
  ];

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
      // Add consent data to form submission
      const submissionData = {
        ...formData,
        consentData: {
          termsAndPrivacy: formData.agreedToTerms,
          marketing: formData.agreedToMarketing,
          timestamp: new Date().toISOString(),
          ipAddress: "client-ip", // Will be populated by backend
        },
      };

      console.log("Form is valid:", submissionData);
      // Here you would send submissionData to your CRM/database
      setVisible(true);
    }
  };

  return (
    <>
      <div className="section flex gap-[140px] lg:gap-[100px] md:gap-[60px] lg:flex-row flex-col lg:items-start items-center">
        {/* Content Section - Title and Cards - First on Desktop, Second on Mobile */}
        <div className="max-w-[468px] w-full lg:w-auto lg:max-w-[468px] md:max-w-[600px] sm:max-w-[90%] order-2 lg:order-1">
          <h2 className="title-2 text-linear text-center lg:text-left">
            Get Your Free AI Consultation
          </h2>
          <p className="mt-[10px] text-[#818181] text-center lg:text-left">
            Discover how AI can boost your business performance. Let's explore
            together how NeuroHive AI can streamline your operations.
          </p>

          {/* Responsive Cards Container */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-[15px] md:gap-[20px] lg:gap-[20px] mt-[30px] md:mt-[40px] consultation-cards-container">
            {consultationCards.map((card) => (
              <div
                key={card.id}
                className="consult-card saas-hover-effect consultation-card-item w-[calc(50%-8px)] sm:w-[calc(50%-10px)] lg:w-[calc(50%-10px)] max-w-[200px] lg:max-w-[220px]"
              >
                <h3 className="title-3">{card.title}</h3>
                <p className="main-txt text-[#818181]">{card.description}</p>
                <img
                  src={`${process.env.PUBLIC_URL}/image/consultation/${card.icon}`}
                  alt={card.alt}
                  className="consultation-img"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Form Section - Second on Desktop, First on Mobile */}
        <form
          className="consultation-form w-full max-w-[500px] lg:max-w-[450px] xl:max-w-[480px] lg:w-auto order-1 lg:order-2"
          onSubmit={handleSubmit}
        >
          <h3 className="subtitle-cover">Contact form</h3>
          <p className="txt-caption-3 max-w-[233px] text-[#818181] text-center mx-auto lg:mx-0">
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

          <div className="consent-checkboxes mt-[15px] w-full">
            <label className="custom-checkbox-label mb-[10px] w-full">
              <input
                type="checkbox"
                checked={formData.agreedToTerms}
                onChange={(e) =>
                  handleInputChange("agreedToTerms", e.target.checked)
                }
              />
              <div className="checkmark"></div>
              <span className="main-txt text-[#818181]">
                I agree to the{" "}
                <a
                  href="/terms"
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
                  terms of service
                </a>{" "}
                and{" "}
                <a
                  href="/privacy-policy"
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
                  privacy policy
                </a>{" "}
                <span className="text-red-500">*</span>
              </span>
            </label>
            {errors.terms && (
              <p className="text-red-500 text-sm mt-1">{errors.terms}</p>
            )}

            <label className="custom-checkbox-label mt-[10px] w-full">
              <input
                type="checkbox"
                checked={formData.agreedToMarketing}
                onChange={(e) =>
                  handleInputChange("agreedToMarketing", e.target.checked)
                }
              />
              <div className="checkmark"></div>
              <span className="main-txt text-[#818181]">
                I would like to receive marketing communications and updates
                about NeuroHive AI products and services (optional)
              </span>
            </label>
          </div>

          <div className="flex mt-[30px] items-center gap-[10px] justify-center lg:justify-start">
            <img src={`${process.env.PUBLIC_URL}/image/lock.svg`} />
            <p className="text-[#818181] text-[12px] text-center lg:text-left">
              All your information is encrypted and fully protected. Check our
              <a
                href="/privacy-policy"
                target="_blank"
                className="text-blue-600 hover:underline"
              >
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

      {/* Success Modal */}
    </>
  );
}
