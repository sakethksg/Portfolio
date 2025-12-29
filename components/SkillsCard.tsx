import React from 'react';
import { Badge } from './ui/badge';
import { LucideIcon } from 'lucide-react';

type SkillsCardProps = {
    icon: LucideIcon;
    title: string;  
    skills: string[];
};

const SkillsCard = ({ title, icon: Icon, skills }: SkillsCardProps) => {
  return (
    <div className='rounded-xl border border-border/40 bg-white/50 dark:bg-neutral-950/50 backdrop-blur-xl shadow-[0_0_12px_rgba(34,42,53,0.04),0_1px_1px_rgba(0,0,0,0.03),0_0_0_1px_rgba(34,42,53,0.02)] p-6 hover:shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05)] hover:bg-white/60 dark:hover:bg-neutral-950/60 transition-all duration-300'>
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-primary/10">
          <Icon className='w-6 h-6' />
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <div className='flex flex-wrap gap-2'>
        {skills.map((skill, index) => (
          <Badge key={index} variant="outline" className="px-3 py-1">
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  )
}

export default SkillsCard
