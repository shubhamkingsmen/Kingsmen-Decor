import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const JobListings = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const jobs = [
    {
      id: "RES07041",
      role: "Business Manager - Design",
      location: "Bangalore ",
      department: "Sales",
    },
    {
      id: "RES07025",
      role: "Operations Lead",
      location: "Bangalore ",
      department: "Ops",
    },
    {
      id: "RES07024",
      role: "Backend Developer",
      location: "Bangalore ",
      department: "IT",
    },
    {
      id: "RES07005",
      role: "Business Manager - Sales",
      location: "Bangalore ",
      department: "Sales",
    },
    {
      id: "RES07004",
      role: "Interior Designer",
      location: "Bangalore ",
      department: "Sales",
    },
    {
      id: "RES06993",
      role: "Reactjs Developer",
      location: "Bangalore  ",
      department: "IT",
    },
    {
      id: "RES06991",
      role: "Content-Writer",
      location: "Bangalore  ",
      department: "Marketing",
    },
    {
      id: "RES06989",
      role: "Business Manager - Sales",
      location: "Bangalore",
      department: "Sales",
    },
    {
      id: "RES06988",
      role: "Validation Lead",
      location: "Bangalore",
      department: "Ops",
    },
    {
      id: "RES06983",
      role: "Interior Designer",
      location: "Bangalore",
      department: "Sales",
    },
  ];

  return (
    <div className="main-container">
      <motion.h1
        className="lg:text-4xl text-xl font-semibold text-[#104438]"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        20 Open Jobs
      </motion.h1>

      <div className="flex gap-4 top-spacing mb-6">
        <select
          className="border border-gray-300 p-2 rounded-lg w-full max-w-xs"
          data-aos="fade-up"
        >
          <option>All Departments</option>
          <option>Sales</option>
          <option>Operations</option>
          <option>Marketing</option>
          <option>HR department</option>
          <option>IT department</option>
        </select>
        <select
          className="border border-gray-300 p-2 rounded-lg w-full max-w-xs"
          data-aos="fade-up"
        >
          <option>All Locations</option>
          <option>Bangalore</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="table-auto w-full text-left border border-gray-200 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4 text-gray-600">Role</th>
              <th className="p-4 text-gray-600">Location</th>
              <th className="p-4 text-gray-600">Department</th>
              <th className="p-4"></th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, index) => (
              <motion.tr
                key={job.id}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border-t hover:bg-gray-50"
                data-aos="fade-up"
              >
                <td className="p-4 font-medium text-blue-600">
                  {job.role} ({job.id})
                </td>
                <td className="p-4 text-gray-700">{job.location}</td>
                <td className="p-4 text-gray-700">{job.department}</td>
                <td className="p-4">
                  <button className="text-white px-4 py-2 rounded-lg bg-[#104438] transition">
                    View Job
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      <div
        className="flex justify-between items-center mt-6"
        data-aos="fade-up"
      >
        <div className="flex gap-2">
          {[...Array(5)].map((_, index) => (
            <button
              key={index}
              className={`w-10 h-10 flex items-center justify-center border rounded-md ${
                index === 0
                  ? "bg-[#104438] text-white"
                  : "bg-white text-gray-700"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
        {/* <select className="border border-gray-300 p-2 rounded-lg">
          <option>10</option>
          <option>20</option>
          <option>50</option>
        </select> */}
      </div>
    </div>
  );
};

export default JobListings;
