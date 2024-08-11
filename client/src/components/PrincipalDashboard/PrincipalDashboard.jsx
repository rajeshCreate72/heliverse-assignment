import React from "react";
import { useSelector } from "react-redux";
import wave from "../../assets/wave.png";

function PrincipalDashboard() {
  const email = useSelector((state) => state.auth.userEmail);
  return (
    <div className="flex flex-row justify-evenly items-center ">
      <nav className="grid grid-col-1 grid-row-3 gap-[10vh] h-[100vh] w-[20vw] fixed top-0 left-0 bg-gray-400">
        <p className="text-3xl mt-10 mb-10">Dashboard</p>
        <section>
          <ul className="grid grid-col-1 grid-row-3 gap-[5vh]">
            <li className="">
              <button className="h-[100%] w-[70%] border-b-2 mb-4 bg-gray-200 rounded-sm">
                Home
              </button>
            </li>
            <li className="">
              <button className="h-[100%] w-[70%] border-b-2 mb-4 bg-gray-200 rounded-sm">
                Teacher Management
              </button>
            </li>
            <li className="">
              <button className="h-[100%] w-[70%] border-b-2 mb-4 bg-gray-200 rounded-sm">
                Student Management
              </button>
            </li>
          </ul>
        </section>
        <section className="flex flex-row items-center justify-center">
          <button className="flex flex-row items-center justify-center h-[40%] w-[70%] bg-blue-200 p-3 rounded-lg">
            <p>principal@classroom.com</p>
          </button>
        </section>
        <div className="hidden">
          <button>Logout</button>
        </div>
      </nav>
      <div className="grid gird-col-1 gird-row-[1fr,auto] w-[80vw] fixed top-0 right-0">
        <div className="flex felx-row items-start h-[10vh] w-[90%] ml-10 mt-3">
          <img className="h-8 w-8" src={wave} alt="waveImage" />
          <p className="text-3xl ml-4">Principal</p>
        </div>
        <section className="teachers"></section>
        <section className="students"></section>
      </div>
    </div>
  );
}

export default PrincipalDashboard;
