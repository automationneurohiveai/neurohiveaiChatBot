import './BurgerMenu.css';
import { NavLink } from 'react-router-dom';

export default function BugrerMenu({ isOpen, onSectionClick, onLogoClick }) {

    return (
        <div className={`burger-menu ${isOpen ? 'burger-menu-active' : ''}`}>
            <select className='py-[4px] px-[8.5px] bg-[white] rounded-[5px] text-[11px] w-fit'>
                <option className='text-[11px] font-semibold'>PL</option>
            </select>

            <nav>
                <ul className='flex gap-[40px]'>
                    <li>
                        <button 
                            onClick={() => onSectionClick('templates')} 
                            className='txt-1 text-white cursor-pointer bg-transparent border-none'
                        >
                            Templates
                        </button>
                    </li>
                    <li>
                        <button 
                            onClick={() => onSectionClick('cases')} 
                            className='txt-1 text-white cursor-pointer bg-transparent border-none'
                        >
                            Use Cases
                        </button>
                    </li>
                    <li><NavLink to='/consultation' className='txt-1 text-white'>Contact</NavLink></li>
                    <li><NavLink to='/' className='txt-1 text-white'>Knowledge Hub</NavLink></li>
                </ul>
            </nav>

            <button className='black-btn py-[12px] px-[54px]'>Try now</button>
        </div>
    )
}