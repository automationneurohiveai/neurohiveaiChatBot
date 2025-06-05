import './Autamatation.css'

export default function Autamatation() {

    return (
        <section className="section flex flex-col items-center">
            <span className="title-top-type">
                <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="3.5" cy="3.5" r="3.5" fill="#818181" />
                </svg>

                Proven impact</span>
            <h2 className="section-title max-w-[580px] text-center mt-[5px]">Automation that pays off in months, not years</h2>
            <p className="txt-18 mt-[10px] text-[#818181] whitespace-pre-line mob:text-center">We don’t sell technology — we
                deliver return on investment.</p>
            <button className="black-btn py-[13px] px-[49.5px] mt-[20px]">Calculate ROI for my business</button>
            <div className="w-full grid gap-[20px] mt-[30px] grid-cols-5 mob:flex mob:flex-col">
                <div className="automat-item automat-item1 flex flex-col gap-[10px] items-center pt-[34px] rounded-[8px]">
                    <img className="w-[50px] h-[50px]" src={`${process.env.PUBLIC_URL}/image/automat/icon1.png`} />
                    <p className="subtitle-1">Manual labor cost</p>
                    <p className="max-w-[280px] txt-caption text-[#818181] text-center">10 minutes × 1000 documents × salary = real money you lose every month</p>
                    <img src={`${process.env.PUBLIC_URL}/image/automat/automat1.png`} className="w-300px object-cover" />
                </div>
                <div className="automat-item automat-item2 flex gap-[28px] rounded-[8px] p-[40px] mob:flex-col">
                    <div className='flex flex-col gap-[10px]'>
                        <img className="w-[50px] h-[50px]" src={`${process.env.PUBLIC_URL}/image/automat/icon2.png`} />
                        <p className="subtitle-1 max-w-[233px]">FTE: the language
                            of financial decisions</p>
                        <p className="max-w-[240px] txt-caption text-[#818181]">FTE shows how many man-hours are freed up by automation</p>
                        <div className='bg-[#F1F1F1] py-[10px] px-[20px] rounded-[15px] flex gap-[15px] items-center shadow-xl mt-[32px] '>
                            <img src={`${process.env.PUBLIC_URL}/image/automat/ailk.svg`} />
                            <ul className='flex flex-col gap-[7px] list-none'>
                                <li className='txt-caption-3 flex gap-[10px] items-center text-[#A1A1A1]'>
                                    <div className='w-[20px] h-[20px] rounded-[5px] bg-[#FB5D21]'></div>
                                    Time freed up
                                </li>
                                <li className='txt-caption-3 flex gap-[10px] items-center text-[#A1A1A1]'>
                                    <div className='w-[20px] h-[20px] rounded-[5px] bg-[#404040]'></div>
                                    Strategic tasks
                                </li>
                                <li className='txt-caption-3 flex gap-[10px] items-center text-[#A1A1A1]'>
                                    <div className='w-[20px] h-[20px] rounded-[5px] bg-[#A1A1A1]'></div>
                                    Routine operations
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='max-w-[310px] mt-[53px] py-[35px] px-[23px] bg-[#F1F1F1] rounded-[20px] shadow-xl flex flex-col items-center mob:mt-0'>
                        <img src={`${process.env.PUBLIC_URL}/image/automat/fraction.png`} />
                        <div className='mt-[5px] flex items-center gap-[5px]'>
                            <img src={`${process.env.PUBLIC_URL}/image/automat/automat-fte-graph.svg`} />
                            <p className='text-linear caption-capital-1'>0,15 FTE</p>
                        </div>
                        <span className='mt-[20px] text-center subtitle-16 text-[#818181]'>Example: 20 hours/month = 0.15 FTE (15% of full-time working hours)</span>
                    </div>
                </div>
                <div className="automat-item automat-item3 flex p-[40px] rounded-[8px] mob:flex-col">
                    <div className='flex flex-col gap-[10px]'>
                        <img className="w-[50px] h-[50px]" src={`${process.env.PUBLIC_URL}/image/automat/icon3.svg`} />
                        <p className="subtitle-1">We see at once where automation makes sense</p>
                        <p className="max-w-[280px] txt-caption text-[#818181] ">Green zone – ROI &gt; 100%, yellow – at the break-even point, red – not worth automating</p>
                    </div>
                    <img src={`${process.env.PUBLIC_URL}/image/automat/automat3.svg`} className="w-323px object-cover mt-[56px] mob:mt-[16px]" />
                </div>
                <div className="automat-item automat-item4 flex flex-col gap-[10px] items-center pt-[34px] rounded-[8px]">
                    <img className="w-[50px] h-[50px]" src={`${process.env.PUBLIC_URL}/image/automat/icon4.svg`} />
                    <p className="subtitle-1">Manual labor cost</p>
                    <p className="max-w-[280px] txt-caption text-[#818181] text-center">10 minutes × 1000 documents × salary = real money you lose every month</p>
                    <img src={`${process.env.PUBLIC_URL}/image/automat/automat4.svg`} className="w-348px object-cover mt-[18px]" />
                </div>
                <div className="automat-item automat-item5 flex flex-col gap-[10px] items-center pt-[34px] rounded-[8px]">
                    <img className="w-[50px] h-[50px]" src={`${process.env.PUBLIC_URL}/image/automat/icon5.svg`} />
                    <p className="subtitle-1">Technologies for your business</p>
                    <p className="max-w-[280px] txt-caption text-[#818181] text-center">n8n, Flowise, and Make are powerful automation tools that require no coding</p>
                    <img src={`${process.env.PUBLIC_URL}/image/automat/automat5.svg`} className="w-333px object-cover mt-[6px]" />
                </div>
                <div className="automat-item automat-item6 flex gap-[24px] rounded-[8px] p-[40px] mob:flex-col">
                    <div className='flex flex-col gap-[10px]'>
                        <img className="w-[50px] h-[50px]" src={`${process.env.PUBLIC_URL}/image/automat/icon6.svg`} />
                        <p className="subtitle-1 max-w-[189px]">When will you see the result</p>
                        <p className="max-w-[240px] txt-caption text-[#818181]">Each solution includes a payback period forecast that takes all costs into account.</p>

                    </div>
                    <div className='rounded-2xl overflow-hidden w-405px  mt-[72px] shadow-xl mob:mt-[16px]'>
                        <img src={`${process.env.PUBLIC_URL}/image/automat/automat6.svg`} className='object-cover' />
                    </div>
                </div>
            </div>
                <button className='href-btn m-auto mt-[30px] hidden mob:flex'>View more</button>
        </section>
    )
}