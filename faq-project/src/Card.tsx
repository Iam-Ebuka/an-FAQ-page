import React, {useState} from 'react'
import starSvg from './assets/star.svg'
import Accordion from './Accordion'

const q1 = 'What is Frontend Mentor, and how will it help me?';
const q2 = 'Is Frontend Mentor free?';
const q3 = 'Can I use Frontend Mentor projects in my portfolio?'
const q4 = 'How can I get help if I\'m stuck on a challenge?';
const content1 = 'Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It\'s suitable for all levels and ideal for portfolio building.';
const content2 = "Yes you can use it free but there is a premium part of the app in which you have to pay. You get additional features like the figma file of the UI/UX.";
const content3 = "You can use Frontend Mentor projects in your portfolio";
const content4 = "Join the discord channel, there is a Frontend Mentor community there who will be happy to assist you paradventure you need any assistance";

const Card: React.FC = () => {
    const [activeAccordion, setActiveAccordion] = useState<number | null>(null)
    const handleClick = (index: number) => {
        setActiveAccordion((activeAccordion === index? null : index))
    }


    
  return (
    <div className='
    w-[85%] 
    container
    rounded-lg
    bg-white
    absolute 
    top-[18%] 
    left-[50%] 
    transform 
    translate-x-[-50%] 
    translate-y-[50%]] 
    max-w-[600px]
    '>
        <div className='h-[50px] flex items-center mt-[20px]'>
            <span className='ml-[15px]'>
                <img className='inline-block w-[20px] font-sans md:w-[30px]' src={starSvg} alt='star Icon' />
            </span>
            <h1 className='inline-block text-[30px] font-[900] ml-[20px]'>FAQs</h1>
        </div>
        <Accordion 
        question={`${q1}`} 
        onClick={() => handleClick(1)} 
        active={activeAccordion === 1} 
        sentence={content1} />
         <Accordion 
        question={`${q2}`} 
        onClick={() => handleClick(2)} 
        active={activeAccordion === 2}  
        sentence={content2} />
         <Accordion 
        question={`${q3}`} 
        onClick={() => handleClick(3)} 
        active={activeAccordion === 3} 
        sentence={content3} />
         <Accordion 
        question={`${q4}`} 
        onClick={() => handleClick(4)} 
        active={activeAccordion === 4} 
        sentence={content4} />
    </div>
  )
}

export default Card