import React, { useState, useRef } from 'react';
import profilePic from "../Assets/avatar.jpg"
import { FaMapMarkerAlt } from "react-icons/fa";
import { PiBriefcaseBold } from "react-icons/pi";
import { LuPencil } from "react-icons/lu";
import { FaPlus } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import EditModal from './edit';
import EditExperienceModal from './EditExp';
import EditCertificationModal from './EditCerti';
import EditEducationModal from './EditEdu';
import { AnimatePresence } from "framer-motion";


const Profile = () => {
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const certRef = useRef(null);
  const educationRef = useRef(null);
  const resumeRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const [aboutText, setAboutText] = useState("Highly skilled and motivated under-graduate Computer Science student . Experienced in analyzing and solving complex problems, resulting in significant improvements in software performance and user satisfaction. Collaborative team player with a strong commitment to agile methodologies and process optimization.");
  const [isEditingAbout, setIsEditingAbout] = useState(false);
  const [skills, setSkills] = useState(["JavaScript", "React", "SpringBoot"]);
  const [isEditingSkills, setIsEditingSkills] = useState(false);
  const [skillInput, setSkillInput] = useState(skills.join(", "));
  const [experience, setExperience] = useState([
    {
      id: 1,
      title: "Software Engineer",
      company: "Google",
      duration: "Jan 2022 - Present",
    },
  ]);
  const [editingExp, setEditingExp] = useState(null);
  const [certifications, setCertifications] = useState([
    {
      id: 1,
      name: "Web Developer Certification",
      authority: "Microsoft",
      date: "March 2024",
    },
  ]);
  const [editingEdu, setEditingEdu] = useState(null);
  const [education, setEducation] = useState([
    {
      id: 1,
      degree: "X",
      institution: "Senior Secondary School",
      year: "85% , 2019",
    },
    {
      id: 2,
      degree: "XII",
      institution: "Senior Secondary School",
      year: "88% , 2021",
    },
    {
      id: 3,
      degree: "B.Tech in Computer Science",
      institution: "ABC University",
      year: "8.64cgpa , 2021 - 2025",
    },
  ]);

  const [editingCert, setEditingCert] = useState(null);
  const handleAddExperience = () => {
    setExperience(prev => [
      ...prev,
      {
        id: Date.now(),
        title: "New Experience",
        company: "Company Name",
        duration: "Duration",
      },
    ]);
  };
  const handleDeleteExperience = (index) => {
    const updated = [...experience];
    updated.splice(index, 1);
    setExperience(updated);
  };
  const handleAddCertification = () => {
    setCertifications(prev => [
      ...prev,
      {
        id: Date.now(),
        name: "New Certification",
        authority: "Authority",
        date: "Date",
      },
    ]);
  };
  const handleDeleteCertification = (index) => {
    const updated = [...certifications];
    updated.splice(index, 1);
    setCertifications(updated);
  };
  const [resume, setResume] = useState(null);
  const handleResumeChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setResume(file);
    }
  };
  const handleDeleteResume = () => {
    setResume(null);
  };


  return (
    <div >
      <div className='w-full  md:w-3/5 lg:w-4/5 mx-auto mt-15'>
        <div className='relative'>
          <img className='h-65 w-300 mt-2  rounded-t-2xl md:ml-4 '
            src='https://t3.ftcdn.net/jpg/03/16/91/28/360_F_316912806_RCeHVmUx5LuBMi7MKYTY5arkE4I0DcpU.jpg'
            alt='Technology Banner' />
          <img className='h-58 w-58 rounded-full -bottom-1/3 absolute left-8 border-mine-shaft-950 border-8 '
            src={profilePic} alt='Profile' />
        </div>
        <div className='px-8 mt-22 text-black'>
          <div className='text-3xl font-bold flex justify-between'>PRANITA GUPTA
            <button >
              <LuPencil className="w-5 h-5 hover:text-blue-500" />
            </button>
          </div>
          <div className='text-xl flex gap-1 items-center '>
            <PiBriefcaseBold className='h-5 w-5' stroke={1.5} />Software Engineer &bull; Google
          </div>
          <div className='text-lg flex gap-1 items-center '>
            <FaMapMarkerAlt className='h-5 w-5' stroke={1.5} /> Delhi, India
          </div>
        </div>

        <hr className="ml-5 my-5 border-gray-400" />

        <div className='px-8 ' >
          <div className='text-2xl font-bold mb-3 flex justify-between' > About
            <button onClick={() => setIsEditingAbout(true)}>
              <LuPencil className="w-5 h-5 hover:text-blue-500" />
            </button>
          </div>
          <div className='text-m text-justify'></div>
          <p className=" text-justify">{aboutText}</p>
        </div>

        <hr className="ml-5 my-5 border-gray-400" />


        <div className="w-full flex flex-col lg:flex-row mt-16 px-4 lg:px-12 gap-4">
          <div className="w-full lg:w-1/3 bg-pink-100 p-4 rounded-xl self-start sticky top-28">
            <div className="text-2xl font-bold mb-4">Quick Links</div>
            <ul className="space-y-2 font-semibold ">
              <li onClick={() => scrollToSection(skillsRef)} className="hover:underline cursor-pointer">Skills</li>
              <li onClick={() => scrollToSection(experienceRef)} className="hover:underline cursor-pointer">Experience</li>
              <li onClick={() => scrollToSection(educationRef)} className="hover:underline cursor-pointer">Educations</li>
              <li onClick={() => scrollToSection(certRef)} className="hover:underline cursor-pointer">Certifications</li>
              <li onClick={() => scrollToSection(intenshipRef)} className="hover:underline cursor-pointer">Internships</li>
              <li onClick={() => scrollToSection(resumeRef)} className="hover:underline cursor-pointer">Upload Resume</li>
            </ul>
          </div>

          <div className='w-full lg:w-2/3'>
            <div ref={skillsRef} className='p-4  ml-auto bg-pink-100 rounded-2xl scroll-mt-20' >
              <div className='text-2xl font-bold mb-3 flex justify-between'> Skills
                <button onClick={() => setIsEditingSkills(true)}>
                  <LuPencil className="w-5 h-5 hover:text-blue-500" />
                </button>
              </div>

              <div className="flex flex-wrap gap-2 mt-3">
                {skills.map((skill, index) => (
                  <span key={index}
                    className="bg-pink-300 bg-opacity-15 rounded-3xl font-medium text-black px-3 py-1">
                    {skill}
                  </span>
                ))}
              </div>
            </div>


            <div ref={experienceRef} className='p-4 ml-auto bg-pink-100 rounded-2xl mt-2 scroll-mt-20' >
              <div className='text-2xl font-bold mb-5 flex justify-between '> Experience
                <button onClick={handleAddExperience}>
                  < FaPlus className="w-5 h-5 hover:text-blue-500" />
                </button>
              </div>
              {experience.map((exp, index) => (
                <div key={exp.id} className="bg-white p-5 rounded-xl shadow mb-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">{exp.title}</h3>
                    <div className="flex gap-2">
                      <button onClick={() => setEditingExp(index)}>
                        <LuPencil className="w-5 h-5 hover:text-blue-500" />
                      </button>
                      <button onClick={() => handleDeleteExperience(index)}>
                        <RiDeleteBin6Line className='w-5 h-5 text-red-600' />
                      </button>
                    </div>
                  </div>
                  <p className="text-gray-700">{exp.company}</p>
                  <p className="text-m text-gray-500">{exp.duration}</p>
                </div>
              ))}
            </div>

            <div ref={educationRef} className='p-4 ml-auto bg-pink-100 rounded-2xl mt-2 scroll-mt-20'>
              <div className='text-2xl font-bold mb-5 flex justify-between'> Education
                <button
                  onClick={() => setEducation(prev => [
                    ...prev,
                    {
                      id: Date.now(),
                      degree: "New Degree",
                      institution: "University Name",
                      year: "Year Range",
                    },
                  ])}
                >
                  <FaPlus className="w-5 h-5 hover:text-blue-500" />
                </button>
              </div>
              {education.map((edu, index) => (
                <div key={edu.id} className="bg-white p-5 rounded-xl shadow mb-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">{edu.degree}</h3>
                    <div className="flex gap-2">
                      <button onClick={() => setEditingEdu(index)}>
                        <LuPencil className="w-5 h-5 hover:text-blue-500" />
                      </button>
                      <button onClick={() => {
                        const updated = [...education];
                        updated.splice(index, 1);
                        setEducation(updated);
                      }}>
                        <RiDeleteBin6Line className='w-5 h-5 text-red-600' />
                      </button>
                    </div>
                  </div>
                  <p className="text-gray-700">{edu.institution}</p>
                  <p className="text-m text-gray-500">{edu.year}</p>
                </div>
              ))}

            </div>



            <div ref={certRef} className='p-4 ml-auto bg-pink-100 rounded-2xl mt-2 scroll-mt-20' >
              <div className='text-2xl font-bold mb-5 flex justify-between'> Certifications
                <button onClick={handleAddCertification}>
                  < FaPlus className="w-5 h-5 hover:text-blue-500" />
                </button>
              </div>
              {certifications.map((cert, index) => (
                <div key={cert.id} className="bg-white p-5 rounded-xl shadow mb-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">{cert.name}</h3>
                    <div className="flex gap-2">
                      <button onClick={() => setEditingCert(index)}>
                        <LuPencil className="w-5 h-5 hover:text-blue-500" />
                      </button>
                      <button onClick={() => handleDeleteCertification(index)}>
                        <RiDeleteBin6Line className='w-5 h-5 text-red-600' />
                      </button>
                    </div>
                  </div>
                  <p className="text-gray-700">{cert.authority}</p>
                  <p className="text-sm text-gray-500">{cert.date}</p>
                </div>
              ))}
            </div>

            <div ref={resumeRef} className="p-4 ml-auto bg-pink-100 rounded-2xl mt-2 scroll-mt-20">
              <div className="text-2xl font-bold mb-5 flex justify-between"> Upload Resume
                {resume && (
                  <button onClick={handleDeleteResume}>
                    <RiDeleteBin6Line className="w-5 h-5 text-red-600" />
                  </button>
                )}
              </div>

              {resume ? (
                <div className="bg-white p-5 rounded-xl shadow mb-4">
                  <p className="text-gray-700">Uploaded File: <span className="font-semibold">{resume.name}</span></p>
                </div>
              ) : (
                <div className="bg-white p-5 rounded-xl shadow mb-4">
                  <label htmlFor="resumeUpload" className="cursor-pointer text-blue-600 hover:underline flex flex-col items-center justify-center h-20">
                    <FaPlus className="w-5 h-5 text-2xl mb-2 font-bold" />
                    <p className='font-semibold'>Click to upload your resume</p>
                  </label>
                  <input
                    id="resumeUpload"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleResumeChange}
                    className="hidden"
                  />
                </div>
              )}
            </div>



            <AnimatePresence>
              {isEditingAbout && (
                <EditModal
                  title="Edit About"
                  value={aboutText}
                  setValue={setAboutText}
                  onClose={() => setIsEditingAbout(false)}
                  onSave={() => setIsEditingAbout(false)}
                />
              )}
            </AnimatePresence>

            <AnimatePresence>
              {isEditingSkills && (
                <EditModal
                  title="Edit Skills (comma separated)"
                  value={skillInput}
                  setValue={setSkillInput}
                  onClose={() => setIsEditingSkills(false)}
                  onSave={() => {
                    const updatedSkills = skillInput
                      .split(",")
                      .map((skill) => skill.trim())
                      .filter((skill) => skill.length > 0);
                    setSkills(updatedSkills);
                    setIsEditingSkills(false);
                  }}
                />
              )}
            </AnimatePresence>

            <AnimatePresence>
              {editingExp !== null && (
                <EditExperienceModal
                  data={experience[editingExp]}
                  onClose={() => setEditingExp(null)}
                  onSave={(updated) => {
                    const newExp = [...experience];
                    newExp[editingExp] = updated;
                    setExperience(newExp);
                    setEditingExp(null);
                  }}
                />
              )}
            </AnimatePresence>

            <AnimatePresence>
              {editingEdu !== null && (
                <EditEducationModal
                  data={education[editingEdu]}
                  onClose={() => setEditingEdu(null)}
                  onSave={(updated) => {
                    const newEdu = [...education];
                    newEdu[editingEdu] = updated;
                    setEducation(newEdu);
                    setEditingEdu(null);
                  }}
                />
              )}
            </AnimatePresence>

            <AnimatePresence>
              {editingCert !== null && (
                <EditCertificationModal
                  data={certifications[editingCert]}
                  onClose={() => setEditingCert(null)}
                  onSave={(updated) => {
                    const newCerts = [...certifications];
                    newCerts[editingCert] = updated;
                    setCertifications(newCerts);
                    setEditingCert(null);
                  }}
                />
              )}
            </AnimatePresence>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
