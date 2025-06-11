import "./Invoice.css";

export default function Invoice() {
  return (
    <div className="invoice">
      <div className="section flex flex-col items-center">
        <h2 className="text-linear title-2 text-center max-w-[650px] mob:max-w-[343px]">
          Invoice Automation: Smart, Structured, and Scalable
        </h2>
        <p className="title-3 text-[#818181] mt-[5px]">
          We eliminated manual invoice handling and saved 2+ hours weekly
        </p>
        <button className="black-btn py-[16px] w-[235px] mt-[20px] mob:w-full">
          Request a demo
        </button>
        <div className="mt-[40px] mob:w-full">
          <img src={`${process.env.PUBLIC_URL}/image/invoice/invoice.svg`} />
        </div>
      </div>
    </div>
  );
}
