import Invoice from "../commponents/invoice/Invoice";
import Kpi from "../commponents/kpi/Kpi";
import Problem from "../commponents/problem/Problem";
import Proven from "../commponents/proven/Proven";
import Solution from "../commponents/solution/Solution";

export default function Cases() {

    return (
        <div className="flex flex-col gap-[150px] mob:gap-[120px]">
            <Invoice />
            <Problem />
            <Solution />
            <Kpi />
            <Proven />

            <section className="strategy">
                <div className='w-full mob:max-w-[347px] flex flex-col items-center text-center'>
                    <p className="title-3 text-[#FB5D21]">Ready to automate your workflow?</p>
                    <h2 className="title-2 text-white mob:text-center mt-[5px]">Let’s build your automation together</h2>
                    <p className="title-3 text-[#818181] max-w-[447px] mt-[10px]">We’ll show you how NeuroHive AI can eliminate routine work, step by step. No pressure — just a quick conversation to see if it fits your process.</p>
                    <div className="w-[523px] mt-[30px] py-[15px] px-[30px] bg-[#1B1B1B] rounded-[10px] flex justify-between mob:w-full mob:bg-transparent mob:p-0 mob:flex-col mob:gap-[30px]">
                        <input type="email" className='title-3 mob:bg-[#1B1B1B] mob:px-[30px] mob:py-[15px]' placeholder='Type your E-mail here...' />
                        <button className='orange-btn'>Get Guide & Demo</button>
                    </div>
                </div>
            </section>
        </div>
    )
}