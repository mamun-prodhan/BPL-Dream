import './App.css';
import BplLogo from './assets/logo.png';
import DollarImg from './assets/dollar-img.png';
import HeroBg from './assets/bg-shadow.png';
import HeroImg from './assets/banner-main.png'

function App() {

  return (
    <>
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
            <li><a className='flex items-center gap-2 border border-[#131313]/20 p-2 rounded-lg font-semibold' href="#"><span>0</span> Coin <img src={DollarImg} alt="" /></a></li>
          </ul>
        </div>
      </div>

      {/* banner section */}

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
              <button className="btn shadow-none bg-[#E7FE29] font-bold text-sm rounded-lg">Claim Free Credit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
