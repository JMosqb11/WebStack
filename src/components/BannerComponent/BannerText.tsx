import { ArrowCircleUpRight, GithubLogo, InstagramLogo, LinkedinLogo, X } from '@phosphor-icons/react'
import Link from 'next/link';
import React from 'react'
import style from "../../styles/bannerImage.module.css";
import Image from "next/image";


const BannerText = () => {
  return (
    <>
      <div className="bg-found-section w-[90%] md:w-[91%] md:h-[485px] flex flex-col-reverse md:flex-row items-center md:justify-between mt-3 rounded-[20px]">
        <article className="text-white flex flex-col items-start ml-5 md:ml-10 mt-5 mb-5 gap-5 justify-evenly">
          <div>
            <div>
              <p className="text-3xl md:text-7xl">Hola, Soy Jhonier🫡</p>
              <p className="text-2xl md:text-4xl text-FFF">
                Desarrollador FrontEnd
              </p>
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-3 md:gap-0">
              <p className="text-lg">
                Apasionado por crear experiencias unicas, innovadoras y
                funcionales.✨
              </p>
              <p className="text-base">
                Enterate de mis habilidades tecnologicas 🎒
              </p>
              <p className="text-lg">
                ¡Conécta conmigo en Linkedin y exploremos oportunidades
                unicas!🚀
              </p>
            </div>
          </div>

          <div className="flex md:items-end md:gap-[25px] flex-col-reverse md:flex-row-reverse">
            <div className="w-[320px] md:w-[200px] h-12 bg-cositasQuePasan rounded-[100px] mt-10 flex items-center justify-evenly">
              <a
                href="https://linkedin.com/in/jhonierdev"
                aria-label="Linkedin"
                target="_blank"
                rel="noopener"
              >
                <LinkedinLogo size={28} />
              </a>
              <a
                href="https://github.com/JMosqb11"
                aria-label="GitHub"
                target="_blank"
                rel="noopener"
              >
                <GithubLogo size={28} />
              </a>
              <a
                href="https://instagram.com/jmosqb11/"
                aria-label="Instagram"
                target="_blank"
                rel="noopener"
              >
                <InstagramLogo size={28} />
              </a>
              <a
                href="https://x.com/Jmosqb11"
                aria-label="X"
                target="_blank"
                rel="noopener"
              >
                <X size={28} />
              </a>
            </div>

            <div>
              <Link
                href="/skill"
                className="w-[320px] md:w-[200px] h-12 bg-AAAA text-black rounded-[100px] mt-5 flex items-center justify-center flex-wrap"
              >
                habilidades <ArrowCircleUpRight size={28} />
              </Link>
            </div>
          </div>
        </article>
        <article className="m-4 md:m-10">
          <div>
            <Image
              src="https://res.cloudinary.com/dk9ktxdpj/image/upload/v1691068761/Jhonier-Mosquera-_15_nu7idi.jpg"
              alt="Me"
              width={1000}
              height={0}
              className={style.imegePersonal}
              priority
            />
          </div>
        </article>
      </div>
    </>
  );
}

export default BannerText