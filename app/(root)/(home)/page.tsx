"use client";

import MeetingTypeList from '@/components/MeetingTypeList';
import React, { useState, useEffect } from 'react';

const Home = () => {
  
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60 * 1000); // Update every minute

    return () => {
      clearInterval(timer); // Clear interval on component unmount
    };
  }, []);
  const hours = currentTime.getHours();
  const formattedHours = hours < 10 ? `0${hours}` : hours;
  const minutes = currentTime.getMinutes();
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  
  const now = new Date();
  const date = (new Intl.DateTimeFormat('en-US', { dateStyle: 'full' })).format(now);


  return (
    <section className="flex size-full flex-col gap-5">
      <div className="h-[303px] w-full rounded-[20px] bg-hero bg-cover">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-6 lg:p-11">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-semibold lg:text-7xl text-dark-5">{`${formattedHours}:${formattedMinutes} ${hours>=12?'PM':'AM'}`}</h1>
            <p className="text-lg font-bold text-orange-1 lg:text-3xl">{date}</p>
          </div>
        </div>
      </div>

      <MeetingTypeList />
    </section>
  );
};

export default Home;
