import React from "react"
import { Badge } from "@/components/ui/badge"

const skills = [
  "Windows",
  "Linux",
  "Networking",
  "Troubleshooting",
  "Cybersecurity",
]

const SkillsSection = () => {
  return (
    <section id="skills">
      <div className="mx-auto max-w-3xl px-4 space-y-8">
        
        {/* Title */}
        <h2 className="text-3xl font-bold tracking-tight">
          Skills
        </h2>

        {/* Badge List */}
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <Badge
              key={index}
              variant="default"
              className="px-4 py-1 text-sm"
            >
              {skill}
            </Badge>
          ))}
        </div>

      </div>
    </section>
  )
}

export default SkillsSection