interface SkillIconProps {
  src: string;
  alt: string;
  title: string;
}

export default function SkillIcon({ src, alt, title }: SkillIconProps) {
  return <img src={src} alt={alt} title={title} className="skill-icon" />;
}