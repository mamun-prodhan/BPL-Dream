import React from 'react';

const Banner = ({HeroBg, HeroImg, claimFreeCredit}) => {
    return (
      <div
        className="hero py-16 bg-[#131313]  max-w-[1320px] w-full mx-auto rounded-2xl"
        style={{
          backgroundImage:
            `url(${HeroBg})`,
        }}
      >
        <div className="hero-content text-neutral-content text-center">
          <div className="space-y-5">
            <img className='mx-auto' src={HeroImg} alt="Banner Image" />
            <h1 className="text-4xl font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h1>
            <p className="text-xl font-medium">
              Beyond Boundaries Beyond Limits
            </p>
            <div className='border border-[#E7FE29] inline-block p-2 rounded-lg'>
              <button onClick={claimFreeCredit} className="btn shadow-none bg-[#E7FE29] font-bold text-sm rounded-lg">Claim Free Credit</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;