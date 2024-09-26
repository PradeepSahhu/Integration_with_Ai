"use client";

import { useState } from "react";

import { HashLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

export default function Loading() {
  return (
    <div className="bg-white text-blue-400 h-[100vh]">
      <div className="flex justify-center items-center h-[100vh] w-[100vw]">
        <div className="sweet-loading">
          <HashLoader
            color={"blue"}
            loading={true}
            override={override}
            size={300}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      </div>
    </div>
  );
}
