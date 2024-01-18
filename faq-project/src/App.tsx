import Card from './Card'
import mobileBack from "./assets/mobile.svg"
import desktopBack from "./assets/desketop.svg"



const App: React.FC = () => {
 return (
  <div className="bg-[#d8bfd8] h-screen overflow-auto relative w-full font-work-sans">
    <div className="w-full">
     <img src={mobileBack} alt='the background photo' className='md:hidden' />
     <img src={desktopBack} alt='the background photo' className='hidden md:block' />
    </div>
    <Card />
  </div>
  )
}


export default App
