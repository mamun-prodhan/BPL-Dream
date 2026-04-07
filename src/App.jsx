import './App.css';
import BplLogo from './assets/logo.png';
import DollarImg from './assets/dollar-img.png';
import HeroBg from './assets/bg-shadow.png';
import HeroImg from './assets/banner-main.png'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers';
import { Suspense, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers';

function App() {
  const [coin, setCoin] = useState(0);
  const [displayPlayer, setDisplayPlayer] = useState(true);
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const playersPromise = fetch('../public/players.json')
                          .then(res => res.json());

  const claimFreeCredit=()=>{
    const newCoinBalance = coin + 100000;
    setCoin(newCoinBalance);
  }

  const toggleDisplayPlayer = (status)=>{
    setDisplayPlayer(status);
  }

  const saveLocalStorage = (data)=>{
    const stringifiedData = JSON.stringify(data);
    localStorage.setItem('selectedIds', stringifiedData);
  }

  const getLocalStorage = ()=>{
    const selectedIds = localStorage.getItem('selectedIds');
    return selectedIds? JSON.parse(selectedIds) : [];
  }

  const handleChoosePlayer = (id,biddingPrice)=>{

    const playersFromLocalStorage = getLocalStorage();
    const isValid = playersFromLocalStorage.find(playerId => playerId === id);

    if(coin <= 0 || coin < biddingPrice){
      alert('Claim free credit, insufficient balance');
      return;
    }
    if(playersFromLocalStorage.length === 6){
      alert('Six players already selected, Cannot select more');
      return;
    }
    if(!isValid){
      selectedPlayers.push(id);
      saveLocalStorage(selectedPlayers);
      alert('Successfully Selected');
    }
    else{
      alert('Already Selected');
    }



  }



  

  return (
    <>
      <Navbar BplLogo={BplLogo} DollarImg={DollarImg} coin={coin} setCoin={setCoin}/>
      <Banner HeroBg={HeroBg} HeroImg={HeroImg} claimFreeCredit={claimFreeCredit}/>
      {/* Players section */}
      <div className='max-w-[1320px] mt-8 w-full mx-auto'>
        <div className='flex items-center justify-between'>
          <h2 className='text-2xl font-bold text-[#131313]'>Available Players</h2>
          <ul className='flex items-center border border-[#131313]/10 rounded-xl'>
            <li onClick={()=> toggleDisplayPlayer(true)} className={`py-3 px-4 cursor-pointer  ${displayPlayer? 'bg-[#E7FE29] text-[#131313] font-bold' : 'text-[#131313]/60'} rounded-l-xl`}>Available</li>
            <li onClick={()=> toggleDisplayPlayer(false)} className={`p-3 px-4 ${!displayPlayer? 'bg-[#E7FE29] text-[#131313] font-bold' : 'text-[#131313]/60'} cursor-pointer rounded-r-xl`}>Selected (<span>0</span>)</li>
          </ul>
        </div>
      </div>

      {
        displayPlayer ?
        <div className='max-w-[1320px] mt-22 mb-50 w-full mx-auto'>
            <Suspense fallback={<p>Players Data Loading ...</p>}>
              <AvailablePlayers playersPromise={playersPromise} handleChoosePlayer={handleChoosePlayer}></AvailablePlayers>
            </Suspense>
        </div>:
        <div className='max-w-[1320px] mt-22 mb-50 w-full mx-auto'>
          <SelectedPlayers/>
            <Suspense fallback={<p>Players Data Loading ...</p>}>
              <SelectedPlayers playersPromise={playersPromise} getLocalStorage={getLocalStorage}></SelectedPlayers>
            </Suspense>
        </div>
      }
      
    </>
  )
}

export default App
