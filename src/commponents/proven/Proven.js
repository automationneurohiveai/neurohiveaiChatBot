import "./Proven.css";

export default function Proven() {
  const provenData = [
    {
      title: "Invoice Detected in Gmail",
      info: "A sample email with a PDF invoice, automatically identified by the system and tagged for processing.",
      image: "/image/proven/step-1.svg",
    },
    {
      title: "Make Scenario Overview",
      info: "No-code scenario built in Make — showing the entire invoice flow in connected modules.",
      image: "/image/proven/step-2.svg",
    },
    {
      title: "Structured Entry in Notion",
      info: "Extracted data (amount, supplier, issue date) automatically logged into the company’s knowledge base.",
      image: "/image/proven/step-3.svg",
    },
    {
      title: "Invoice Archived in Google Drive",
      info: "Invoices are sorted into monthly folders based on issue date — ready for audit at any time.",
      image: "/image/proven/step-4.svg",
    },
    {
      title: "Tools used during automation",
      info: "We built this automation using lightweight, no-code tools",
      image: "/image/proven/step-4.svg",
    },
  ];

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
          Proven Results
        </span>
        <h2 className="title-2 text-linear mt-[5px] max-w-[645px]">
          Here’s How the Automation Works for Real
        </h2>
        <p className="max-w-[450px] mt-[10px] text-[#818181] title-3">
          Real screenshots and data from the working automation — no mockups, no
          theory. Just live proof that it works.
        </p>
      </div>
      <div className="flex flex-col gap-[27px] mt-[30px]">
        {provenData.map((item, index) => (
          <div
            key={index}
            className="flex justify-between shadow-main rounded-[10px] bg-[#f1f1f1] p-[40px] gap-[85px] mob:flex-col-reverse mob:gap-[30px] mob:p-[30px]"
          >
            <div className="flex flex-col gap-[10px] max-w-[352px]">
              <h3 className="title-3">{item.title}</h3>
              <p className="main-txt text-[#818181]">{item.info}</p>
            </div>
            <div className="shadow-main mob:rounded-[12px]">
              <img
                src={`${process.env.PUBLIC_URL}${item.image}`}
                className="h-[216px]"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
