"use client"
import ButtonAuth from "@/components/shared/ButtonAuth";
import Link from "next/link";
import { BsSearch, BsCart4 } from "react-icons/bs";

function HomePage() {


  const handleCart =()=>{
    console.log("Hola Mundo")
  }
  return (
    <div className="flex justify-between p-5">
      <h1 className="text-2xl font-bold">Ecommerce Yoadev</h1>
      <nav className="mr-50 flex flex-row justify-between space-x-8">
        <ul>
          <li className="space-x-5 font-bold">
            <Link href="/">Home</Link>
            <Link href="/products">Products</Link>
            <Link href="/dashboard">Dashboard</Link>
            <Link href="#">About us</Link>
            <Link href="#">Contact</Link>
          </li>
        </ul>
        <form className="relative">
          <div className="flex items-center font-bold">
            <input
              type="text"
              placeholder="Search Products..."
              className="py-2 px-4 rounded-lg border border-gray-300 bg-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full"
            />
            <button
              type="submit"
              className="absolute right-3 text-gray-500 hover:text-gray-300"
            >
              <BsSearch className="h-5 w-5" />
            </button>
          </div>
        </form>
        
          <BsCart4 className="h-5 w-5 mt-3" onClick={handleCart} />
        <ButtonAuth />
      </nav>
    </div>
  );
}

export default HomePage;
