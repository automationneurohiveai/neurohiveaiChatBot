
export default function Tools() {


    return (
        <section className='section flex flex-col items-center gap-[30px]'>
            <div className='flex flex-col justify-center items-center text-center '>
                <span className="title-top-type">
                    <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="3.5" cy="3.5" r="3.5" fill="#818181" />
                    </svg>

                    Tools</span>
                <h2 className='title-2 text-linear mt-[5px]'>From Tool Overload to AI Harmony</h2>
                <p className='title-3 text-[#818181] mt-[10px] max-w-[542px]'>Integrate your scattered tools into one smart system. NeuroHive transforms fragmented processes into one seamless AI-powered system — reducing friction and saving time</p>
            </div>
            <div className="flex flex-col gap-[20px]">
                <div className="flex gap-[20px]">
                    <div className=" w-1/2 flex gap-[15px] py-[30px] pl-[30px] pr-[45px] bg-white shadow-xl rounded-xl">
                        <div className="flex gap-[15px] w-fit shrink-0">
                            <img src={`${process.env.PUBLIC_URL}/image/tools/dislike.svg`} className="w-[40px] h-[40px]" />
                            <h3 className="subtitle-1 whitespace-pre-line">Business{"\n"}
                                Pain</h3>
                        </div>
                        <p className="flex-1 break-words txt-caption text-[#818181]">Every business operates with dozens of tools: email, CRM, ERP, Excel... They are not synchronized. This leads to chaos, wasted time, and complicated employee onboarding.</p>
                    </div>
                    <div className=" w-1/2 flex gap-[15px] py-[30px] pl-[30px] pr-[45px] bg-white shadow-xl rounded-xl">
                        <div className="flex gap-[15px] w-fit shrink-0">
                            <img src={`${process.env.PUBLIC_URL}/image/tools/like.svg`} className="w-[40px] h-[40px]" />
                            <h3 className="subtitle-1 whitespace-pre-line">NeuroHive{"\n"}Solution</h3>
                        </div>
                        <p className="w-fit flex-1 txt-caption text-[#818181]">We synchronize, automate, and connect everything into one system. Information updates automatically. We eliminate routine and unnecessary clicks. Marketing, operations, and support — everything runs smoothly.</p>
                    </div>
                </div>
                <div className="rounded-[20px] shadow-xl bg-[#F7F7F7]">

                    <img src={`${process.env.PUBLIC_URL}/image/tools/tools.svg`} className="object-cover w-full" />

                </div>
            </div>

        </section>
    );
}