"use client";

import { useEffect } from "react";

import CityService from "@shared/services/city.service";
// import { useDispatch } from "react-redux";
// import Image from "next/image";
// import { getCatsFetch } from "@redux/slices/catSlice/catState";
import TopBar from "@shared/templates/top-bar";
import Header from "../common/Header";

export default function Home() {

  // const dispatch = useDispatch();

  useEffect(() => {
    CityService.getAllCities().then((res) => {
      console.log(res.data);
    });
  }, []);


  return (
    <main className="flex min-h-screen flex-col items-center">
      <TopBar />
      <Header />

      <div>see on DEV panel</div>
    </main>
  );
}
