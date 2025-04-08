import { createContext, useEffect, useState } from "react";
import React from "react";
import { jobsData } from "../data";
export const AppContext= createContext();
export const AppContextProvider =(props)=>{
    const [SearchFilter ,setSearchFilter]=useState({
        title:'',
        location:''
    })
    const [isSearched,SetIsSearched]=useState(false)
const [jobs,setjobs]=useState([])
const fetchjob=async()=>{
setjobs(jobsData)
}
useEffect(()=>{
fetchjob()
},[])
    const value={
SearchFilter,setSearchFilter,isSearched, SetIsSearched,
jobs,setjobs
    }
    return (<AppContext.Provider value={value}>
{props.children}
    </AppContext.Provider>)
}