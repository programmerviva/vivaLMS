/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
 
import { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";

export const AppContext = createContext();

export const AppContextProvider = (props)=> {

  const curreny = import.meta.env.VITE_CURRENCY

  const [allCourses, setAllCourses ] = useState([])

  // fetch all courses
  const fetchAllCourses = async () => {
    setAllCourses(dummyCourses)
  }

   useEffect(()=>{
    fetchAllCourses()
   },[])

  const value = {
    curreny,
    allCourses,
  }

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  )
}