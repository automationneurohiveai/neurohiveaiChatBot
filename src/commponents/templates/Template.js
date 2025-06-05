import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Template.css';

export default function Template() {

    const sliders = [
        {
            image: '/image/template/template-card-el-1.svg',
            title: 'Candidate Pipeline',
            text: 'Track candidates through your hiring stages with customizable pipelines and automated status updates.'
        },
        {
            image: '/image/template/template-card-el-2.svg',
            title: 'InAI Screening',
            text: 'Automate candidate screening with AI-powered resume parsing and qualification matching.'
        },
        {
            image: '/image/template/template-card-el-3.svg',
            title: 'Interview Scheduler',
            text: 'Streamline interview scheduling with automated calendar coordination and reminders.'
        },
        {
            image: '/image/template/template-card-el-2.svg',
            title: 'InAI Screening',
            text: 'Automate candidate screening with AI-powered resume parsing and qualification matching.'
        },
        {
            image: '/image/template/template-card-el-3.svg',
            title: 'InAI Screening',
            text: 'Automate candidate screening with AI-powered resume parsing and qualification matching.'
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
        <section className="section-2 flex gap-[70px] mob:flex-col" id='templates'>
            <div className='min-w-[418px] flex flex-col'>
                <span className="title-top-type">
                    <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="3.5" cy="3.5" r="3.5" fill="#818181" />
                    </svg>

                    Templates</span>
                <h2 className='text-linear title-2 mt-[10px]'>Smart Templates for Recruiters</h2>

                <p className='title-3 text-[#818181] mt-[15px] max-w-[274px]'>Boost your hiring workflow with pre-built Notion templates — fully integrated and ready to use. </p>
                <ul className="flex flex-col gap-[10px] mt-[40px]">
                    <li className="w-fit relative pl-[22px] py-[5px] px-[10px] text-[#FB5D21] bg-[#fb5f2123] rounded-[4px] before:content-['•'] before:absolute before:left-[10px] before:text-[#FB5D21] before:text-[20px] before:top-1/2 before:-translate-y-1/2">
                        Recruitment teams
                    </li>
                    <li className="w-fit relative pl-[22px] py-[5px] px-[10px] text-[#FB5D21] bg-[#fb5f2123] rounded-[4px] before:content-['•'] before:absolute before:left-[10px] before:text-[#FB5D21] before:text-[20px] before:top-1/2 before:-translate-y-1/2">
                        HR professionals
                    </li>
                    <li className="w-fit relative pl-[22px] py-[5px] px-[10px] text-[#FB5D21] bg-[#fb5f2123] rounded-[4px] before:content-['•'] before:absolute before:left-[10px] before:text-[#FB5D21] before:text-[20px] before:top-1/2 before:-translate-y-1/2">
                        Staffing agencies
                    </li>
                </ul>
            </div>

            <div className='swiper-parent flex flex-col gap-[25px]'>

                <Swiper
                    className='w-full'
                    spaceBetween={20}
                    slidesPerView={1.2}
                    breakpoints={{
                        1200: {
                            slidesPerView: 2.8,
                        }
                    }}
                    loop={false}
                    navigation={{
                        nextEl: '.template-swiper-button-next',
                        prevEl: '.template-swiper-button-prev',
                    }}
                    modules={[Navigation, Pagination]}
                    pagination={{
                        el: '.template-pagination',
                        clickable: true
                    }}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                        setAtStart(swiper.isBeginning);
                        setAtEnd(swiper.isEnd);
                    }}
                    onSlideChange={handleSlideChange}
                >
                    {sliders.map((item, index) => (
                        <SwiperSlide key={index} className='slide cases-swiper-slide rounded-[20px] bg-white shadow-md flex-col justify-between h-[calc(100% - 20px)]'>
                            <div className='slide-image w-full rounded-t-[20px] overflow-hidden flex-grow'>
                                <div className='slide-hover-effect'></div>
                                <img src={`${process.env.PUBLIC_URL}${item.image}`} className='w-full object-cover' alt={item.title} />
                                {/* <div className='gradient-overlay'></div> */}

                            </div>
                            <div className='p-[20px] flex flex-col justify-between '>
                                <div className='flex flex-col gap-[10px]'>
                                    <h3 className='subtitle-1'>{item.title}</h3>
                                    <p className='txt-2 text-[#818181]'>{item.text}</p>
                                </div>
                                <div className='mt-[10px] flex gap-[15px]'>
                                    <button className='white-btn w-full py-[13px]'>View</button>
                                    <button className='black-btn w-full py-[13px] '>Learn more</button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>
                <div className='w-full flex justify-between items-center pr-[120px]'>
                    <div className='flex items-center gap-[50px] mob:hidden'>
                        <div className={`template-swiper-button-prev swiper-button-prev cursor-pointer swiper-control-btns ${atStart ? 'disabled-button-class' : ''}`}>←</div>
                        <div className={`template-swiper-button-next swiper-button-next cursor-pointer swiper-control-btns ${atEnd ? 'disabled-button-class' : ''}`}>→</div>
                    </div>
                    <div className='template-pagination swiper-pagination custom-swiper-pagination'></div>
                </div>
            </div>

        </section >
    )
}