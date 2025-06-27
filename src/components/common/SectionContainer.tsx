import React from 'react';
interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  gradient?: boolean;
  dark?: boolean;
}
const SectionContainer: React.FC<SectionContainerProps> = ({
  children,
  className = '',
  gradient = false,
  dark = false
}) => {
  return <section className={`w-full py-20 relative ${gradient ? 'bg-gradient-to-br from-gray-50 via-white to-blue-50' : dark ? 'bg-gradient-to-br from-gray-900 to-blue-900 text-white' : 'bg-white'} ${className}`}>
      {gradient && <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {children}
      </div>
    </section>;
};
export default SectionContainer;