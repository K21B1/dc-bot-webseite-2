import React from "react";


export default function Navbar () {

  return (
    <>
      <nav className="absolute w-screen border-b bg-gray-700">
        <div className="flex items-center justify-between p-4 ml-[250px]">
            <div>
                <a className="text-4xl font-bold ml-7">Moin Leute</a>
            </div>
        <div className="">
            <button className="mr-3 px-5 py-2 bg-gray-950 border border-gray-800 rounded-3xl">Register</button>
            <button className="mr-7 px-5 py-2 bg-gray-950 border border-gray-800 rounded-3xl">Log in</button>
        </div>
        </div>
      </nav>
    </>
  );
}