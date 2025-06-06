import './Team.css';
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import useIsDesktop from '../useIsDesktop';

export default function Team() {
    const isDesktop = useIsDesktop();

    const sliders = [
        {
            image: '/image/team/team-1.png',
            name: 'Angela Martinez',
            proffesion: 'UX/UI Designer',
            about: 'A visionary leader with a deep understanding of AI and business strategy. Drives NeuroHive’s growth and innovation.',
            linkedin: '',
        },
        {
            image: '/image/team/team-2.png',
            name: 'Angela Martinez',
            proffesion: 'UX/UI Designer',
            about: 'A visionary leader with a deep understanding of AI and business strategy. Drives NeuroHive’s growth and innovation.',
            linkedin: '',
        },
        {
            image: '/image/team/team-3.png',
            name: 'Angela Martinez',
            proffesion: 'UX/UI Designer',
            about: 'A visionary leader with a deep understanding of AI and business strategy. Drives NeuroHive’s growth and innovation.',
            linkedin: '',
        },
        {
            image: '/image/team/team-4.png',
            name: 'Angela Martinez',
            proffesion: 'UX/UI Designer',
            about: 'A visionary leader with a deep understanding of AI and business strategy. Drives NeuroHive’s growth and innovation.',
            linkedin: '',
        },
        {
            image: '/image/team/team-1.png',
            name: 'Angela Martinez',
            proffesion: 'UX/UI Designer',
            about: 'A visionary leader with a deep understanding of AI and business strategy. Drives NeuroHive’s growth and innovation.',
            linkedin: '',
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
        <div className='section-2 flex flex-col gap-[30px]'>
            <div className='max-w-[1200px] flex items-end justify-between'>
                <div className='flex flex-col gap-[5px]'>
                    <span className="title-top-type">
                        <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="3.5" cy="3.5" r="3.5" fill="#818181" />
                        </svg>

                        Team</span>
                    <h2 className='text-linear title-2'>Meet our team</h2>
                    <p className='title-3 text-[#818181] w-[571px]'>At NeuroHive AI, we bring together professionals from AI development, design, marketing, and data analytics. Our mission is to create intuitive solutions that help businesses grow and optimise their operations.</p>
                </div>
                <div className='flex items-end justify-end h-full'>
                    <div className='flex items-center gap-[50px]'>
                        <div className={`team-swiper-button-prev swiper-button-prev cursor-pointer swiper-control-btns ${atStart ? 'disabled-button-class' : ''}`}>←</div>
                        <div className={`team-swiper-button-next swiper-button-next cursor-pointer swiper-control-btns ${atEnd ? 'disabled-button-class' : ''}`}>→</div>
                    </div>
                </div>
            </div>
            <Swiper
                className='w-full h-[510px]'
                spaceBetween={20}
                slidesPerView={1.3}
                breakpoints={{
                    1200: {
                        slidesPerView: 4.2,
                    }
                }}
                loop={false}
                navigation={{
                    nextEl: '.team-swiper-button-next',
                    prevEl: '.team-swiper-button-prev',
                }}
                pagination={{
                    el: '.team-pagination',
                    clickable: true
                }}
                modules={[Navigation, Pagination]}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                    setAtStart(swiper.isBeginning);
                    setAtEnd(swiper.isEnd);
                }}
                onSlideChange={handleSlideChange}
            >
                {sliders.map((item, index) => (
                    <SwiperSlide key={index} className='slide team-item cases-swiper-slide rounded-[20px] bg-white shadow-md flex-col justify-between h-[calc(100% - 20px)]'>
                        <div className='slide-image w-full rounded-t-[20px] relative team-user-image'>
                            <div className='slide-hover-effect'></div>
                            <img src={`${process.env.PUBLIC_URL}${item.image}`} className='w-full object-cover rounded-t-[20px]' alt={item.name} />
                            {/* <img src={`${process.env.PUBLIC_URL}/image/Gradient-Overlay.svg`} className='absolute w-full bottom-[-41px] h-[83px]' /> */}
                            <div className='gradient-overlay'></div>
                        </div>
                        <div className='p-[30px] flex flex-col justify-between flex-grow pb-[40px]'>
                            <div className='flex items-center gap-[10px] justify-between'>
                                <div className='flex flex-col gap-[5px]'>
                                    <h3 className='title-3'>{item.name}</h3>
                                    <p className='subtitle-16 text-[#818181]'>{item.proffesion}</p>
                                </div>
                                <a href={`${item.linkedin}`} className='p-[11px] bg-[#E9E9E9] rounded-[4px] shadow-xl'>
                                    <img src={`${process.env.PUBLIC_URL}/image/Linkedin.svg`} />
                                </a>
                            </div>
                            <p className='mt-[10px] text-[#818181]'>{item.about}</p>
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>
            {!isDesktop && (
                <div className='w-full justify-between items-center hidden mob:flex'>
                    <div className='team-pagination swiper-pagination custom-swiper-pagination'></div>
                </div>
            )}

        </div>
    );
}