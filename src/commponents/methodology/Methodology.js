import { useState } from 'react';
import './Methodology.css';

export default function Methodology() {

    const methods = [
        {
            count: '01',
            title: 'Evaluate AI Potential',
            task: 'Analyze challenges and optimization areas',
            result: 'Clear understanding of where AI brings value',
            gif: `${process.env.PUBLIC_URL}/image/methodology/step-1.jpg`,
        },
        {
            count: '02',
            title: 'Define Goals & KPIs',
            task: 'Set measurable business objectives',
            result: 'Concrete goals instead of “AI for the sake of AI”',
            gif: `${process.env.PUBLIC_URL}/image/methodology/step-2.jpg`,
        },
        {
            count: '03',
            title: 'Ensure Data Security',
            task: 'Protect data, define policies and access',
            result: 'Minimized risks',
            gif: `${process.env.PUBLIC_URL}/image/methodology/step-3.jpg`,
        },
        {
            count: '04',
            title: 'Ensure Ethics and Compliance ',
            task: 'Address GDPR, transparency, and auditing',
            result: 'Legal and ethical assurance',
            gif: `${process.env.PUBLIC_URL}/image/methodology/step-4.jpg`,
        },
        {
            count: '05',
            title: 'Organize Your Data',
            task: 'Structure sources, clean and update data',
            result: 'High-quality “fuel” for AI',
            gif: `${process.env.PUBLIC_URL}/image/methodology/step-5.jpg`,
        }
    ];
    const methods2 = [
        {
            count: '06',
            title: 'Build Team AI Literacy',
            task: 'Train and engage the team',
            result: 'Less resistance, more understanding',
            gif: `${process.env.PUBLIC_URL}/image/methodology/step-6.jpg`,
        },
        {
            count: '07',
            title: 'Audit AI Tools',
            task: 'Evaluate existing tools and systems',
            result: 'Clear map for optimization',
            gif: `${process.env.PUBLIC_URL}/image/methodology/step-7.jpg`,
        },
        {
            count: '08',
            title: 'Measure Performance',
            task: 'Track KPIs, ROI, and analytics',
            result: 'Transparent performance metrics',
            gif: `${process.env.PUBLIC_URL}/image/methodology/step-8.jpg`,
        },
        {
            count: '09',
            title: 'Allocate Implementation Resources',
            task: 'Budget, team, and infrastructure planning',
            result: 'Balanced cost and impact',
            gif: `${process.env.PUBLIC_URL}/image/methodology/step-9.jpg`,
        },
        {
            count: '10',
            title: 'Stay Adaptive',
            task: 'Scale, integrate, and evolve',
            result: 'A living, responsive AI strategy',
            gif: `${process.env.PUBLIC_URL}/image/methodology/step-10.jpg`,
        }
    ];

    const [activeMethod, setActiveMethod] = useState(0);
    const [activeMethod2, setActiveMethod2] = useState(0);

    const toggleMethod = (index, state, setState) => {
        if (index !== state) {
            setState(index);
        }
    };


    return (
        <section className='section flex flex-col gap-[30px]'>
            <div className='flex gap-[68px]'>
                <div className='flex flex-col gap-[10px]'>
                    <span className="title-top-type">
                        <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="3.5" cy="3.5" r="3.5" fill="#818181" />
                        </svg>

                        Methodology</span>
                    <h2 className='title-2 text-linear whitespace-nowrap'>10 Steps to implement AI</h2>
                </div>
                <p className='title-3 text-[#818181] pr-[50px] mt-[50px]'>A clear roadmap to help your team implement AI confidently and effectively. From evaluating opportunities and setting goals to ensuring compliance and scaling — each step moves you closer to smart, ethical AI integration.</p>
            </div>

            <div className='flex gap-[20px] w-full'>
                <div className='flex flex-col w-[50%]'>
                    {methods.map((method, index) => (
                        <div className={`methodology-task-item ${index === activeMethod ? 'methodology-task-item-active' : ''}`} key={index} onClick={() => toggleMethod(index, activeMethod, setActiveMethod)}>
                            <div className='flex items-center gap-[5px]'>
                                <p className='subtitle-1 text-[#818181]'>{method.count + '.'}</p>
                                <h3 className='subtitle-1 text-[#818181]'>{method.title}</h3>
                            </div>
                            {index === activeMethod && (
                                <div className='flex flex-col gap-[5px] ml-[40px] mt-[10px]'>
                                    <p className='title-3 text-[#818181]'>Task:{method.task}</p>
                                    <p className='title-3 text-[#000]'>Result:{method.result}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div className='w-[50%] rounded-[10px] shadow-xl'>
                    <img src={`${methods[activeMethod].gif}`} className='w-full h-full rounded-[10px]' />
                </div>

            </div>
            <div className='flex gap-[20px] w-full'>
                <div className='w-[50%] rounded-[10px] shadow-xl'>
                    <img src={`${methods2[activeMethod2].gif}`} className='w-full h-full rounded-[10px]'/>
                </div>
                <div className='flex flex-col w-[50%]'>
                    {methods2.map((method, index) => (
                        <div className={`methodology-task-item ${index === activeMethod2 ? 'methodology-task-item-active' : ''}`} key={index} onClick={() => toggleMethod(index, activeMethod2, setActiveMethod2)}>
                            <div className='flex items-center gap-[5px]'>
                                <p className='subtitle-1 text-[#818181]'>{method.count + '.'}</p>
                                <h3 className='subtitle-1 text-[#818181]'>{method.title}</h3>
                            </div>
                            {index === activeMethod2 && (
                                <div className='flex flex-col gap-[5px] ml-[40px] mt-[10px]'>
                                    <p className='title-3 text-[#818181]'>Task:{method.task}</p>
                                    <p className='title-3 text-[#000]'>Result:{method.result}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>


            </div>

        </section>
    )
}