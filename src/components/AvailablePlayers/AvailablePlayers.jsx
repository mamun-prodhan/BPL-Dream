import React, { use } from 'react';
import PlayerCard from '../PlayerCard/PlayerCard';

const AvailablePlayers = ({playersPromise, handleChoosePlayer}) => {

    const playersData = use(playersPromise);   
    console.log(playersPromise);
    return (
        <div className='grid grid-cols-3 gap-5'>
            {
                playersData.map((player, idx) => <PlayerCard player={player} handleChoosePlayer={handleChoosePlayer} key={idx}/>)
            }
        </div>
    );
};

export default AvailablePlayers;