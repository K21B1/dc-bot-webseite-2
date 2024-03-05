import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="text-white bg-gray-950 h-screen">
      <div>
        <a className="text-7xl font-bold">GetOnMyLVL</a>
      </div>
    </div>
  );
}
