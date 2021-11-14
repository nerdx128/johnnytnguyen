import React from "react";
import EducationCard from "../components/Experience/EducationCard";
import { EducationData } from "../components/Experience/Education-data"
import EducationAccordion from "../components/Experience/EducationAccordion";

const mExperience = () =>{
    return (
        <section id="experience" className='flex flex-col bg-main bg-gray-400 w-full h-screen'>
            <h2 className="mt-6 pl-16">My Edumahcation Mobile</h2>
            <div className="h-32 p-6 ml-9 flex flex-col">
                 <EducationAccordion schools={EducationData}/>
            </div>
            {/*<div className="w-full h-full p-8 ml-9 flex flex-row">
                {EducationData.map((school, index) => {
                    return <EducationCard key={index} school={school}/>
                })}
            </div>*/}
        </section>
    );
}
export default mExperience;
