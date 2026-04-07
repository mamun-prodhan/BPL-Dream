import React, { use } from 'react';

const SelectedPlayers = ({playersPromise, getLocalStorage}) => {
    const playersData = use(playersPromise);
    const storedData = getLocalStorage();
    const storedPlayers = playersData.filter(player =>{
        storedData.includes(player.playerId)
    });
    console.log(storedPlayers);
    return (
        <div className='grid grid-cols-1 gap-5'>
            {

            }
            <div className='flex items-center justify-between p-6 border border-[#131313]/10 rounded-xl'>
                <div className='flex items-center gap-3'>
                    <div>photo</div>
                    <div>
                        <p>name</p>
                        <p>Batting Type</p>
                    </div>
                </div>
                <div>Action</div>
            </div>
        </div>
    );
};

export default SelectedPlayers;