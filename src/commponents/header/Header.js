
import { NavLink } from 'react-router-dom';
import './Header.css';
import BugrerMenu from './BurgerMenu';
import { useState } from 'react';


export default function Header() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleBurger = () => {
        setIsOpen(isOpen => (!isOpen))
    }

    return (
        <header className="header w-[1029px] py-[11px] pl-[35px] pr-[25px] flex justify-between items-center rounded-[10px]">
            <div className='flex gap-[60px] items-center'>
                <a href='#intro'>
                    <img src={`${process.env.PUBLIC_URL}/image/NeuroHiveAILK.png`} alt="NeuroLk" />
                </a>
                <nav className='nav-desktop'>
                    <ul className='flex gap-[40px]'>
                        <li><a href='#templates' className='txt-1 text-white'>Templates</a></li>
                        <li><a href='#cases' className='txt-1 text-white'>Use Cases</a></li>
                        <li><NavLink to='/' className='txt-1 text-white'>Contact</NavLink></li>
                        <li><NavLink to='/' className='txt-1 text-white'>Knowledge Hub</NavLink></li>
                    </ul>
                </nav>
            </div>
            <div className='flex gap-[40px] items-center desktop-head-right'>
                <select className='py-[4px] px-[8.5px] bg-[white] rounded-[5px] text-[11px]'>
                    <option className='text-[11px] font-semibold'>PL</option>
                </select>
                <button className='black-btn py-[12px] px-[54px]'>Try now</button>
            </div>
            <div className={`burger-menu-btn ${isOpen ? 'burger-close ' : ''}`} onClick={toggleBurger}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <BugrerMenu isOpen={isOpen} />
        </header>
    )
}
