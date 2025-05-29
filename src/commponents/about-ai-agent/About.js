export default function About() {

    return (
        <section className="section flex gap-[120px]">
            <div className="flex flex-col">
                <span className="title-top-type">
                    <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="3.5" cy="3.5" r="3.5" fill="#818181" />
                    </svg>

                    Assistent</span>
                <h2 className="section-title">About your AI Agent</h2>
                {/* <img src={`${process.env.PUBLIC_URL}/image/assistent/gif.gif`} /> */}
                <div className="rounded-[20px] overflow-hidden mt-[30px]">
                    <video src={`${process.env.PUBLIC_URL}/image/assistent/gif.mp4`} autoPlay muted className="rounded-[20px]" loop />
                </div>
            </div>
            <div className="flex flex-col gap-[30px] max-w-[447px]">
                <span className="txt-18 text-[#818181] mt-[6px]">Your AI Agent is more than a tool — it’s a team member. It learns your processes, talks to clients, and executes tasks —so you can focus on what really matters.</span>
                <div className="flex flex-col gap-[20px]">
                    <div className="flex gap-[15px]">
                        <svg className="min-w-[40px]" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="40" height="40" rx="7" fill="#E9D4CD" />
                            <path d="M16.9785 14.3411C16.9785 13.1906 17.8704 12.2578 18.9707 12.2578C20.071 12.2578 20.9629 13.1906 20.9629 14.3411V15.5911H21.7598C22.8737 15.5911 23.4306 15.5911 23.8699 15.7814C24.4557 16.0352 24.9211 16.5219 25.1637 17.1344C25.3457 17.5939 25.3457 18.1763 25.3457 19.3411H26.541C27.6413 19.3411 28.5332 20.2739 28.5332 21.4245C28.5332 22.5751 27.6413 23.5078 26.541 23.5078H25.3457V24.9245C25.3457 26.3246 25.3457 27.0247 25.0851 27.5595C24.8559 28.0299 24.4902 28.4123 24.0404 28.652C23.529 28.9245 22.8596 28.9245 21.5207 28.9245H20.9629V27.4661C20.9629 26.4306 20.1602 25.5911 19.1699 25.5911C18.1797 25.5911 17.377 26.4306 17.377 27.4661V28.9245H16.4207C15.0818 28.9245 14.4124 28.9245 13.901 28.652C13.4512 28.4123 13.0855 28.0299 12.8563 27.5595C12.5957 27.0247 12.5957 26.3246 12.5957 24.9245V23.5078H13.791C14.8913 23.5078 15.7832 22.5751 15.7832 21.4245C15.7832 20.2739 14.8913 19.3411 13.791 19.3411H12.5957C12.5957 18.1763 12.5957 17.5939 12.7777 17.1344C13.0203 16.5219 13.4857 16.0352 14.0715 15.7814C14.5108 15.5911 15.0677 15.5911 16.1816 15.5911H16.9785V14.3411Z" stroke="#FB5D21" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        <div className="flex flex-col gap-[5px]">
                            <p className="txt-18">Learns your workflows</p>
                            <span className="txt-2 text-[#818181]">Understands how your business operates by observing user behavior and preferences</span>
                        </div>
                    </div>
                    <div className="flex gap-[15px]">
                        <svg className="min-w-[40px]" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="40" height="40" rx="7" fill="#E9D4CD" />
                            <path d="M22.0833 22.5L24.5833 20L22.0833 17.5M17.9167 17.5L15.4167 20L17.9167 22.5M16.5 27.5H23.5C24.9001 27.5 25.6002 27.5 26.135 27.2275C26.6054 26.9878 26.9878 26.6054 27.2275 26.135C27.5 25.6002 27.5 24.9001 27.5 23.5V16.5C27.5 15.0999 27.5 14.3998 27.2275 13.865C26.9878 13.3946 26.6054 13.0122 26.135 12.7725C25.6002 12.5 24.9001 12.5 23.5 12.5H16.5C15.0999 12.5 14.3998 12.5 13.865 12.7725C13.3946 13.0122 13.0122 13.3946 12.7725 13.865C12.5 14.3998 12.5 15.0999 12.5 16.5V23.5C12.5 24.9001 12.5 25.6002 12.7725 26.135C13.0122 26.6054 13.3946 26.9878 13.865 27.2275C14.3998 27.5 15.0999 27.5 16.5 27.5Z" stroke="#FB5D21" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>


                        <div className="flex flex-col gap-[5px]">
                            <p className="txt-18">Automates Tasks & Follows Logic</p>
                            <span className="txt-2 text-[#818181]">Executes complex workflows with precision, following your business rules and decision- making processes automatically</span>
                        </div>
                    </div>
                    <div className="flex gap-[15px]">
                        <svg className="min-w-[40px]" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="40" height="40" rx="7" fill="#E9D4CD" />
                            <path d="M24.1667 17.5L19.6381 22.0286C19.4731 22.1936 19.3906 22.2761 19.2954 22.307C19.2117 22.3342 19.1216 22.3342 19.0379 22.307C18.9428 22.2761 18.8603 22.1936 18.6953 22.0286L17.1381 20.4714C16.9731 20.3064 16.8906 20.2239 16.7954 20.193C16.7117 20.1658 16.6216 20.1658 16.5379 20.193C16.4428 20.2239 16.3603 20.3064 16.1953 20.4714L12.5 24.1667M24.1667 17.5H20.8333M24.1667 17.5V20.8333M16.5 27.5H23.5C24.9001 27.5 25.6002 27.5 26.135 27.2275C26.6054 26.9878 26.9878 26.6054 27.2275 26.135C27.5 25.6002 27.5 24.9001 27.5 23.5V16.5C27.5 15.0999 27.5 14.3998 27.2275 13.865C26.9878 13.3946 26.6054 13.0122 26.135 12.7725C25.6002 12.5 24.9001 12.5 23.5 12.5H16.5C15.0999 12.5 14.3998 12.5 13.865 12.7725C13.3946 13.0122 13.0122 13.3946 12.7725 13.865C12.5 14.3998 12.5 15.0999 12.5 16.5V23.5C12.5 24.9001 12.5 25.6002 12.7725 26.135C13.0122 26.6054 13.3946 26.9878 13.865 27.2275C14.3998 27.5 15.0999 27.5 16.5 27.5Z" stroke="#FB5D21" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>


                        <div className="flex flex-col gap-[5px]">
                            <p className="txt-18">Always Improving</p>
                            <span className="txt-2 text-[#818181]">Continuously learns from interactions and feedback to enhance performance and accuracy over time</span>
                        </div>
                    </div>
                    <div className="flex gap-[15px]">
                        <svg className="min-w-[40px]" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="40" height="40" rx="7" fill="#E9D4CD" />
                            <rect x="12.5" y="12.5" width="14" height="14" rx="1.5" stroke="#FB5D21" />
                            <path d="M25 19.25L23.9851 20.25L22.9695 19.25" fill="#818181" />
                            <path d="M19.5685 17V19.5L21.0914 20.5" fill="#818181" />
                            <path d="M25 19.25L23.9851 20.25L22.9695 19.25M24.1092 20C24.1276 19.8358 24.1371 19.669 24.1371 19.5C24.1371 17.0147 22.0917 15 19.5685 15C17.0454 15 15 17.0147 15 19.5C15 21.9853 17.0454 24 19.5685 24C21.0037 24 22.2843 23.3482 23.1218 22.3287M19.5685 17V19.5L21.0914 20.5" stroke="#FB5D21" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        <div className="flex flex-col gap-[5px]">
                            <p className="txt-18">Always Available</p>
                            <span className="txt-2 text-[#818181]">Provides round- the- clock support and task execution, ensuring your business never sleeps</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}