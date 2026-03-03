import { Badge } from "@/components/ui/badge";

const skills = [
  "Windows",
  "Linux",
  "Networking",
  "Troubleshooting",
  "Cybersecurity",
];

const SkillsSection = () => {
  return (
    <section id="skills">
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <Badge key={index} variant="default" className="px-4 py-1 text-sm">
            {skill}
          </Badge>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
