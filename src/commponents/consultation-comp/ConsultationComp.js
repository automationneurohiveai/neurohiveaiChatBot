import './Consultation.css'

export default function ConsultationComp() {

    return (
        <div className="consultation-container">
            <div className="section ">
                <div className="max-w-[468px]">
                    <h2 className="title-2 text-linear">Get Your Free AI Consultation</h2>
                    <p className="mt-[10px] text-[#818181]">Discover how AI can boost your business performance. Let’s explore together how NeuroHive AI can streamline your operations.</p>
                    <div className="grid grid-cols-2 gap-[20px] mt-[30px]">
                        <div className='consult-card'>
                            <h3 className='title-3'>+40% Productivity</h3>
                            <p className='main-txt text-[#818181]'>Boost productivity by 40% with AI automation</p>
                            <img src={`${process.env.PUBLIC_URL}/image/consultation/icon-graph.svg`} alt="Consultation Icon 1" className='consultation-img' />
                        </div>
                        <div className='consult-card'>
                            <h3 className='title-3'>Easy Automation</h3>
                            <p className='main-txt text-[#818181]'>Automate routine processes easily</p>
                            <img src={`${process.env.PUBLIC_URL}/image/consultation/icon-Mashine.svg`} alt="Consultation Icon 2" className='consultation-img' />
                        </div>
                        <div className='consult-card'>
                            <h3 className='title-3'>Personalized Solutions</h3>
                            <p className='main-txt text-[#818181]'>Personalized AI solutions for your business</p>
                            <img src={`${process.env.PUBLIC_URL}/image/consultation/icon-ai.svg`} alt="Consultation Icon 3" className='consultation-img' />
                        </div>
                        <div className='consult-card'>
                            <h3 className='title-3'>GDPR Secure</h3>
                            <p className='main-txt text-[#818181]'>GDPR compliant and data secure</p>
                            <img src={`${process.env.PUBLIC_URL}/image/consultation/icon-lock.svg`} alt="Consultation Icon 4" className='consultation-img' />
                        </div>
                    </div>
                </div>
                <form className='consultation-form'>
                    <h3 className='subtitle-cover'>Contact form</h3>
                    <p className='txt-caption-3 max-w-[233px] text-[#818181] text-center'>Fill out the form below and we’ll get
                        back to you within 24 hours.</p>
                    <div className='flex flex-col gap-[10px] mt-[20px] w-full'>
                        <input className='input-style-1' type='text' placeholder='Name' />
                        <input className='input-style-1' type='email' placeholder='E-mail' />
                        <input className='input-style-1' type='text' placeholder='Company' />
                        <input className='input-style-1' type='text' placeholder='Website' />
                        <input className='input-style-1' type='tel' placeholder='Phone' />
                    </div>

                    <label className="custom-checkbox-label mt-[15px] w-full">
                        <input type="checkbox" />
                        <div className="checkmark"></div>
                        <span className="main-txt text-[#818181]">I agree to the terms and privacy policy</span>
                    </label>
                    <div className='flex mt-[30px] items-center gap-[10px]'>
                        <img src={`${process.env.PUBLIC_URL}/image/lock.svg`} />
                        <p className='text-[#818181] text-[12px]'>All your information is encrypted and fully protected. Check our
                            <a href='' className='text-black'> Privacy Policy</a></p>
                    </div>
                    <button className='w-full black-btn py-[18px] mt-[20px]' type='submiy'>Submit form</button>
                </form>
            </div>
        </div>
    )
}