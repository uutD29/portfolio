import HeroSection from './components/sections/HeroSection'
import AboutSection from './components/sections/AboutSection'
import Footer from './components/sections/Footer'
import { Container } from './components/Container'
import ExperienceSection from './components/sections/ExperienceSection'
import SkillsSection from './components/sections/SkillsSection'
import ProjectsSection from './components/sections/ProjectsSection'
import ContactSection from './components/sections/ContactSection'
import { Certificates } from './components/sections/Certification-timeline'


function App() {
  return (
    <Container>
      <main className="space-y-12">
        <HeroSection />
        <SkillsSection/>
        <AboutSection />
        <ExperienceSection />
        <Certificates/>
        <ProjectsSection />
        <ContactSection/>
      </main>
      <Footer />
    </Container>
  )
}

export default App