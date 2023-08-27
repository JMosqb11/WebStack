import React from "react";
import Link from "next/link";
import { DevToLogo } from "@phosphor-icons/react";

const Nav = () => {
  return (
    <section className="w-[100%] md:w-[100%] h-[60px] flex items-center justify-evenly my-2 mt-3 gap-3 md:gap-0 ">
      <div className="bg-found-section w-[80%] h-[60px] text-white rounded-[20px] flex items-center justify-around ml-3 md:ml-0">
        <div>
          <Link href="/" className="font-bold text-[26px] text-button-small">
            JM
          </Link>
        </div>

        <div className="py-3 px-3 flex items-center justify-between">
          <DevToLogo size={32} className="text-AAAA"/>
        </div>
      </div>

      <div>
        <a
          className="bg-button-small text-white px-5 py-3 rounded-[30px] mr-3 md:mr-0"
          href="https://drive.google.com/file/d/1ZWkcGMPeMBt2ZdfhKPBgmORo86T2Q_5d/view?usp=sharing"
          download
        >
          CV/HV
        </a>
      </div>
    </section>
  );
};

export default Nav;
