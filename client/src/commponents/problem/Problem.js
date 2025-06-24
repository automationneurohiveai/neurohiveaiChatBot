export default function Problem() {
    return (
        <section className="section flex gap-[120px] mob:flex-col mob:gap-[40px]">
            <div className="flex flex-col max-w-[488px]">
                <span className="title-top-type">
                    <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="3.5" cy="3.5" r="3.5" fill="#818181" />
                    </svg>

                    Problem</span>
                <h2 className="title-2 text-linear mt-[5px]">Manual Process Pain Points</h2>
                <p className="mt-[20px] title-3 text-[#818181]">Manual processes slow down your team, introduce errors, and waste valuable time on tasks that could be automated. Manual invoice handling leads to wasted hours, delays in payments, and a high risk of human error — all of which slow down your finance operations and frustrate your team.</p>
                <ul className="flex flex-col gap-[10px] mt-[40px]">
                    <li className="w-fit relative pl-[22px] px-[10px] text-[#FB5D21] rounded-[4px] before:content-['•'] before:absolute before:left-[10px] before:text-[#FB5D21] before:text-[20px] before:top-1/2 before:-translate-y-1/2">
                        Approval delays lead to late payments and vendor friction
                    </li>
                    <li className="w-fit relative pl-[22px] px-[10px] text-[#FB5D21] rounded-[4px] before:content-['•'] before:absolute before:left-[10px] before:text-[#FB5D21] before:text-[20px] before:top-1/2 before:-translate-y-1/2">
                        Invoice processing takes 2–3 hours per week
                    </li>
                    <li className="w-fit relative pl-[22px] px-[10px] text-[#FB5D21] rounded-[4px] before:content-['•'] before:absolute before:left-[10px] before:text-[#FB5D21] before:text-[20px] before:top-1/2 before:-translate-y-1/2">
                        Critical data gets lost or entered incorrectly
                    </li>
                </ul>
            </div>
            <div className="flex flex-col flex-grow gap-[20px]">
                <div className="rounded-[10px] shadow-lg p-[10px] flex justify-between">
                    <div className="p-[20px]">
                        <h3 className="title-3">Missing data or wrong values</h3>
                        <p className="main-txt max-w-[255px] text-[#818181] mt-[5px]">Manual entry leads to incorrect totals, mismatched dates or currencies</p>
                    </div>
                    <div>
                        <img src={`${process.env.PUBLIC_URL}/image/problem/icon-magnifier.svg`} />
                    </div>
                </div>
                <div className="rounded-[10px] shadow-lg p-[10px] flex justify-between">
                    <div className="p-[20px]">
                        <h3 className="title-3">Approval delays</h3>
                        <p className="main-txt max-w-[255px] text-[#818181] mt-[5px]">Approvals stuck in threads slow down the finance pipeline</p>
                    </div>
                    <div>
                        <img src={`${process.env.PUBLIC_URL}/image/problem/icon-clock.svg`} />
                    </div>
                </div>
                <div className="rounded-[10px] shadow-lg p-[10px] flex justify-between">
                    <div className="p-[20px]">
                        <h3 className="title-3">No audit trail</h3>
                        <p className="main-txt max-w-[255px] text-[#818181] mt-[5px]">Tracking who approved what and when is nearly impossible</p>
                    </div>
                    <div>
                        <img src={`${process.env.PUBLIC_URL}/image/problem/icon-graph.svg`} />
                    </div>
                </div>
            </div>
        </section>
    )
}