
import plusSvg from './assets/plus.svg'
import minusSvg from './assets/minus.svg'

interface Props {
    question: string;
    onClick: () => void;
    active: boolean;
    sentence: string
}

function Accordion({ question, onClick, active, sentence }: Props) {

  return (
    <div className='w-full'>
        <div onClick={onClick} className='h-[80px] flex justify-between leading-5 items-center text-[14px] md:text-[16px] font-bold pr-4 pl-4'>
            <p className='w-[200px] sm:w-[100%]'>{question}</p>
            {active? (
            <div>
                <img 
                src={minusSvg} 
                alt="minus sign" />
            </div>) : (
            <div>
                <img 
                src={plusSvg} 
                alt="plus sign" />
            </div>
            )
            }
        </div>
        {active && 
        <div className='pl-4
         pr-4 
         font-medium 
         leading-[22px] 
         text-[#8c8989]
         text-[14px]
         md:text-[16px]
         pb-[20px]'>{sentence}</div>}
    </div>
  )
}

export default Accordion