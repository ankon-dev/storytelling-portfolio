import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProjectShowcase } from "@/components/project-showcase"
import { EnhancedFeatures } from "@/components/enhanced-features"
import { StatsSection } from "@/components/stats-section"
import { Testimonials } from "@/components/testimonials"
import { ContactSection } from "@/components/contact-section"
import { Navigation } from "@/components/navigation"
import { ChatBot } from "@/components/chatbot"
import { FloatingElements } from "@/components/floating-elements"
import { AdvancedAnimations, ParticleSystem } from "@/components/advanced-animations"
import { NewPortfolioFeatures, InteractiveSkillsCloud } from "@/components/new-portfolio-features"
import { EducationSection } from "@/components/education-section"
import { ExperienceSection } from "@/components/experience-section"
import { Footer } from "@/components/footer"
import { ResearchSection } from "@/components/research-section"
import { ThreeDAnimations } from "@/components/3d-animations"
import { PortfolioFeatures } from "@/components/portfolio-features"
import { BlogSection } from "@/components/blog-section"
import { ServicesSection } from "@/components/services-section"
import { AdditionalFeatures } from "@/components/additional-features"
import { ProfessionalAnimationWrapper } from "@/components/professional-section-animations"

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <ThreeDAnimations />
      <ParticleSystem />
      <AdvancedAnimations />
      <FloatingElements />
      <Navigation />
      <HeroSection />

      <ProfessionalAnimationWrapper animationType="lift">
        <AboutSection />
      </ProfessionalAnimationWrapper>

      <ProfessionalAnimationWrapper animationType="fade">
        <EducationSection />
      </ProfessionalAnimationWrapper>

      <ProfessionalAnimationWrapper animationType="slide">
        <ExperienceSection />
      </ProfessionalAnimationWrapper>

      <ProfessionalAnimationWrapper animationType="scale">
        <ProjectShowcase />
      </ProfessionalAnimationWrapper>

      <ProfessionalAnimationWrapper animationType="rotate">
        <ResearchSection />
      </ProfessionalAnimationWrapper>

      <ProfessionalAnimationWrapper animationType="float">
        <ServicesSection />
      </ProfessionalAnimationWrapper>

      <ProfessionalAnimationWrapper animationType="lift">
        <EnhancedFeatures />
      </ProfessionalAnimationWrapper>

      <ProfessionalAnimationWrapper animationType="fade">
        <PortfolioFeatures />
      </ProfessionalAnimationWrapper>

      <ProfessionalAnimationWrapper animationType="slide">
        <NewPortfolioFeatures />
      </ProfessionalAnimationWrapper>

      <ProfessionalAnimationWrapper animationType="scale">
        <InteractiveSkillsCloud />
      </ProfessionalAnimationWrapper>

      <ProfessionalAnimationWrapper animationType="rotate">
        <BlogSection />
      </ProfessionalAnimationWrapper>

      <ProfessionalAnimationWrapper animationType="float">
        <StatsSection />
      </ProfessionalAnimationWrapper>

      <ProfessionalAnimationWrapper animationType="lift">
        <Testimonials />
      </ProfessionalAnimationWrapper>

      <ProfessionalAnimationWrapper animationType="fade">
        <AdditionalFeatures />
      </ProfessionalAnimationWrapper>

      <ProfessionalAnimationWrapper animationType="slide">
        <ContactSection />
      </ProfessionalAnimationWrapper>

      <Footer />
      <ChatBot />
    </main>
  )
}
