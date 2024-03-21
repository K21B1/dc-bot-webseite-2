import Image from "next/image";
import { Inter } from "next/font/google";
import NavBar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="text-white bg-gray-900 h-screen">
      <div>
        <NavBar />
        <Sidebar />
      </div>
      <div>
        <div>
          <a>hallo</a>
        </div>
      </div>
    </div>
  );
}
