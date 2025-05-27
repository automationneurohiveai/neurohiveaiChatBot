import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './Cases.css';
import { useRef, useState } from 'react';

export default function Cases() {

    const sliders = [
        {
            image: '/image/cases/cases-slider-1.svg',
            title: 'Automated Recruiting',
            stats: ['ROI 135%', 'FTE Saved 0.0134'],
            input: 'Job description & CVs',
            aiAction: 'Screens candidates, scores relevance, suggests top matches',
            result: 'Shortlist in minutes, faster hiring decisions'
        },
        {
            image: '/image/cases/cases-slider-1.svg',
            title: 'Invoice Archiver',
            stats: ['ROI 135%', 'FTE Saved 0.0134'],
            input: 'PDF or scanned invoice',
            aiAction: 'Extracts data, categorises, saves in cloud folders',
            result: 'Structured archive, zero manual effort'
        },
        {
            image: '/image/cases/cases-slider-2.svg',
            title: 'Automated Recruiting',
            stats: ['ROI 135%', 'FTE Saved 0.0134'],
            input: 'Job description & CVs',
            aiAction: 'Screens candidates, scores relevance, suggests top matches',
            result: 'Shortlist in minutes, faster hiring decisions'
        },
        {
            image: '/image/cases/cases-slider-2.svg',
            title: 'Automated Recruiting',
            stats: ['ROI 135%', 'FTE Saved 0.0134'],
            input: 'Job description & CVs',
            aiAction: 'Screens candidates, scores relevance, suggests top matches',
            result: 'Shortlist in minutes, faster hiring decisions'
        },
    ];

    const swiperRef = useRef(null);
    const [atStart, setAtStart] = useState(true);
    const [atEnd, setAtEnd] = useState(false);

    const handleSlideChange = (swiper) => {
        setAtStart(swiper.isBeginning);
        setAtEnd(swiper.isEnd);
    };


    return (
        <section className="section-2 flex flex-col gap-[30px]">
            <div className='max-w-[1200px] flex items-end justify-between'>
                <div className='flex flex-col gap-[5px]'>
                    <span className="title-top-type">
                        <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="3.5" cy="3.5" r="3.5" fill="#818181" />
                        </svg>

                        Cases</span>
                    <h2 className='text-linear title-2'>Real Automation Use Cases</h2>
                </div>
                <div className='flex items-end justify-end h-full'>
                    <div className='flex items-center gap-[50px]'>
                        <div className={`cases-swiper-button-prev swiper-button-prev cursor-pointer swiper-control-btns ${atStart ? 'disabled-button-class' : ''}`}>←</div>
                        <div className={`cases-swiper-button-next swiper-button-next cursor-pointer swiper-control-btns ${atEnd ? 'disabled-button-class' : ''}`}>→</div>
                    </div>
                </div>
            </div>
            <Swiper
                className='w-full h-[620px]'
                spaceBetween={20}
                slidesPerView={3.2}
                loop={false}
                navigation={{
                    nextEl: '.cases-swiper-button-next',
                    prevEl: '.cases-swiper-button-prev',
                }}
                modules={[Navigation]}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                    setAtStart(swiper.isBeginning);
                    setAtEnd(swiper.isEnd);
                }}
                onSlideChange={handleSlideChange}
            >
                {sliders.map((item, index) => (
                    <SwiperSlide key={index} className='cases-swiper-slide rounded-[20px] bg-white shadow-md flex-col justify-between h-[calc(100% - 20px)]'>
                        <div className='w-full rounded-t-[20px] overflow-hidden'>
                            <img src={`${process.env.PUBLIC_URL}${item.image}`} className='w-full object-cover' alt={item.title} />
                        </div>
                        <div className='p-[30px] flex flex-col justify-between flex-grow'>
                            <div className='flex flex-col'>
                                <h3 className='subtitle-1'>{item.title}</h3>
                                <ul className="flex gap-[15px] mt-[5px]">
                                    {item.stats.map((stat, i) => (
                                        <li key={i} className="relative pl-[22px] py-[5px] px-[10px] text-[#FB5D21] bg-[#fb5f2123] rounded-[4px] before:content-['•'] before:absolute before:left-[10px] before:text-[#FB5D21] before:text-[20px] before:top-1/2 before:-translate-y-1/2">
                                            {stat}
                                        </li>
                                    ))}
                                </ul>
                                <div className='flex flex-col gap-[15px] mt-[10px]'>
                                    <div className='flex gap-[40px] items-center'>
                                        <p className='txt-caption'>Input: </p>
                                        <p className='txt-caption text-[#818181]'>{item.input}</p>
                                    </div>
                                    <div className='flex gap-[13px] items-center'>
                                        <p className='txt-caption whitespace-nowrap'>AI Action: </p>
                                        <p className='txt-caption text-[#818181]'>{item.aiAction}</p>
                                    </div>
                                    <div className='flex gap-[30px] items-center'>
                                        <p className='txt-caption'>Result: </p>
                                        <p className='txt-caption text-[#818181]'>{item.result}</p>
                                    </div>
                                </div>
                            </div>
                            <button className='black-btn w-full py-[13px] mt-[20px]'>Learn more</button>
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>
        </section >
    )
}