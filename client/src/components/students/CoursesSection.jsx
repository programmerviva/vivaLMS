import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import CourseCard from "./CourseCard";

const CoursesSection = () => {

  const {allCourses} = useContext(AppContext)

  return (
    <div className="py-16 md:px-40 px-8">
      <h2 className="text-3xl font-medium text-center text-gray-800">
        Learn from the Best Industry Experts
      </h2>

      <p className="text-sm md:text-base mt-3 text-center text-gray-500">
        Discover our curated collection of top-rated courses across diverse categories.
        
      </p>

      <div className="grid grid-cols-4 px-4 md:px-0 md:my-16 my-10 gap-4">
        {allCourses.slice(0, 4).map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>

      <div className="flex justify-center mt-3">
        <Link
          to={"/course-list"}
          onClick={() => scrollTo(0, 0)}
          className="text-gray-500 border border-gray-500/30 px-10 py-3 rounded"
        >
          Show all courses
        </Link>
      </div>
    </div>
  );
};

export default CoursesSection;
