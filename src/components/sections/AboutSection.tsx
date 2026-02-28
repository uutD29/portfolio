import { useState } from "react"

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
          
          {!isExpanded && "... "}

          <span
            className={`transition-opacity duration-300 ${
              isExpanded ? "inline opacity-100" : "hidden opacity-0"
            }`}
          >
            {" "}
            My background in IT infrastructure and cybersecurity allows me to
            approach development with both performance and security in mind.
          </span>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="ml-1 font-medium text-foreground hover:underline focus:outline-none"
          >
            {isExpanded ? "Show less" : "Read more"}
          </button>
        </p>
      </div>
    </section>
  )
}

export default AboutSection