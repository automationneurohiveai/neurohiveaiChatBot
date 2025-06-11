import { useState } from 'react';
import './Article.css'
import useIsDesktop from '../useIsDesktop';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';

export default function Article() {

    const isDesktop = useIsDesktop();

    const articles = [
        {
            title: 'NeuroHive launches automated reporting module for finance teams',
            stats: ['12.05.2025', 'James Luies'],
            image: '/image/articles/article-1.svg'
        },
        {
            title: 'NeuroHive launches automated reporting module for finance teams',
            stats: ['12.05.2025', 'James Luies'],
            image: '/image/articles/article-1.svg'
        },
        {
            title: 'NeuroHive launches automated reporting module for finance teams',
            stats: ['12.05.2025', 'James Luies'],
            image: '/image/articles/article-1.svg'
        },
        {
            title: 'NeuroHive launches automated reporting module for finance teams',
            stats: ['12.05.2025', 'James Luies'],
            image: '/image/articles/article-1.svg'
        },
        {
            title: 'NeuroHive launches automated reporting module for finance teams',
            stats: ['12.05.2025', 'James Luies'],
            image: '/image/articles/article-1.svg'
        },
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    const handleArticleClick = (index) => {
        setActiveIndex(index);
    }


    return (
        <div className="section pt-[150px] pb-[100px] flex gap-[90px] mob:flex-col-reverse">

            {isDesktop ? (
                <div className="py-[20px] px-[30px] pr-[10px] rounded-[15px] drop-shadow min-w-[400px] max-w-[400px] h-[500px] bg-[#f1f1f1c2] overflow-hidden mob:max-w-full mob:min-w-full">
                    <div className="flex items-center justify-center">
                        <p className="title-3 text-[#818181]">Other articles</p>
                    </div>
                    <div className="flex flex-col overflow-y-auto gap-[15px] mt-[15px] max-h-full article-tab-scroll">
                        {articles.map((item, index) => (
                            <div
                                key={index}
                                className='p-[20px] bg-white rounded-[10px] flex flex-col gap-[10px] cursor-pointer'
                                onClick={() => handleArticleClick(index)}
                            >
                                <p className={`subtitle-16 ${activeIndex === index ? '' : 'text-[#818181]'}`}>
                                    {item.title}
                                </p>

                                <ul className="flex gap-[15px] mt-[5px]">
                                    {item.stats.map((stat, i) => (
                                        <li
                                            key={i}
                                            className="relative pl-[22px] py-[5px] px-[10px] text-[#FB5D21] bg-[#fb5f2123] rounded-[4px] before:content-['•'] before:absolute before:left-[10px] before:text-[#FB5D21] before:text-[20px] before:top-1/2 before:-translate-y-1/2"
                                        >
                                            {stat}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}

                    </div>
                </div>
            ) : (
                <div className='flex flex-col'>
                    <Swiper
                        className='w-full h-[350px]'
                        spaceBetween={20}
                        slidesPerView={1.2}
                        loop={false}
                       
                        breakpoints={{
                            1200: {
                                slidesPerView: 3.2,
                            }
                        }}
                        modules={[ Pagination]}
                        pagination={{
                            el: '.article-pagination',
                            clickable: true,
                        }}
                    >
                        {articles.map((item, index) => (
                            <SwiperSlide key={index} className='p-[20px] cases-swiper-slide rounded-[20px] bg-white shadow-md flex-col justify-between h-[calc(100% - 20px)]'>
                                <div className='w-full rounded-t-[20px] overflow-hidden shadow-xl rounded-xl h-[186px]'>
                                    <img src={`${process.env.PUBLIC_URL}${item.image}`} className='w-full object-cover' alt={item.title} />
                                </div>
                                <div className='pt-[20px] flex flex-col justify-between flex-grow'>
                                    <div className='flex flex-col'>
                                        <ul className="flex gap-[15px]">
                                            {item.stats.map((stat, i) => (
                                                <li key={i} className="relative pl-[22px] py-[5px] px-[10px] text-[#FB5D21] bg-[#fb5f2123] rounded-[4px] before:content-['•'] before:absolute before:left-[10px] before:text-[#FB5D21] before:text-[20px] before:top-1/2 before:-translate-y-1/2 mob:text-[11px]">
                                                    {stat}
                                                </li>
                                            ))}
                                        </ul>
                                        <h3 className='subtitle-1 mt-[10px]'>{item.title}</h3>
                                    </div>

                                    <button className='more'>Read more</button>
                                </div>
                            </SwiperSlide>
                        ))}

                    </Swiper>
                    <div className='w-full justify-between items-center hidden mob:flex'>
                        <div className='article-pagination swiper-pagination custom-swiper-pagination'></div>
                    </div>
                </div>
            )}


            <div className='flex flex-col gap-[30px]'>
                <h2 className='title-2 text-linear'>NeuroHive launches automated reporting module for finance teams</h2>
                <div className='flex flex-col gap-[40px]'>
                    <div className='drop-shadow rounded-[10px] overflow-hidden'>
                        <img src={`${process.env.PUBLIC_URL}${articles[activeIndex].image}`} className='rounded-[10px]' />
                    </div>
                    <div className='flex flex-col gap-[40px]'>
                        <div className='flex flex-col'>
                            <ul className="flex gap-[15px] ">
                                {articles[activeIndex].stats.map((stat, i) => (
                                    <li
                                        key={i}
                                        className="relative pl-[22px] py-[5px] px-[10px] text-[#FB5D21] bg-[#fb5f2123] rounded-[4px] before:content-['•'] before:absolute before:left-[10px] before:text-[#FB5D21] before:text-[20px] before:top-1/2 before:-translate-y-1/2"
                                    >
                                        {stat}
                                    </li>
                                ))}
                            </ul>
                            <h3 className='subtitle-1 mt-[10px]'>A smarter way to manage financial reporting — with speed, accuracy, and automation</h3>
                            <p className='title-3 text-[#818181] mt-[10px]'>In a major leap forward for finance process automation, NeuroHive has announced the release of its Automated Reporting Module, a powerful new tool built specifically for finance and accounting teams seeking to streamline reporting workflows and eliminate repetitive tasks.
                                <br /> <br />
                                With financial teams under growing pressure to deliver fast, accurate insights — often across multiple platforms — this module offers a much-needed solution: a no-code reporting engine that connects data sources, applies custom logic, and automatically delivers reports with minimal human involvement.</p>
                        </div>
                        <div className='flex flex-col'>
                            <h3 className='subtitle-1 mt-[10px]'>Addressing the Reporting Bottleneck in Finance Departments</h3>
                            <p className='title-3 text-[#818181] mt-[10px]'>In many organizations, financial reporting remains a manual, error-prone process. Whether it’s pulling figures from multiple spreadsheets, reconciling month-end numbers, or preparing routine reports for leadership — finance teams often spend dozens of hours per month just gathering and formatting data.
                                <br /> <br />
                                NeuroHive’s new module tackles this issue head-on by introducing automated workflows that:
                                <ul className='flex flex-col'>
                                    <li className="relative pl-[22px] py-[5px] px-[10px] text-[#818181] rounded-[4px] before:content-['•'] before:absolute before:left-[10px] before:text-[#818181] before:text-[20px] before:top-1/2 before:-translate-y-1/2">Pull data directly from ERP systems, cloud accounting tools, and CSVs</li>
                                    <li className="relative pl-[22px] py-[5px] px-[10px] text-[#818181] rounded-[4px] before:content-['•'] before:absolute before:left-[10px] before:text-[#818181] before:text-[20px] before:top-1/2 before:-translate-y-1/2">Apply logic rules to clean, transform, and group financial data</li>
                                    <li className="relative pl-[22px] py-[5px] px-[10px] text-[#818181] rounded-[4px] before:content-['•'] before:absolute before:left-[10px] before:text-[#818181] before:text-[20px] before:top-1/2 before:-translate-y-1/2">Populate predefined templates for P&L, cash flow, and balance sheet reports</li>
                                    <li className="relative pl-[22px] py-[5px] px-[10px] text-[#818181] rounded-[4px] before:content-['•'] before:absolute before:left-[10px] before:text-[#818181] before:text-[20px] before:top-1/2 before:-translate-y-1/2">Distribute results via email, Slack, dashboards, or cloud storage — fully automated</li>
                                </ul>
                                <br /> <br />
                                This approach not only accelerates delivery, but also ensures consistency, traceability, and higher data integrity across the board..</p>
                        </div>
                        <div className='flex flex-col'>
                            <h3 className='subtitle-1 mt-[10px]'>From Routine to Real-Time: A Paradigm Shift</h3>
                            <p className='title-3 text-[#818181] mt-[10px]'>The Automated Reporting Module is:

                                <ul className='flex flex-col'>
                                    <li className="relative pl-[22px] py-[5px] px-[10px] text-[#818181] rounded-[4px] before:content-['•'] before:absolute before:left-[10px] before:text-[#818181] before:text-[20px] before:top-1/2 before:-translate-y-1/2">No-code, fully customizable, and simple to deploy</li>
                                    <li className="relative pl-[22px] py-[5px] px-[10px] text-[#818181] rounded-[4px] before:content-['•'] before:absolute before:left-[10px] before:text-[#818181] before:text-[20px] before:top-1/2 before:-translate-y-1/2">Built with enterprise-grade security: GDPR-compliant, encrypted, and audit-friendly</li>
                                    <li className="relative pl-[22px] py-[5px] px-[10px] text-[#818181] rounded-[4px] before:content-['•'] before:absolute before:left-[10px] before:text-[#818181] before:text-[20px] before:top-1/2 before:-translate-y-1/2">Equipped with access management features to control who sees what and when</li>
                                </ul>
                                <br /> <br />

                                Even non-technical team members can configure rules, define formats, and set up output channels using NeuroHive’s intuitive visual builder. And because the module is based on modular automation blocks, it can be extended to include approvals, anomaly detection, or cross-departmental workflows.</p>

                            <div className='drop-shadow bg-white rounded-[10px] mt-[20px] w-full h-[264px]'></div>
                        </div>
                        <div className='flex flex-col gap-[40px] max-w-[407px]'>
                            <h3 className='title-3'>See potential for automation in your own workflow?
                                Get in touch with us, and our expert will guide you through the first steps.</h3>
                            <div className='flex gap-[20px]'>
                                <button className='black-btn py-[16px] w-[235px]'>Get a consultation</button>
                                <button className='white-btn w-[61.5px] h-[61.5px] flex items-center justify-center'><img src={`${process.env.PUBLIC_URL}/image/Share.svg`} /></button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}