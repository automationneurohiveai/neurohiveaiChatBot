import { motion } from "framer-motion";
import { useForm, Controller } from "react-hook-form";
import "./IntroForm.css";

const IntroForm = ({ onSubmit, isUrlValid, onUrlChange }) => {
  const { handleSubmit, control } = useForm({
    defaultValues: { url: "" },
  });

  const handleFormSubmit = (data) => {
    if (isUrlValid) {
      onSubmit(data.url);
    }
  };

  return (
    <div className="intro-form-content">
      {/* AI Avatar */}
      <div className="intro-avatar">
        <img
          src={`${process.env.PUBLIC_URL}/image/intro/intro-gif.gif`}
          alt="AI Agent"
          className="intro-avatar-image"
        />
      </div>

      {/* Title and Description */}
      <div className="intro-text">
        <h2 className="intro-title">Meet your AI Agent</h2>
        <p className="intro-description">
          Your AI Agent is more than a tool — it's a team member. It learns your
          processes, talks to clients, and executes tasks — so you can focus on
          what really matters.
        </p>
        <p className="intro-instruction">Just paste your link below</p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(handleFormSubmit)} className="intro-form">
        <div className="intro-input-container">
          <Controller
            name="url"
            control={control}
            rules={{
              required: "URL is required",
              validate: (value) => {
                const isValid =
                  value.trim() !== "" &&
                  (() => {
                    try {
                      new URL(value);
                      return true;
                    } catch (_) {
                      return false;
                    }
                  })();
                onUrlChange(value);
                return isValid || "Please enter a valid URL";
              },
            }}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                className="intro-input"
                placeholder="Paste your website here..."
                onChange={(e) => {
                  field.onChange(e);
                  onUrlChange(e.target.value);
                }}
              />
            )}
          />

          <motion.button
            type="submit"
            className="intro-submit-button"
            disabled={!isUrlValid}
            animate={{
              backgroundColor: isUrlValid ? "#000000" : "#D1D5DB",
              color: isUrlValid ? "#FFFFFF" : "#6B7280",
              scale: isUrlValid ? 1 : 0.98,
            }}
            whileHover={
              isUrlValid ? { scale: 1.02, backgroundColor: "#1F2937" } : {}
            }
            whileTap={isUrlValid ? { scale: 0.98 } : {}}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            style={{
              cursor: isUrlValid ? "pointer" : "not-allowed",
            }}
          >
            Start analysing
            {isUrlValid && (
              <motion.div
                className="intro-button-indicator"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            )}
          </motion.button>
        </div>
      </form>
    </div>
  );
};

export default IntroForm;
