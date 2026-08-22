import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import ProjectsShowcase from '@/components/home/ProjectsShowcase';
import Expertise from '@/components/home/Expertise';
import HowItWorks from '@/components/home/HowItWorks';
import Testimonials from '@/components/home/Testimonials';
import News from '@/components/home/News';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ProjectsShowcase />
      <Expertise />
      <HowItWorks />
      <Testimonials />
      <News />
    </>
  );
}
