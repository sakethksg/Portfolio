import AboutPreview from "@/components/home/AboutPreview"
import FeaturedProjects from "@/components/home/FeaturedProjects"
import Intro from "@/components/home/Intro"
import DitherBackground from "@/components/DitherBackground"

const page = () => {
  return (
    <main className="flex-grow relative">
      {/* Background Dither Effect */}
      {/* <DitherBackground /> */}
      
      {/* Content */}
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="flex flex-col min-h-screen">
          <Intro />
          <AboutPreview />
          <FeaturedProjects />
        </div>
      </div>
    </main>
  )
}

export default page
