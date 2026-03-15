import HeroSection from './components/sections/HeroSection'
import AboutSection from './components/sections/AboutSection'
import Footer from './components/sections/Footer'
import { Container } from './components/Container'
import ExperienceSection from './components/sections/ExperienceSection'
import ProjectsSection from './components/sections/ProjectsSection'
import { Certificates } from './components/sections/Certification-timeline'


function App() {
  return (
    <Container>
      <main className="space-y-12">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <Certificates/>
        <ProjectsSection />
      </main>
      <Footer />
    </Container>
  )
}

export default App