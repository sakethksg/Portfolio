import AboutPreview from "@/components/home/AboutPreview"
import FeaturedProjects from "@/components/home/FeaturedProjects"
import Intro from "@/components/home/Intro"

const page = () => {
  return (
    <main className="flex-grow relative w-full">
      {/* Content */}
      <div className="container mx-auto px-4 pt-16 pb-8 relative z-10">
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
