"use client";

import { useState, useEffect } from "react";

import Link from "next/link";
import Homespline from "./Components/Loading/Homespline";

export default function Home() {
  return (
    <div className="grid grid-cols-2 h-[100vh]">
      <div className="flex flex-col items-center justify-center">
        <div className="w-full">
          <p className="text-[3rem] ml-2">
            Welcome to{" "}
            <span className="text-blue-600  font-extrabold">
              Machine Learning
            </span>
          </p>
        </div>

        <div className="ml-2 w-full">
          {" "}
          <p className="font-extralight ">
            A smartway to do the prediction for your home price
          </p>
        </div>

        <div className="flex my-5 justify-center w-full">
          <Link
            className=" px-4 mr-5 py-2 bg-blue-600 rounded-xl"
            href={`./signup`}
          >
            Signup
          </Link>
          <Link
            href={`./login`}
            className="ml-5 px-4 py-1 bg-orange-600 rounded-xl"
          >
            Login
          </Link>
        </div>
      </div>
      <div className="h-[100vh]">
        <Homespline />
      </div>
    </div>
  );
}
