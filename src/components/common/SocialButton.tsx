import React from 'react';
interface SocialButtonProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  primary?: boolean;
  glass?: boolean;
  professional?: boolean;
}
const SocialButton: React.FC<SocialButtonProps> = ({
  icon,
  label,
  href,
  primary = false,
  glass = false,
  professional = false
}) => {
  return <a href={href} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-2 py-2 px-4 rounded-md transition-all duration-300 ${primary ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 shadow-lg hover:shadow-blue-500/25' : professional ? 'bg-white/10 backdrop-blur-sm text-white border border-blue-500/30 hover:bg-blue-800/20' : glass ? 'bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20' : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'}`}>
      {icon}
      <span>{label}</span>
    </a>;
};
export default SocialButton;