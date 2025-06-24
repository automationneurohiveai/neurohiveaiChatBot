import "./Kpi.css";

export default function Kpi() {
  return (
    <section className="section flex flex-col gap-[50px]">
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
          KPI Snapshot
        </span>
        <h2 className="title-2 text-linear mt-[5px] max-w-[495px]">
          Key outcomes from the automation
        </h2>
        <p className="max-w-[436px] mt-[10px] text-[#818181] title-3">
          This case shows measurable impact in just a few days — from hours
          saved to clear financial return.
        </p>
      </div>

      <div className="grid grid-cols-4 gap-[20px] mob:grid-cols-1">
        <div className="kpi-item kpi-item-1 shadow-main">
          <h2 className="title-2">0.01354</h2>
          <div>
            <h3 className="title-3">FTE Saved</h3>
            <p className="txt-caption text-[#818181] mt-[5px]">
              Full-time equivalent saved per week through automation.
            </p>
          </div>
        </div>
        <div className="kpi-item kpi-item-2 shadow-main flex-col gap-[20px]">
          <h2 className="title-2">*** PLN</h2>
          <div>
            <h3 className="title-3">Total value processed</h3>
            <p className="txt-caption text-[#818181] mt-[5px]">
              Total invoice value processed through the automated system
            </p>
          </div>
        </div>
        <div className="kpi-item kpi-item-3 shadow-main flex-col gap-[20px]">
          <h2 className="title-2">2h 10m</h2>
          <div>
            <h3 className="title-3">Time Saved</h3>
            <p className="txt-caption text-[#818181] mt-[5px]">
              Manual processing time reduced per week.
            </p>
          </div>
        </div>
        <div className="kpi-item kpi-item-4 shadow-main flex-col gap-[20px]">
          <h2 className="title-2">13%</h2>
          <div>
            <h3 className="title-3">ROI</h3>
            <p className="txt-caption text-[#818181] mt-[5px]">
              Return on investment within the first month.
            </p>
          </div>
        </div>
        <div className="kpi-item kpi-item-5 shadow-main flex-col gap-[20px]">
          <h2 className="title-2">13</h2>
          <div>
            <h3 className="title-3">Invoices Automated</h3>
            <p className="txt-caption text-[#818181] mt-[5px]">
              The number of documents fully processed by the system.
            </p>
          </div>
        </div>
        <div className="kpi-item kpi-item-6 shadow-main">
          <h2 className="title-2">80 PLN </h2>
          <div>
            <h3 className="title-3">FTE Saved</h3>
            <p className="txt-caption text-[#818181] mt-[5px]">
              Full-time equivalent saved per week through automation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
