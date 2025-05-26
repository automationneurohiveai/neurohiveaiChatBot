
import { NavLink } from 'react-router-dom';
import './Header.css';


export default function Header() {

    return (
        <header className="header w-[1029px] py-[11px] pl-[35px] pr-[25px] flex justify-between items-center rounded-[10px]">
            <div className='flex gap-[60px] items-center'>
                <img src={`${process.env.PUBLIC_URL}/image/NeuroHiveAILK.png`} alt="NeuroLk" />
                <nav>
                    <ul className='flex gap-[40px]'>
                        <li><NavLink to='/' className='txt-1 text-white'>Templates</NavLink></li>
                        <li><NavLink to='/' className='txt-1 text-white'>Use Cases</NavLink></li>
                        <li><NavLink to='/' className='txt-1 text-white'>Contact</NavLink></li>
                        <li><NavLink to='/' className='txt-1 text-white'>Knowledge Hub</NavLink></li>
                    </ul>
                </nav>
            </div>
            <select className='py-[4px] px-[8.5px] bg-[white] rounded-[5px] text-[11px]'>
                <option className='text-[11px] font-semibold'>PL</option>
            </select>
            <button className='black-btn py-[12px] px-[54px]'>Try now</button>
        </header>
    )
}
