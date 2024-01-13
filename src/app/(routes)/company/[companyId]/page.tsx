"use Client";

import React from 'react';

import { useRouter } from 'next/router'

import {useSession} from "next-auth/react";

const data=[
  {
    id:1,
    status:'JAF filled',
    title:'Google',
    location:'Bangalore'
  },
  {
    id:2,
    status:'JAF filled',
    title:'Amazon',
    location:'Hyderabad'
  },
  {
      id:3,
      status:'JAF filled',
      title:'Goldman Sachs',
      location:'Hyderabad'
  }
]

export default function CompanyDetail (
  {
    params,
  }: {
    params: {
      companyId: String;
    };
  }
) {
  var index=0;
  var i=0;
  while (i<data.length)
  {
    if (data[i].id === Number(params.companyId))
     {
        index=i;
        break;
     }
     i++;
  }
    return (
      
        <section className='h-[250vh] w-screen' >
        
          <div className="absolute top-12 left-4 pt-3 ">
            <p className="bg-[#94a3b8] pl-2 pr-2">Status:<span className="font-bold">{data[index].status}</span></p>
          </div>
          <div>
            <h1 className="absolute top-14 left-4 pt-8 text-6xl font-bold">{data[index].title}</h1>
          </div>
          <div className="absolute top-23 left-4 pt-10 mt-10 ">
            <p className="pt-9 pl-4 text-lg"><span className="pl-2 pr-10 font-bold ">Location</span>{data[index].location}</p>
            <p className="pt-2 pl-4 text-lg"><span className="pl-2 pr-10 font-bold ">Stipend</span>$12000/month</p>
            <p className="pt-2 pl-4 text-lg"><span className="pl-2 pr-10 font-bold ">Duration</span>3 Months</p>
            <p className="pt-2 pl-4 text-lg"><span className="pl-2 pr-10 font-bold ">Job type</span>Internship</p>
            <p className="pt-2 pl-1 text-lg"><span className="pl-2 pr-10 font-bold ">Roles offered</span>Backend engineer</p>
            <p className="pt-2 pl-4 text-lg"><span className="pl-2 pr-10 font-bold ">Eligibility</span>B.Tech CSE(3rd year),B.Tech EE(3rd year)</p>
            <p className="pt-2 pl-4 text-lg"><span className="pl-2 pr-10 font-bold ">JAF Link</span><a href="#" className='decoration-none text-[#38bdf8]'>Link</a></p>
          </div>
          <hr />
          <div className='absolute top-60 left-4 pt-14 mt-2'>
            <h1 className="pt-20 mt-20 7 text-3xl font-bold">Stages of Selection:</h1>
          </div>
          <div className='absolute left-5 top-80'>
          <div className=" pt-10 mt-16 w-[1150px] pr-30 ">
          <div className="pt-16 mt-12 flex fex-row">
            <div className="pl-2 bg-[#94a3b8] w-screen">
            <p className='pl-2 text-xl font-bold pr-5 relative top-7'>OA</p>
            <div className="flex flex-row-reverse ml-10 place-content-between bg-[#94a3b8]">
              <p className="pl-10 text-xl"><span style={{color:'darkgreen'}}>&#x2713;</span> Done</p>
              <p className="pr-12 pl-10 text-xl">Time:4:30 PM</p>
              <p className='pr-12 pl-5 text-xl'>Date:4 Nov 2023</p>
            </div>
            </div>
          </div>
          <div className="bg-[#94a3b8]">
          <p className="pt-6 text-lg"><span className="pl-2 pr-10 font-bold ">Eligible Students:</span><a href="#" className='decoration-none text-[#38bdf8]'>View List</a></p>
          <p className="pt-6 text-lg"><span className="pl-2 pr-7 font-bold ">Selected Students:</span><a href="#" className='decoration-none text-[#38bdf8]'>View List</a></p>
          </div>
          </div>
          <div className="pt-15 mt-15 w-[1150px] pr-30">
          <div className="pt-12 mt-11 flex fex-row mt-5 w-[1150px] pr-30">
            <div className="pl-2 bg-[#94a3b8] pt-12 mt-12 w-screen">
            <p className='pl-2 text-lg font-bold pr-12'>Interview-1</p>
            <div className="flex flex-row-reverse  place-content-between bg-[#94a3b8]">
              <p className="pl-10 text-xl">Pending</p>
              <p className="pr-10 pl-5 text-xl">Time:4:30 PM</p>
              <p className='pr-12 pl-12 text-xl'>Date:4 Nov 2023</p>
            </div>
            </div>
          </div>
          <div className="bg-[#94a3b8]">
          <p className="pt-6 text-lg"><span className="pl-2 pr-10 font-bold ">Eligible Students:</span><a href="#" className='decoration-none text-[#38bdf8]'>View List</a></p>
          <p className="pt-6 text-lg"><span className="pl-2 pr-7 font-bold ">Selected Students:</span><a href="#" className='decoration-none text-[#38bdf8]'>View List</a></p>
          </div>
          </div>
          <div className="pt-15 mt-15 w-[1150px] pr-30">
          <div className="pt-12 mt-11 flex fex-row mt-5 w-[1150px] pr-30">
            <div className="pl-2 bg-[#94a3b8] pt-12 mt-12 w-screen">
            <p className='pl-2 text-lg font-bold pr-12'>Interview-2</p>
            <div className="flex flex-row-reverse  place-content-between bg-[#94a3b8]">
              <p className="pl-10 text-xl">Pending</p>
              <p className="pr-10 pl-5 text-xl">Time:4:30 PM</p>
              <p className='pr-12 pl-12 text-xl'>Date:4 Nov 2023</p>
            </div>
            </div>
          </div>
          <div className="bg-[#94a3b8]">
          <p className="pt-6 text-lg"><span className="pl-2 pr-10 font-bold ">Eligible Students:</span><a href="#" className='decoration-none text-[#38bdf8]'>View List</a></p>
          <p className="pt-6 text-lg"><span className="pl-2 pr-7 font-bold ">Selected Students:</span><a href="#" className='decoration-none text-[#38bdf8]'>View List</a></p>
          </div>
          </div>
          <div className='pt-15 mt-15'>
          <p className="pt-10 text-4xl"><span className="pr-10 font-bold">Final list of Students:</span><a href="#" className='decoration-none text-[#38bdf8]'>View List</a></p>
          </div>
          </div>
       
        </section>
      
    );
}

