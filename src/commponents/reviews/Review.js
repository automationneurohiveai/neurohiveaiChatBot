import './Review.css';

export default function Review() {

    return (
        <section className='section flex flex-col items-center gap-[30px]'>
            <div className='flex flex-col justify-center items-center max-w-[510px] text-center'>
                <span className="title-top-type">
                    <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="3.5" cy="3.5" r="3.5" fill="#818181" />
                    </svg>

                    Reviews</span>
                <h2 className='title-2 text-linear mt-[5px]'>What Our Clients Say</h2>
                <p className='title-3 text-[#818181] mt-[10px]'>Companies across industries use NeuroHive AI to streamline recruiting, save time, and make smarter hiring decisions.</p>
            </div>
            <div className='reviews-block'>
                <div className='review-item review-item-1'>
                    <p className='txt-caption text-[#818181]'>“NeuroHive AI has transformed our recruiting process. We’ve reduced time-to-hire by 40% while improving candidate quality. The AI assistant handles initial screenings so our team can focus on meaningful candidate interactions.”</p>
                    <div className='flex mt-[96px] gap-[15px]'>
                        <div className='overflow-hidden min-w-[72px] w-[72px] h-[72px] rounded-[10px]'>
                            <img src={`${process.env.PUBLIC_URL}/image/review/review-user-1.svg`} className='bg-[#E5E5E5]' />
                        </div>
                        <div className='flex flex-col gap-[5px]'>
                            <p className='title-3'>Emily Richardson</p>
                            <span className='main-txt text-[#818181]'>HR Director, TechNova Inc.</span>
                        </div>
                    </div>
                </div>
                <div className='review-item'>
                    <p className='txt-caption text-[#818181]'>“We’ve doubled our content output while maintaining quality. The AI generates first drafts that capture our brand voice perfectly.”</p>
                    <div className='flex mt-[96px] gap-[15px]'>
                        <div className='overflow-hidden min-w-[72px] w-[72px] h-[72px] rounded-[10px]'>
                            <img src={`${process.env.PUBLIC_URL}/image/review/review-user-2.svg`} className='bg-[#E5E5E5]' />
                        </div>
                        <div className='flex flex-col gap-[5px]'>
                            <p className='title-3'>Sophia Chen</p>
                            <span className='main-txt text-[#818181]'>Marketing Director</span>
                        </div>
                    </div>
                </div>
                <div className='review-item review-item-3'>
                    <p className='title-3'>Expanding Internationally</p>
                    <span className='txt-caption text-[#818181]'>NeuroHive AI is already being explored by HR teams across Europe and beyond.</span>
                    <div className='review-gradient-overlay'></div>

                </div>
                <div className='review-item review-item-4'>
                    <p className='title-3'>Expanding Internationally</p>
                    <span className='txt-caption text-[#818181]'>NeuroHive AI is already being explored by HR teams across Europe and beyond.</span>
                    <div className='review-gradient-overlay'></div>
                </div>

                <div className='review-item'>
                    <p className='txt-caption text-[#818181]'>“Since integrating NeuroHive AI into our workflow, we’ve significantly reduced our manual screening time.”</p>
                    <div className='flex mt-[96px] gap-[15px]'>
                        <div className='overflow-hidden min-w-[72px] w-[72px] h-[72px] rounded-[10px]'>
                            <img src={`${process.env.PUBLIC_URL}/image/review/review-user-3.svg`} className='bg-[#E5E5E5]' />
                        </div>
                        <div className='flex flex-col gap-[5px]'>
                            <p className='title-3'>Lena Bauer</p>
                            <span className='main-txt text-[#818181]'>Talent Manager,
                                PeopleFirst Agency</span>
                        </div>
                    </div>
                </div>
                <div className='review-item review-item-6 h-[308px]'>
                    <p className='txt-caption text-[#818181]'>“The invoice processing automation has been a game-changer. What used to take our team 20+ hours per week now happens automatically. The accuracy is impressive, and the ROI was evident within the first month.”</p>
                    <div className='flex mt-[96px] gap-[15px]'>
                        <div className='overflow-hidden min-w-[72px] w-[72px] h-[72px] rounded-[10px]'>
                            <img src={`${process.env.PUBLIC_URL}/image/review/review-user-4.svg`} className='bg-[#E5E5E5]' />
                        </div>
                        <div className='flex flex-col gap-[5px]'>
                            <p className='title-3'>Marcus Johnson</p>
                            <span className='main-txt text-[#818181]'>Operations Manager, GreenPath Solutions</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}