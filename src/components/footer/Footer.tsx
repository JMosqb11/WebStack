import React from 'react'

const Footer = () => {
  return (
    <>
      <section className="w-[100%] md:w-[100%] h-[60px] flex items-center justify-evenly mt-3 mb-3 gap-3 md:gap-0 ">
        <div className="w-[93%] h-[60px] text-white rounded-[20px] flex items-center justify-around ml-3 md:ml-0">
          <p className='text-white'>&copy; 2023 Jhonier</p>
        </div>
      </section>
    </>
  );
}

export default Footer