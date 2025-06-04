import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './News.css';
import { useRef, useState } from 'react';

export default function News() {

    const sliders = [
        {
            image: '/image/news/card-element-1.svg',
            title: 'NeuroHive launches automated reporting module for finance teams',
            stats: ['12.05.2025', 'James Knowles'],
            input: 'Job description & CVs',
            aiAction: 'Screens candidates, scores relevance, suggests top matches',
            result: 'Shortlist in minutes, faster hiring decisions'
        },
        {
            image: '/image/news/card-element-1.svg',
            title: 'NeuroHive launches automated reporting module for finance teams',
            stats: ['12.05.2025', 'James Knowles'],
            input: 'Job description & CVs',
            aiAction: 'Screens candidates, scores relevance, suggests top matches',
            result: 'Shortlist in minutes, faster hiring decisions'
        },
        {
            image: '/image/news/card-element-1.svg',
            title: 'NeuroHive launches automated reporting module for finance teams',
            stats: ['12.05.2025', 'James Knowles'],
            input: 'Job description & CVs',
            aiAction: 'Screens candidates, scores relevance, suggests top matches',
            result: 'Shortlist in minutes, faster hiring decisions'
        },
        {
            image: '/image/news/card-element-1.svg',
            title: 'NeuroHive launches automated reporting module for finance teams',
            stats: ['12.05.2025', 'James Knowles'],
            input: 'Job description & CVs',
            aiAction: 'Screens candidates, scores relevance, suggests top matches',
            result: 'Shortlist in minutes, faster hiring decisions'
        },
        {
            image: '/image/news/card-element-1.svg',
            title: 'NeuroHive launches automated reporting module for finance teams',
            stats: ['12.05.2025', 'James Knowles'],
            input: 'Job description & CVs',
            aiAction: 'Screens candidates, scores relevance, suggests top matches',
            result: 'Shortlist in minutes, faster hiring decisions'
        }
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

                        News</span>
                    <h2 className='text-linear title-2'>Latest from NeuroHive</h2>
                </div>
                <div className='flex items-end justify-end h-full'>
                    <div className='flex items-center gap-[50px]'>
                        <div className={`news-swiper-button-prev swiper-button-prev cursor-pointer swiper-control-btns ${atStart ? 'disabled-button-class' : ''}`}>←</div>
                        <div className={`news-swiper-button-next swiper-button-next cursor-pointer swiper-control-btns ${atEnd ? 'disabled-button-class' : ''}`}>→</div>
                    </div>
                </div>
            </div>
            <Swiper
                className='w-full h-[500px]'
                spaceBetween={20}
                slidesPerView={3.2}
                loop={false}
                navigation={{
                    nextEl: '.news-swiper-button-next',
                    prevEl: '.news-swiper-button-prev',
                }}
               
                modules={[Navigation, Pagination]}
                pagination={{
                    el: '.news-pagination',
                    clickable: true,
                }}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                    setAtStart(swiper.isBeginning);
                    setAtEnd(swiper.isEnd);
                }}
                onSlideChange={handleSlideChange}
            >
                {sliders.map((item, index) => (
                    <SwiperSlide key={index} className='p-[20px] cases-swiper-slide rounded-[20px] bg-white shadow-md flex-col justify-between h-[calc(100% - 20px)]'>
                        <div className='w-full rounded-t-[20px] overflow-hidden shadow-xl rounded-xl'>
                            <img src={`${process.env.PUBLIC_URL}${item.image}`} className='w-full object-cover' alt={item.title} />
                        </div>
                        <div className='pt-[20px] flex flex-col justify-between flex-grow'>
                            <div className='flex flex-col'>
                                <ul className="flex gap-[15px]">
                                    {item.stats.map((stat, i) => (
                                        <li key={i} className="relative pl-[22px] py-[5px] px-[10px] text-[#FB5D21] bg-[#fb5f2123] rounded-[4px] before:content-['•'] before:absolute before:left-[10px] before:text-[#FB5D21] before:text-[20px] before:top-1/2 before:-translate-y-1/2">
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
        </section >
    )
}