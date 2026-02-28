import { useState } from "react"
import { Button } from "@/components/ui/button"

const AboutSection = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <section id="about">
      <div className="max-w-3xl space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">About</h2>

        <p className="text-muted-foreground leading-relaxed">
          I enjoy solving technical challenges, improving system efficiency,
          and creating digital experiences that are clean, intuitive, and
          aligned with real business goals.
          
          <span
            className={`transition-all duration-300 ${
              isExpanded ? "inline" : "hidden"
            }`}
          >
            {" "}
            My background in IT infrastructure and cybersecurity allows me to
            approach development with both performance and security in mind.
          </span>
        </p>

        <Button
          variant="link"
          className="p-0 h-auto text-sm"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Show less" : "Read more"}
        </Button>
      </div>
    </section>
  )
}

export default AboutSection