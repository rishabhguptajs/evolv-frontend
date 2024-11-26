import React from 'react'

interface CurvedDottedBorderProps {
  variant: 'purple' | 'blue' | 'green' | 'orange';
  width?: number;
  height?: number;
  borderRadius?: string; 
  animationDuration?: string; 
  animationDelay?: string; 
}

const gradientMap = {
  purple: 'from-purple-400/40 via-pink-500/30 to-purple-600/40',
  blue: 'from-blue-400/40 via-cyan-500/30 to-blue-600/40',
  green: 'from-green-400/40 via-emerald-500/30 to-green-600/40',
  orange: 'from-orange-400/40 via-red-500/30 to-orange-600/40'
}

const CurvedDottedBorder: React.FC<CurvedDottedBorderProps> = ({ 
  variant = 'blue',
  width = 500,
  height = 300,
  borderRadius = '60% 40% 30% 70% / 60% 30% 70% 40%',
  animationDuration = '8s',
  animationDelay = '0s'
}) => {
  return (
    <div 
      className="relative"
      style={{
        width: `${width}px`,
        height: `${height}px`
      }}
    >
      <div 
        className={`absolute inset-0 rounded-[${borderRadius}] bg-gradient-to-br ${gradientMap[variant]} blur-md`}
        style={{
          animation: `morph ${animationDuration} ease-in-out infinite ${animationDelay}`
        }}
      />

      <div
        className={`absolute inset-4 rounded-[${borderRadius}] bg-gradient-to-br ${gradientMap[variant]} opacity-40 blur-sm`}
        style={{
          animation: `morph ${animationDuration} ease-in-out infinite reverse ${animationDelay}`
        }}
      />

      <style jsx>{`
        @keyframes morph {
          0% {
            border-radius: ${borderRadius};
          }
          50% {
            border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
          }
          100% {
            border-radius: ${borderRadius};
          }
        }
      `}</style>
    </div>
  )
}

export default CurvedDottedBorder
