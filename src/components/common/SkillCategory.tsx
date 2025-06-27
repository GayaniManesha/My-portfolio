import React from 'react';
interface Skill {
  name: string;
  level: number;
}
interface Category {
  id: number;
  title: string;
  icon?: string;
  skills: Skill[];
}
interface SkillCategoryProps {
  category: Category;
}
const SkillCategory: React.FC<SkillCategoryProps> = ({
  category
}) => {
  return <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
      <div className="flex items-center mb-6">
        {category.icon && <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-xl mr-4 shadow-sm">
            {category.icon}
          </div>}
        <h3 className="text-2xl font-semibold text-gray-800">
          {category.title}
        </h3>
      </div>
      <div className="space-y-6">
        {category.skills.map((skill, index) => <div key={index}>
            <div className="flex justify-between mb-2">
              <span className="text-gray-700 font-medium">{skill.name}</span>
              <span className="text-blue-600 font-medium">{skill.level}%</span>
            </div>
            <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 relative" style={{
            width: `${skill.level}%`
          }}>
                <div className="absolute inset-0 bg-white/20 bg-shimmer-effect"></div>
              </div>
            </div>
            <div className="mt-1 flex">
              {[...Array(5)].map((_, i) => {
            const filled = Math.round(skill.level / 20) > i;
            return <div key={i} className={`h-1 flex-1 mx-0.5 rounded-full ${filled ? 'bg-blue-600/70' : 'bg-gray-200'}`}></div>;
          })}
            </div>
          </div>)}
      </div>
    </div>;
};
export default SkillCategory;