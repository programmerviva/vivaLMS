import Companies from "../../components/students/Companies"
import CoursesSection from "../../components/students/CoursesSection"
import Hero from "../../components/students/Hero"

function Home() {
  return (
    <div className="flex flex-col items-center space-y-7">
      <Hero/>
      <Companies />
      <CoursesSection />
    </div>
  )
}

export default Home