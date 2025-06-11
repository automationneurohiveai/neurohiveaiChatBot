import { useState } from 'react';
import './Faq.css';
import useIsDesktop from '../useIsDesktop';

export default function Faq() {

    const isDesktop = useIsDesktop();

    const info = [
        [
            {
                title: 'What kind of processes can NeuroHive automate?',
                articles: [
                    {
                        title: 'What kind of processes can NeuroHive automate?',
                        texts: {
                            text1: 'Discover the scope and power of workflow automation with NeuroHive',

                            text2: 'Automation is no longer a future-facing concept — it’s a present-day necessity. At NeuroHive, we focus on helping businesses streamline operations, reduce costs, and unlock productivity by automating the processes that drain time, attention, and human energy.',

                            text3: 'But what exactly can be automated? The answer: far more than you think. NeuroHive is built as a modular, flexible automation platform that can adapt to a wide range of use cases across departments and industries. From repetitive administrative tasks to intelligent data workflows, here’s what NeuroHive can automate for your organization.'
                        }

                    },
                    {
                        title: 'Repetitive Administrative Work',
                        texts: {
                            text1: 'Many business teams spend a significant portion of their day performing low-value, repetitive tasks that are perfect candidates for automation. NeuroHive can help you:',
                            stats: [
                                'Extract data from spreadsheets or PDFs',
                                'Copy data between tools (e.g. CRM → Google Sheets)',
                                'Send routine notifications, emails, or reminders',
                                'Schedule recurring tasks and reporting',
                            ],
                            text2: 'By automating these workflows, your team can focus on tasks that actually move the business forward — like analysis, strategy, and customer service.'
                        }
                    },
                    {
                        title: 'Finance & Accounting Processes',

                        texts: {
                            text1: 'Financial teams often deal with tight deadlines, compliance constraints, and large volumes of data. NeuroHive makes it easy to automate:',
                            stats: [
                                'Invoice processing',
                                'Report generation (P&L, cash flow, balance sheets)',
                                'Expense tracking and categorization',
                                'Budget monitoring and threshold alerts',
                                'Data collection from ERPs, accounting platforms, and banks',
                                'Scheduled delivery of financial dashboards or summaries',
                            ],
                            text2: 'With NeuroHive’s automated reporting module, finance teams can cut reporting time in half and eliminate manual errors.'
                        }

                    },
                ],
            },
            {
                title: 'Do I need technical knowledge to use your solutions?',
                articles: [
                    {
                        title: 'Do I need technical knowledge to use your solutions?',
                        texts: {
                            text1: 'Discover the scope and power of workflow automation with NeuroHive',

                            text2: 'Automation is no longer a future-facing concept — it’s a present-day necessity. At NeuroHive, we focus on helping businesses streamline operations, reduce costs, and unlock productivity by automating the processes that drain time, attention, and human energy.',

                            text3: 'But what exactly can be automated? The answer: far more than you think. NeuroHive is built as a modular, flexible automation platform that can adapt to a wide range of use cases across departments and industries. From repetitive administrative tasks to intelligent data workflows, here’s what NeuroHive can automate for your organization.'
                        }

                    },
                    {
                        title: 'Repetitive Administrative Work',
                        texts: {
                            text1: 'Many business teams spend a significant portion of their day performing low-value, repetitive tasks that are perfect candidates for automation. NeuroHive can help you:',
                            stats: [
                                'Extract data from spreadsheets or PDFs',
                                'Copy data between tools (e.g. CRM → Google Sheets)',
                                'Send routine notifications, emails, or reminders',
                                'Schedule recurring tasks and reporting',
                            ],
                            text2: 'By automating these workflows, your team can focus on tasks that actually move the business forward — like analysis, strategy, and customer service.'
                        }
                    },
                    {
                        title: 'Finance & Accounting Processes',

                        texts: {
                            text1: 'Financial teams often deal with tight deadlines, compliance constraints, and large volumes of data. NeuroHive makes it easy to automate:',
                            stats: [
                                'Invoice processing',
                                'Report generation (P&L, cash flow, balance sheets)',
                                'Expense tracking and categorization',
                                'Budget monitoring and threshold alerts',
                                'Data collection from ERPs, accounting platforms, and banks',
                                'Scheduled delivery of financial dashboards or summaries',
                            ],
                            text2: 'With NeuroHive’s automated reporting module, finance teams can cut reporting time in half and eliminate manual errors.'
                        }

                    },
                ],
            },
            {
                title: 'NeuroHive launches automated reporting module for finance teams',
                articles: [
                    {
                        title: 'NeuroHive launches automated reporting module for finance teams',
                        texts: {
                            text1: 'Discover the scope and power of workflow automation with NeuroHive',

                            text2: 'Automation is no longer a future-facing concept — it’s a present-day necessity. At NeuroHive, we focus on helping businesses streamline operations, reduce costs, and unlock productivity by automating the processes that drain time, attention, and human energy.',

                            text3: 'But what exactly can be automated? The answer: far more than you think. NeuroHive is built as a modular, flexible automation platform that can adapt to a wide range of use cases across departments and industries. From repetitive administrative tasks to intelligent data workflows, here’s what NeuroHive can automate for your organization.'
                        }

                    },
                    {
                        title: 'Repetitive Administrative Work',
                        texts: {
                            text1: 'Many business teams spend a significant portion of their day performing low-value, repetitive tasks that are perfect candidates for automation. NeuroHive can help you:',
                            stats: [
                                'Extract data from spreadsheets or PDFs',
                                'Copy data between tools (e.g. CRM → Google Sheets)',
                                'Send routine notifications, emails, or reminders',
                                'Schedule recurring tasks and reporting',
                            ],
                            text2: 'By automating these workflows, your team can focus on tasks that actually move the business forward — like analysis, strategy, and customer service.'
                        }
                    },
                    {
                        title: 'Finance & Accounting Processes',

                        texts: {
                            text1: 'Financial teams often deal with tight deadlines, compliance constraints, and large volumes of data. NeuroHive makes it easy to automate:',
                            stats: [
                                'Invoice processing',
                                'Report generation (P&L, cash flow, balance sheets)',
                                'Expense tracking and categorization',
                                'Budget monitoring and threshold alerts',
                                'Data collection from ERPs, accounting platforms, and banks',
                                'Scheduled delivery of financial dashboards or summaries',
                            ],
                            text2: 'With NeuroHive’s automated reporting module, finance teams can cut reporting time in half and eliminate manual errors.'
                        }

                    },
                ],
            },
            {
                title: 'NeuroHive launches automated reporting module for finance teams',
                articles: [
                    {
                        title: 'NeuroHive launches automated reporting module for finance teams',
                        texts: {
                            text1: 'Discover the scope and power of workflow automation with NeuroHive',

                            text2: 'Automation is no longer a future-facing concept — it’s a present-day necessity. At NeuroHive, we focus on helping businesses streamline operations, reduce costs, and unlock productivity by automating the processes that drain time, attention, and human energy.',

                            text3: 'But what exactly can be automated? The answer: far more than you think. NeuroHive is built as a modular, flexible automation platform that can adapt to a wide range of use cases across departments and industries. From repetitive administrative tasks to intelligent data workflows, here’s what NeuroHive can automate for your organization.'
                        }

                    },
                    {
                        title: 'Repetitive Administrative Work',
                        texts: {
                            text1: 'Many business teams spend a significant portion of their day performing low-value, repetitive tasks that are perfect candidates for automation. NeuroHive can help you:',
                            stats: [
                                'Extract data from spreadsheets or PDFs',
                                'Copy data between tools (e.g. CRM → Google Sheets)',
                                'Send routine notifications, emails, or reminders',
                                'Schedule recurring tasks and reporting',
                            ],
                            text2: 'By automating these workflows, your team can focus on tasks that actually move the business forward — like analysis, strategy, and customer service.'
                        }
                    },
                    {
                        title: 'Finance & Accounting Processes',

                        texts: {
                            text1: 'Financial teams often deal with tight deadlines, compliance constraints, and large volumes of data. NeuroHive makes it easy to automate:',
                            stats: [
                                'Invoice processing',
                                'Report generation (P&L, cash flow, balance sheets)',
                                'Expense tracking and categorization',
                                'Budget monitoring and threshold alerts',
                                'Data collection from ERPs, accounting platforms, and banks',
                                'Scheduled delivery of financial dashboards or summaries',
                            ],
                            text2: 'With NeuroHive’s automated reporting module, finance teams can cut reporting time in half and eliminate manual errors.'
                        }

                    },
                ],
            },
            {
                title: 'NeuroHive launches automated reporting module for finance teams',
                articles: [
                    {
                        title: 'NeuroHive launches automated reporting module for finance teams',
                        texts: {
                            text1: 'Discover the scope and power of workflow automation with NeuroHive',

                            text2: 'Automation is no longer a future-facing concept — it’s a present-day necessity. At NeuroHive, we focus on helping businesses streamline operations, reduce costs, and unlock productivity by automating the processes that drain time, attention, and human energy.',

                            text3: 'But what exactly can be automated? The answer: far more than you think. NeuroHive is built as a modular, flexible automation platform that can adapt to a wide range of use cases across departments and industries. From repetitive administrative tasks to intelligent data workflows, here’s what NeuroHive can automate for your organization.'
                        }

                    },
                    {
                        title: 'Repetitive Administrative Work',
                        texts: {
                            text1: 'Many business teams spend a significant portion of their day performing low-value, repetitive tasks that are perfect candidates for automation. NeuroHive can help you:',
                            stats: [
                                'Extract data from spreadsheets or PDFs',
                                'Copy data between tools (e.g. CRM → Google Sheets)',
                                'Send routine notifications, emails, or reminders',
                                'Schedule recurring tasks and reporting',
                            ],
                            text2: 'By automating these workflows, your team can focus on tasks that actually move the business forward — like analysis, strategy, and customer service.'
                        }
                    },
                    {
                        title: 'Finance & Accounting Processes',

                        texts: {
                            text1: 'Financial teams often deal with tight deadlines, compliance constraints, and large volumes of data. NeuroHive makes it easy to automate:',
                            stats: [
                                'Invoice processing',
                                'Report generation (P&L, cash flow, balance sheets)',
                                'Expense tracking and categorization',
                                'Budget monitoring and threshold alerts',
                                'Data collection from ERPs, accounting platforms, and banks',
                                'Scheduled delivery of financial dashboards or summaries'
                            ],
                            text2: 'With NeuroHive’s automated reporting module, finance teams can cut reporting time in half and eliminate manual errors.'
                        }

                    },
                ],
            },
        ],

        [
            {
                title: 'Getting started with NeuroHive',
                articles: [
                    {
                        title: 'Getting Started with NeuroHive',
                        texts: {
                            text1: 'Learn how to quickly onboard, create your first automation, and integrate essential tools.Guide includes: ',

                            stats: [
                                'Creating your NeuroHive account',
                                'Choosing the right template',
                                'Connecting your workspace (Google Sheets, Slack, etc.)',
                                'Launching your first automation step-by-step',
                            ],
                        }

                    },
                    {
                        title: 'Creating your NeuroHive account',
                        texts: {
                            text1: 'To get started with NeuroHive, you first need to create an account. Simply go to the sign-up page and register using your business email. Once you verify your email, you’ll have access to your personal workspace where you can manage your automations, templates, and integrations.',
                            text2: 'After registration, you can:',
                            stats: [
                                'Set your company name and branding (optional)',
                                'Invite team members to collaborate',
                                'Configure basic access permissions',
                            ],
                            text2: 'This step takes less than 3 minutes'
                        }
                    },
                    {
                        title: 'Choosing the right template',

                        texts: {
                            text1: 'Once your account is active, you’ll be prompted to select a template that fits your use case. NeuroHive offers a range of ready-made automation templates tailored for different business needs:',
                            stats: [
                                'Candidate Screening',
                                'Invoice Reporting',
                                'Task Notifications',
                                'Data Sync between tools (e.g. CRM ↔ Google Sheets)',
                            ],
                            text2: 'Each template is fully customizable. You can preview the workflow before launching or modify it to suit your internal logic.'
                        }

                    },
                ],
            },
            {
                title: 'How to Set Up an Automation Flow',
                articles: [
                    {
                        title: 'Getting Started with NeuroHive',
                        texts: {
                            text1: 'Learn how to quickly onboard, create your first automation, and integrate essential tools.Guide includes: ',

                            stats: [
                                'Creating your NeuroHive account',
                                'Choosing the right template',
                                'Connecting your workspace (Google Sheets, Slack, etc.)',
                                'Launching your first automation step-by-step',
                            ],
                        }

                    },
                    {
                        title: 'Creating your NeuroHive account',
                        texts: {
                            text1: 'To get started with NeuroHive, you first need to create an account. Simply go to the sign-up page and register using your business email. Once you verify your email, you’ll have access to your personal workspace where you can manage your automations, templates, and integrations.',
                            text2: 'After registration, you can:',
                            stats: [
                                'Set your company name and branding (optional)',
                                'Invite team members to collaborate',
                                'Configure basic access permissions',
                            ],
                            text2: 'This step takes less than 3 minutes'
                        }
                    },
                    {
                        title: 'Choosing the right template',

                        texts: {
                            text1: 'Once your account is active, you’ll be prompted to select a template that fits your use case. NeuroHive offers a range of ready-made automation templates tailored for different business needs:',
                            stats: [
                                'Candidate Screening',
                                'Invoice Reporting',
                                'Task Notifications',
                                'Data Sync between tools (e.g. CRM ↔ Google Sheets)',
                            ],
                            text2: 'Each template is fully customizable. You can preview the workflow before launching or modify it to suit your internal logic.'
                        }

                    },
                ],
            },
            {
                title: 'Integrating NeuroHive with Your Stack',
                articles: [
                    {
                        title: 'Getting Started with NeuroHive',
                        texts: {
                            text1: 'Learn how to quickly onboard, create your first automation, and integrate essential tools.Guide includes: ',

                            stats: [
                                'Creating your NeuroHive account',
                                'Choosing the right template',
                                'Connecting your workspace (Google Sheets, Slack, etc.)',
                                'Launching your first automation step-by-step',
                            ],
                        }

                    },
                    {
                        title: 'Creating your NeuroHive account',
                        texts: {
                            text1: 'To get started with NeuroHive, you first need to create an account. Simply go to the sign-up page and register using your business email. Once you verify your email, you’ll have access to your personal workspace where you can manage your automations, templates, and integrations.',
                            text2: 'After registration, you can:',
                            stats: [
                                'Set your company name and branding (optional)',
                                'Invite team members to collaborate',
                                'Configure basic access permissions',
                            ],
                            text2: 'This step takes less than 3 minutes'
                        }
                    },
                    {
                        title: 'Choosing the right template',

                        texts: {
                            text1: 'Once your account is active, you’ll be prompted to select a template that fits your use case. NeuroHive offers a range of ready-made automation templates tailored for different business needs:',
                            stats: [
                                'Candidate Screening',
                                'Invoice Reporting',
                                'Task Notifications',
                                'Data Sync between tools (e.g. CRM ↔ Google Sheets)',
                            ],
                            text2: 'Each template is fully customizable. You can preview the workflow before launching or modify it to suit your internal logic.'
                        }

                    },
                ],
            },
            {
                title: 'Tracking Results & ROI',
                articles: [
                    {
                        title: 'Getting Started with NeuroHive',
                        texts: {
                            text1: 'Learn how to quickly onboard, create your first automation, and integrate essential tools.Guide includes: ',

                            stats: [
                                'Creating your NeuroHive account',
                                'Choosing the right template',
                                'Connecting your workspace (Google Sheets, Slack, etc.)',
                                'Launching your first automation step-by-step',
                            ],
                        }

                    },
                    {
                        title: 'Creating your NeuroHive account',
                        texts: {
                            text1: 'To get started with NeuroHive, you first need to create an account. Simply go to the sign-up page and register using your business email. Once you verify your email, you’ll have access to your personal workspace where you can manage your automations, templates, and integrations.',
                            text2: 'After registration, you can:',
                            stats: [
                                'Set your company name and branding (optional)',
                                'Invite team members to collaborate',
                                'Configure basic access permissions',
                            ],
                            text2: 'This step takes less than 3 minutes'
                        }
                    },
                    {
                        title: 'Choosing the right template',

                        texts: {
                            text1: 'Once your account is active, you’ll be prompted to select a template that fits your use case. NeuroHive offers a range of ready-made automation templates tailored for different business needs:',
                            stats: [
                                'Candidate Screening',
                                'Invoice Reporting',
                                'Task Notifications',
                                'Data Sync between tools (e.g. CRM ↔ Google Sheets)',
                            ],
                            text2: 'Each template is fully customizable. You can preview the workflow before launching or modify it to suit your internal logic.'
                        }

                    },
                ],
            },
            {
                title: 'Using Templates & Modules',
                articles: [
                    {
                        title: 'Getting Started with NeuroHive',
                        texts: {
                            text1: 'Learn how to quickly onboard, create your first automation, and integrate essential tools.Guide includes: ',

                            stats: [
                                'Creating your NeuroHive account',
                                'Choosing the right template',
                                'Connecting your workspace (Google Sheets, Slack, etc.)',
                                'Launching your first automation step-by-step',
                            ],
                        }

                    },
                    {
                        title: 'Creating your NeuroHive account',
                        texts: {
                            text1: 'To get started with NeuroHive, you first need to create an account. Simply go to the sign-up page and register using your business email. Once you verify your email, you’ll have access to your personal workspace where you can manage your automations, templates, and integrations.',
                            text2: 'After registration, you can:',
                            stats: [
                                'Set your company name and branding (optional)',
                                'Invite team members to collaborate',
                                'Configure basic access permissions',
                            ],
                            text2: 'This step takes less than 3 minutes'
                        }
                    },
                    {
                        title: 'Choosing the right template',

                        texts: {
                            text1: 'Once your account is active, you’ll be prompted to select a template that fits your use case. NeuroHive offers a range of ready-made automation templates tailored for different business needs:',
                            stats: [
                                'Candidate Screening',
                                'Invoice Reporting',
                                'Task Notifications',
                                'Data Sync between tools (e.g. CRM ↔ Google Sheets)',
                            ],
                            text2: 'Each template is fully customizable. You can preview the workflow before launching or modify it to suit your internal logic.'
                        }

                    },
                ],
            }
        ]
    ];

    const [openIndex, setOpenIndex] = useState(0);

    const toggleQuestion = (index) => {
        setOpenIndex(index);
    };

    const [data, setData] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleTabClick = (tabData) => {
        setData(tabData);
        setActiveIndex(0);
        setOpenIndex(0);
    };

    const handleArticleClick = (index) => {
        setActiveIndex(index);
    }


    return (
        <div className="section pt-[150px] pb-[100px] flex gap-[90px] mob:flex-col mob:gap-[40px]">
            <div className="py-[20px] px-[30px] pr-[10px] rounded-[15px] drop-shadow min-w-[400px] max-w-[400px] h-[500px] bg-[#f1f1f1c2] overflow-hidden mob:max-w-full mob:min-w-full mob:h-fit mob:items-center mob:flex mob:flex-col">
                <div className="flex items-center justify-center w-full pr-[10px]">
                    <p className={`title-3 pb-[14px] border-b-2 flex-grow text-center cursor-pointer ${data === 0 ? 'text-black border-black' : 'text-[#818181] border-[#818181]'
                        } `}
                        onClick={() => handleTabClick(0)}> FAQ</p>
                    <p className={`title-3 pb-[14px] border-b-2 flex-grow text-center cursor-pointer ${data === 1 ? 'text-black border-black' : 'text-[#818181] border-[#818181]'
                        } `}
                        onClick={() => handleTabClick(1)}> Guides</p>
                </div>
                <div className="flex flex-col overflow-y-auto gap-[15px] mt-[15px] max-h-full article-tab-scroll">
                    {info[data].map((item, index) => (
                        <div
                            key={index}
                            className={`faq-item p-[20px] bg-white rounded-[10px] flex flex-col gap-[10px] cursor-pointer question-item ${openIndex === index ? ' question-item-active' : ''}`}
                            onClick={() => {
                                handleArticleClick(index);
                                toggleQuestion(index);
                            }}
                        >
                            <div className='flex justify-between'>
                                <p className={`subtitle-16 ${activeIndex === index ? 'text-[#fb5d21]' : 'text-[#818181]'}`}>
                                    {item.title}
                                </p>
                                {!isDesktop && (
                                    <svg className='min-w-[16px] min-h-[14px]' width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 1.43553L8 18.479" stroke="#818181" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M1 12.0877L8 18.479L15 12.0877" stroke="#818181" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                )}
                            </div>
                            {!isDesktop && activeIndex === index && (
                                <div className='max-h-[475px] overflow-y-auto'>
                                    {item.articles.map((article, idx) => (
                                        <div key={idx} className='flex flex-col gap-[20px] mt-[10px]'>
                                            {Object.entries(article.texts).map(([key, value], textIndex) => (
                                                <div key={textIndex}>
                                                    {textIndex === 1 && key === 'stats' && Array.isArray(value) ? (
                                                        <ul className='flex flex-col'>
                                                            {value.map((statItem, statIdx) => (
                                                                <li
                                                                    key={statIdx}
                                                                    className="relative pl-[22px] px-[10px] text-[#818181] rounded-[4px] before:content-['•'] before:absolute before:left-[10px] before:text-[#818181] before:text-[20px] before:top-1/2 before:-translate-y-1/2"
                                                                >
                                                                    {statItem}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    ) : (
                                                        <p className='text-[#818181]'>{value}</p>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}



                </div>
                {!isDesktop && (
                    <button className='more'>View more</button>
                )}
            </div>

            <div className='flex flex-col gap-[40px]'>

                {
                    isDesktop && (
                        info[data][activeIndex].articles.map((article, index) => (
                            <div key={index} className='flex flex-col gap-[20px]'>
                                <h2 className='subtitle-1'>{article.title}</h2>
                                {Object.entries(article.texts).map(([key, value], textIndex) => (
                                    <div key={textIndex}>
                                        {textIndex === 1 && key === 'stats' && Array.isArray(value) ? (
                                            <ul className='flex flex-col'>
                                                {value.map((item, idx) => (
                                                    <li key={idx} className="relative pl-[22px] px-[10px] text-[#818181] rounded-[4px] before:content-['•'] before:absolute before:left-[10px] before:text-[#818181] before:text-[20px] before:top-1/2 before:-translate-y-1/2">{item}</li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <p className='text-[#818181]'>{value}</p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        ))
                    )
                }

                <div className='flex flex-col gap-[40px] max-w-[407px]'>
                    <h3 className='title-3'>See potential for automation in your own workflow?
                        Get in touch with us, and our expert will guide you through the first steps.</h3>
                    <div className='flex gap-[20px]'>
                        <button className='black-btn py-[16px] w-[326px]'>Get a consultation</button>
                    </div>
                </div>

            </div>
        </div>
    )
}