import { useState } from 'react';
import './Question.css';
import useIsDesktop from '../useIsDesktop';

export default function Question() {

    const questions = [
        {
            title: 'What kind of processes can NeuroHive automate?',
            text: 'NeuroHive automates repetitive, rule-based tasks across HR, finance, operations, and more — from data entry and reporting to candidate screening and email routing.'
        },
        {
            title: 'Do I need technical knowledge to use your solutions?',
            text: 'NeuroHive automates repetitive, rule-based tasks across HR, finance, operations, and more — from data entry and reporting to candidate screening and email routing.'
        },
        {
            title: 'How long does it take to see results?',
            text: 'NeuroHive automates repetitive, rule-based tasks across HR, finance, operations, and more — from data entry and reporting to candidate screening and email routing.'
        },
        {
            title: 'Is my data secure with you?',
            text: 'NeuroHive automates repetitive, rule-based tasks across HR, finance, operations, and more — from data entry and reporting to candidate screening and email routing.'
        },
        {
            title: 'Can NeuroHive integrate with my current tools?',
            text: 'NeuroHive automates repetitive, rule-based tasks across HR, finance, operations, and more — from data entry and reporting to candidate screening and email routing.'
        },
        {
            title: 'How do I get started?',
            text: 'NeuroHive automates repetitive, rule-based tasks across HR, finance, operations, and more — from data entry and reporting to candidate screening and email routing.'
        },
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggleQuestion = (index) => {
        setOpenIndex(prevIndex => (prevIndex === index ? null : index));
    };
    const isDesktop = useIsDesktop();



    return (
        <section className="section flex gap-[66px] mob:flex-col">
            <div className="flex flex-col justify-between max-w-[420px]">
                <div>
                    <span className="title-top-type">
                        <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="3.5" cy="3.5" r="3.5" fill="#818181" />
                        </svg>

                        FAQ</span>
                    <h2 className="text-linear title-2 mt-[16px]">Frequently Asked Questions</h2>
                    <p className="mt-[20px] title-3 text-[#818181] max-w-[386px]">Got questions? We’ve got answers. Here’s everything you need to know before getting started with NeuroHive.</p>
                </div>
                {isDesktop && (
                    <div>
                        <h3 className="title-3">Still have questions?</h3>
                        <p className="subtitle-16 text-[#818181] mt-[8px]">If you didn’t find the answer you were looking for, feel free search for an answer in our Knowledge Hub.</p>
                        <button className="black-btn w-[235px] mt-[20px] py-[16px]">Go to Hub </button>
                    </div>
                )}
            </div>
            <div className="flex flex-col gap-[15px] flex-grow">

                {
                    questions.map((item, index) => (
                        <div
                            className={`question-item ${openIndex === index ? ' question-item-active' : ''}`}
                            key={index}
                            onClick={() => toggleQuestion(index)}
                        >
                            <div className='question-title'>
                                <h3 className='title-3 text-[#818181]'>{item.title}</h3>
                                <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 1.43553L8 18.479" stroke="#818181" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M1 12.0877L8 18.479L15 12.0877" stroke="#818181" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>

                            {openIndex === index && (
                                <div>
                                    <p className="main-txt text-[#818181]">{item.text}</p>
                                </div>
                            )}
                        </div>
                    ))
                }
            </div>
            {!isDesktop && (
                <div>
                    <h3 className="title-3 still-h-q">Still have questions?</h3>
                    <p className="subtitle-16 text-[#818181] mt-[8px]">If you didn’t find the answer you were looking for, feel free search for an answer in our Knowledge Hub.</p>
                    <button className="black-btn mt-[20px] py-[16px] w-full">Go to Hub </button>
                </div>
            )}
        </section>
    );
}