"use client";
import ButtonAuth from "@/components/shared/ButtonAuth";
import Link from "next/link";
import { BsSearch, BsCart4 } from "react-icons/bs";
import Image from "next/image";
import banner from "../../public/images/images6.jpeg";
import logo from "../../public/images/logo3.jpeg";
import { SortByProducts } from "@/components/shared/SortByProducts";
import { CategorySelectForm } from "@/components/shared/CategorySelectForm";

function HomePage() {
  const handleCart = () => {
    console.log("Hola Mundo");
  };
  return (
    <>
      <header className="flex justify-between ">
        <div className="relative w-32 h-20 ml-20">
          <Image src={logo} alt="Logo Product" className="h-full"></Image>
        </div>

        <nav className="flex flex-row justify-between space-x-5 mr-20">
          <ul>
            <li className="space-x-5 font-bold mt-5 mr-50">
              <Link href="/">Home</Link>
              <Link href="/products">Products</Link>
              <Link href="/dashboard">Dashboard</Link>
              <Link href="#">About us</Link>
              <Link href="#">Contact</Link>
            </li>
          </ul>
          <form className="relative ">
            <div className="flex items-center font-bold">
              <input
                type="text"
                placeholder="Search Products..."
                className="py-2 px-4 rounded-lg border border-gray-300 bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full"
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
      </header>
      <section>
        <Image
          src={banner}
          alt="Banner Image"
          width={1200}
          height={800}
          className="rounded-4xl w-350 p-2 h-100 m-auto"
          priority
        ></Image>
      </section>
      <section className="flex flex-row justify-between p-20">
        <article>
          <CategorySelectForm/>
        </article>

        <article className="grid grid-cols-2 gap-4">
          <h1>Products</h1>
          <span>
            Sort by
            <SortByProducts />
          </span>
        </article>
      </section>
    </>
  );
}

export default HomePage;
