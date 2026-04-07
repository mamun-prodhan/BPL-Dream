import React from 'react';

const Navbar = ({BplLogo, DollarImg, setCoin, coin}) => {
    return (
      <div className="navbar max-w-[1320px] w-full mx-auto mt-[50px] mb-[25px]">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">
            <img className='w-18.25 h-18' src={BplLogo} alt="bpl logo" />
          </a>
        </div>
        <div className="flex-none">
          <ul className='flex items-center gap-10'>
            <li><a href="#">Home</a></li>
            <li><a href="#">Fixture</a></li>
            <li><a href="#">Teams</a></li>
            <li><a href="#">Schedules</a></li>
            <li><a className='flex items-center gap-2 border border-[#131313]/20 p-2 rounded-lg font-semibold' href="#"><span>{coin}</span> Coin <img src={DollarImg} alt="" /></a></li>
          </ul>
        </div>
      </div>
    );
};

export default Navbar;