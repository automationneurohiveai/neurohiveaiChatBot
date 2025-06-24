import { useNavigate } from "react-router-dom";
import { useUIContext } from "../../Context/UIContext";

export default function Success() {
  const navigate = useNavigate();

  const { setVisible } = useUIContext();
  const handleBackToHome = () => {
    setVisible(false);
    navigate("/");
    setTimeout(() => {
      const element = document.getElementById("intro");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <div className="modal-cont w-full h-full">
      <div className="modal-content">
        <div className="relative mb-[10px]">
          <img
            src={`${process.env.PUBLIC_URL}/image/intro/intro-gif.gif`}
            alt="ball"
            className="object-cover w-[115px]"
          />
          <img
            src={`${process.env.PUBLIC_URL}/image/intro/intro-gif-shadow.svg`}
            className="absolute bottom-[-40px]"
          />
        </div>
        <h2 className="subtitle-1 mt-[20px]">Thanks for reaching out!</h2>
        <span className="txt-caption mt-[10px] text-center max-w-[248px]">
          Our experts will get in touch within 24 hours to schedule your free
          consultation
        </span>
        <button
          className="black-btn py-[13px] w-full mt-[30px]"
          onClick={handleBackToHome}
        >
          Back to homepage
        </button>
      </div>
    </div>
  );
}
