"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

export default function HomePage() {
  const [sendData, setSendData] = useState({
    name: "",
    uid: "",
    section: "",
  });

  async function flask_data() {
    const data = await axios.get(`http://127.0.0.1:5000/`);

    console.log(data.data);
  }

  function handleChange(e) {
    const name = e.target.name;
    const val = e.target.value;

    setSendData({
      ...sendData,
      [name]: val,
    });
    console.log(sendData);
  }

  async function sendToBackend() {
    // const res = await axios({
    //   method: "post",
    //   url: "http://127.0.0.1:5000/post",
    //   data: sendData,
    // });

    const res = await axios.post(`http://127.0.0.1:5000/post`, sendData);

    console.table([res.data]);
    console.log(res.data.data);
  }

  return (
    <>
      <div>
        <div>
          <form className="text-white m-10 block">
            <label className="mr-5">Name</label>
            <input
              name="name"
              onChange={handleChange}
              className="rounded-xl px-3 py-2 text-black"
            />
            <label className="mr-5">UID</label>
            <input
              onChange={handleChange}
              name="uid"
              className="rounded-xl px-3 py-2 text-black"
            />
            <label className="mr-5">Section</label>
            <input
              onChange={handleChange}
              name="section"
              className="rounded-xl px-3 py-2 text-black"
            />
          </form>
          <button
            className="px-3 py-2 bg-yellow-400 text-black rounded-xl"
            onClick={flask_data}
          >
            Submit Form
          </button>
          <button
            className="px-3 py-2 bg-yellow-400 text-black rounded-xl ml-10"
            onClick={sendToBackend}
          >
            send data
          </button>
          <Link href={`/signup`}>Navigate to Other</Link>
        </div>
      </div>
    </>
  );
}
