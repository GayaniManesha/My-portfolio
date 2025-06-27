import React from 'react';
interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  light?: boolean;
}
const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  light = false
}) => {
  return <div className="text-center mb-12">
      <h2 className={`text-3xl md:text-4xl font-bold mb-2 ${light ? 'text-white' : 'text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-600'}`}>
        {title}
      </h2>
      {subtitle && <p className={`text-lg ${light ? 'text-blue-100' : 'text-gray-600'}`}>
          {subtitle}
        </p>}
      <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mt-4"></div>
    </div>;
};
export default SectionHeader;