import React from 'react'

interface MainCardProps {
  text: string;
  color: string;
  textColor: string;
  description: string;
}

const MainCard: React.FC<MainCardProps> = ({ text, color, textColor, description }) => {
  return (
    <div className={`
      flex flex-col items-center justify-center
      w-64 h-64 rounded-3xl
      bg-[${color}-500]/80 backdrop-blur-sm
      text-[${textColor}-500]
      shadow-lg shadow-[${color}-500]/50
      transform hover:scale-105 transition-all duration-300
      cursor-pointer
      border-2 border-[${color}-400]/30
    `}>
      <p className="text-4xl font-bold mb-2 text-center">{text}</p>
      <p className="text-md text-center px-4 opacity-80">
        {description}
      </p>
    </div>
  )
}

export default MainCard
