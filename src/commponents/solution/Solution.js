import { useState } from "react";
import "./Solution.css";
import useIsDesktop from "../useIsDesktop";

export default function Solution() {
  const isDesktop = useIsDesktop();

  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  const solutionData = [
    {
      title: "Step 1: Intake",
      info: "The system automatically detects new input across channels — including emails with attachments, uploaded PDFs, submitted forms, or direct API requests — and prepares them for processing.",
      image: "/image/solution/step-1.svg",
    },
    {
      title: "Step 2: Processing / Structuring",
      info: "The system automatically detects new input across channels — including emails with attachments, uploaded PDFs, submitted forms, or direct API requests — and prepares them for processing.",
      image: "/image/solution/step-1.svg",
    },
    {
      title: "Step 3: Execution / Output",
      info: "The system automatically detects new input across channels — including emails with attachments, uploaded PDFs, submitted forms, or direct API requests — and prepares them for processing.",
      image: "/image/solution/step-1.svg",
    },
    {
      title: "Step 4: Logging / Archiving / Notification",
      info: "The system automatically detects new input across channels — including emails with attachments, uploaded PDFs, submitted forms, or direct API requests — and prepares them for processing.",
      image: "/image/solution/step-1.svg",
    },
  ];

  const [acitveIndex, setActiveIndex] = useState(0);

  return (
    <section className="section">
      <div className="w-full flex flex-col items-center text-center">
        <span className="title-top-type">
          <svg
            width="7"
            height="7"
            viewBox="0 0 7 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="3.5" cy="3.5" r="3.5" fill="#818181" />
          </svg>
          Solution
        </span>
        <h2 className="title-2 text-linear mt-[5px] max-w-[582px]">
          From Manual Chaos to Streamlined Intelligence
        </h2>
        <p className="max-w-[436px] mt-[10px] text-[#818181] title-3">
          Using no-code tools and AI, we built a seamless system that eliminates
          manual invoice handling, reduces errors, and ensures every document is
          processed, logged, and archived — automatically.
        </p>
      </div>
      {isDesktop ? (
        <div className="flex flex-col shadow-main rounded-[10px] bg-[#f1f1f1] mt-[30px]">
          <div className="flex p-[15px] justify-between rounded-t-[10px] shadow-main px-[70px] items-center gap-[80px] pr-[60px]">
            {solutionData.map((item, index) => (
              <div
                key={index}
                className={`cursor-pointer`}
                onClick={() => setActiveIndex(index)}
              >
                <p
                  className={` ${acitveIndex === index ? "title-3" : "subtitle-16"} ${acitveIndex === index ? "text-black" : "text-[#818181]"}`}
                >
                  {item.title}
                </p>
              </div>
            ))}
          </div>
          <div className="p-[40px] gap-[100px] flex">
            <div className="flex flex-col gap-[10px] max-w-[352px]">
              <h3 className="title-3">{solutionData[acitveIndex].title}</h3>
              <p className="main-txt text-[#818181]">
                {solutionData[acitveIndex].info}
              </p>
            </div>
            <div>
              <img
                src={`${process.env.PUBLIC_URL}${solutionData[acitveIndex].image}`}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-[15px] mt-[30px]">
          {solutionData.map((item, index) => (
            <div
              key={index}
              className={`p-[30px] shadow-main bg-[#f7f7f7] rounded-[10px] question-item ${openIndex === index ? "question-item-active" : ""}`}
              onClick={() => toggleQuestion(index)}
            >
              <div className="flex items-center justify-between">
                <p className="title-3">{item.title}</p>
                <svg
                  width="16"
                  height="20"
                  viewBox="0 0 16 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 1.43553L8 18.479"
                    stroke="#818181"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1 12.0877L8 18.479L15 12.0877"
                    stroke="#818181"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              {openIndex === index && (
                <div className="flex flex-col gap-[28px] mt-[10px]">
                  <p className="main-txt text-[#818181]">{item.info}</p>
                  <div className="rounded-[12px]">
                    <img
                      src={`${process.env.PUBLIC_URL}${solutionData[acitveIndex].image}`}
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
