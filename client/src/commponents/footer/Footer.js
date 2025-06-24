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
          <div className="flex justify-between flex-grow mob:flex-col mob:gap-[30px] mob:mt-[30px] items-center">
            <div className="flex gap-[116px] mob:gap-[60px] mob:justify-center">
              <ul className="flex flex-col gap-[15px]">
                <li className="txt-18">
                  <NavLink to={"/cases"}>Use Cases</NavLink>
                </li>
                <li className="txt-18">
                  <NavLink to={"/articles"}>Templates</NavLink>
                </li>
                <li className="txt-18">
                  <NavLink to={"/consultation"}>Contact</NavLink>
                </li>
                <li className="txt-18 mob:hidden">
                  <NavLink to={"/articles"}>Knowledge Hub</NavLink>
                </li>
              </ul>
              <ul className="flex flex-col gap-[15px]">
                <li className="txt-18">
                  <a
                    href="https://linkedin.com/company/neurohive-ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition-colors duration-300"
                  >
                    LinkedIn
                  </a>
                </li>
                <li className="txt-18">
                  <a
                    href="https://facebook.com/neurohiveai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition-colors duration-300"
                  >
                    Facebook
                  </a>
                </li>
                <li className="txt-18">
                  <a
                    href="https://instagram.com/neurohiveai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition-colors duration-300"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
              <ul className="flex flex-col gap-[15px] mob:hidden">
                <li className="txt-18">
                  ul. Prosta 70, 00-838 Warszawa, Polska
                </li>
                <li className="txt-18">+48 509 980 939</li>
                <li className="txt-18">
                  <a href="mailto:biuro@neurohiveai.io">biuro@neurohiveai.io</a>
                </li>
              </ul>
            </div>

            <div className="mob:text-center mob:mt-[20px] hidden mob:block">
              <p className="txt-18 text-white mb-2">Warsaw, Poland</p>
              <p className="txt-18 text-white">+48 509 980 939</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between mob:flex-col-reverse mob:text-center items-center gap-2 mob:gap-3">
          <p className="txt-caption text-[#818181] mob:order-2">
            © 2025 NeuroHive AI. All rights reserved.
          </p>
          <div className="txt-caption text-[#818181] mob:order-1 mob:text-sm flex gap-2 mob:flex-col">
            <NavLink
              to="/privacy-policy"
              className="hover:text-blue-400 transition-colors duration-300 underline-offset-2 hover:underline"
            >
              Privacy Policy
            </NavLink>
            <span className="mob:hidden">|</span>
            <NavLink
              to="/terms"
              className="hover:text-blue-400 transition-colors duration-300 underline-offset-2 hover:underline"
            >
              Terms of Service
            </NavLink>
            <span className="mob:hidden">|</span>
            <NavLink
              to="/cookie-policy"
              className="hover:text-blue-400 transition-colors duration-300 underline-offset-2 hover:underline"
            >
              Cookie Policy
            </NavLink>
            <span className="mob:hidden">|</span>
            <NavLink
              to="/company-info"
              className="hover:text-blue-400 transition-colors duration-300 underline-offset-2 hover:underline"
            >
              Company Info
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
