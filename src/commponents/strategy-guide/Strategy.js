import './Strategy.css'

export default function Strategy() {
    return (
        <section className="strategy">
            <div className='w-full flex flex-col items-center'>
                <h2 className="title-2 text-white">Get Your Free AI Strategy Guide</h2>
                <ul className="flex items-center gap-[42px] mt-[10px]">
                    <li className="text-[#FB5D21]">Get Guide + PDF Template Gift</li>
                    <li className="text-[#FB5D21]">Get Access to the Demo Platform</li>
                </ul>
                <div className="w-[523px] mt-[30px] py-[15px] px-[30px] bg-[#1B1B1B] rounded-[10px] flex justify-between">
                    <input className='title-3' placeholder='Type your E-mail here...' />
                    <button className='orange-btn'>Get Guide & Demo</button>
                </div>
            </div>
        </section>
    );
}