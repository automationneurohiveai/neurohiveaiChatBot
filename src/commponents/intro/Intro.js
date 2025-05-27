import './Intro.css';

export default function Intro() {

    return (
        <section className='intro w-full flex flex-col justify-center items-center'>
            <h1 className='title-1 text-center'>AI automation that works for you</h1>
            <h2 className='subtitle-cover'>Boost your team’s productivity by 40% with AI automation</h2>
            <div className='flex items-center mt-[35px] gap-[20px]'>
                <button className='black-btn py-[16px] px-[48px]'>Get a consultation</button>
                <button className='white-btn py-[16px] px-[66.5px]'>Try the demo</button>
            </div>
            <span className='text-[#818181] txt-2 mt-[15px]'>No setup required. Get started in 60 seconds.</span>
            <div className='w-[711px] p-[40px] bg-[#F7F7F7] rounded-[10px] flex flex-col items-center mt-[98px] shadow-lg'>
                <div className='relative mb-[10px]'>
                    <img src={`${process.env.PUBLIC_URL}/image/intro/intro-gif.gif`} alt='ball' className='object-cover w-[115px]' />
                    <img src={`${process.env.PUBLIC_URL}/image/intro/intro-gif-shadow.svg`} className='absolute bottom-[-40px]' />
                </div>

                <h2 className='title-2 max-w-[460px]'>Meet your AI Agent</h2>
                <p className='text-[#818181] max-w-[400px] text-center mt-[15px]'>Your AI Agent is more than a tool — it’s a team member. It learns your processes, talks to clients, and executes tasks — so you can focus on what really matters.</p>
                <p className='text-[#818181] mt-[40px]'>Just paste your link below</p>
                <div className='w-full bg-white rounded-[10px] p-[15px] flex gap-5 items-center justify-between pl-[30px] mt-[24px]  drop-shadow-2xl'>
                    <input type='text' className='outline-none text-[18px]' />
                    <button className='black-btn py-[11px] px-[34px]'>Start analysing</button>
                </div>
            </div>
        </section>
    );

}