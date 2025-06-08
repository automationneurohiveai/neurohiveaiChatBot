import { NavLink } from "react-router-dom";
import "./Footer.css";
import { useForm } from "react-hook-form";
import { usePostEmailFooter } from "../../server/usePostEmailFooter";

export default function Footer() {


  return (
    <footer className="footer pt-[50px] pb-[25px] bg-black">
      <div className="section flex flex-col gap-[30px]">
        <div className="flex justify-between gap-[290px] mob:flex-col mob:gap-0">
          <div className="flex flex-col gap-[10px] mob:items-center">
            <h2 className="subtitle-1 text-linear">NeuroHive AI</h2>
            <p className="max-w-[200px] subtitle-16 text-[#818181] mob:text-center">
              AI automation for SMBs, recruiters & HR teams.
            </p>
          </div>
          <div className="flex justify-between flex-grow mob:flex-col mob:gap-[40px] mob:mt-[50px] items-center">
            <div className="flex gap-[116px] mob:gap-[70px]">
              <ul className="flex flex-col gap-[15px]">
                <li className="txt-18">
                  <NavLink to={"/"}>Use Cases</NavLink>
                </li>
                <li className="txt-18">
                  <NavLink to={"/"}>Templates</NavLink>
                </li>
                <li className="txt-18">
                  <NavLink to={"/"}>Contact</NavLink>
                </li>
                <li className="txt-18">
                  <NavLink to={"/"}>Knowledge Hub</NavLink>
                </li>
              </ul>
              <ul className="flex flex-col gap-[15px]">
                <li className="txt-18">
                  <NavLink>LinkedIn</NavLink>
                </li>
                <li className="txt-18">
                  <NavLink>Facebook</NavLink>
                </li>
                <li className="txt-18">
                  <NavLink>Instagram</NavLink>
                </li>
              </ul>
            </div>
            <div>
              <ul className="flex flex-col gap-[15px]">
                <li className="txt-18">Warsaw, Poland</li>
                <li className="txt-18">+1 (415) 555-0123</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-between mob:flex-col-reverse items-center gap-2">
          <p className="txt-caption text-[#818181]">
            © 2025 NeuroHive AI. All rights reserved.
          </p>
          <p className="txt-caption text-[#818181]">
            Privacy Policy | Terms of Service | Cookie Policy
          </p>
        </div>
      </div>
    </footer>
  );
}
