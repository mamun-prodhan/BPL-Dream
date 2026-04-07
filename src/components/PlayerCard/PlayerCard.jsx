import React from 'react';
import playerIcon from '../../assets/userName.png';
import flagIcon from '../../assets/flag-icon.png';
import Navbar from '../Navbar/Navbar';

const PlayerCard = ({player, handleChoosePlayer}) => {
    const {playerId, name, country, role, image, battingType, biddingPrice} = player;
    return (
        <div className="p-6 border border-[#131313]/10 rounded-xl">
            <figure>
                <img
                src={image}
                alt="Player Image"
                className="rounded-xl max-h-[215px] w-full object-cover" />
            </figure>
            <div className='mt-6'>
                <div className='flex items-center gap-3'>
                    <img src={playerIcon} alt="player icon" />
                    <h2 className='text-xl font-semibold'>{name}</h2>
                </div>
                <div className='flex items-center justify-between my-4'>
                    <div className='flex items-center gap-3'>
                        <img src={flagIcon} alt="flag icon" />
                        <p className='text-[#131313]/60 text-sm'>{country}</p>
                    </div>
                    <div className="text-sm font-normal py-2 px-4 rounded-lg bg-[#131313]/5">{role}</div>
                </div>
                <hr className='text-[#131313]/10 mb-4'/>
                <div>
                    <p className='text-md font-bold text-[#131313]'>Rating</p>
                </div>
                <div className='flex items-center justify-between my-4'>
                    <p className='text-md font-bold text-[#131313]'>Batting Type</p>
                    <p className='text-md font-thin'>{battingType}</p>
                </div>
                <div className='flex items-center justify-between'>
                    <p className='text-md font-bold text-[#131313]'>Price: $<span>{biddingPrice}</span></p>
                    <button onClick={()=>handleChoosePlayer(playerId, biddingPrice)} className="text-sm font-normal py-1 px-2 rounded-sm bg-[#131313]/5 border cursor-pointer border-[#131313]/10">Choose Player</button>
                </div>
            </div>
        </div>
    );
};

export default PlayerCard;