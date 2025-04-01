import ButtonAuth from "@/components/shared/ButtonAuth";
import Link from "next/link";

function HomePage() {
  return (
    <div className="flex justify-between p-5">
      <h1 className="text-2xl font-bold">Ecommerce Yoadev</h1>
      <nav className="mr-40">
        <ul>
          <li className="space-x-5 font-bold">
            <Link href="/">Home</Link>
            <Link href="/products/new">Products</Link>
            <Link href="#">About us</Link>
            <Link href="#">Contact</Link>
            <ButtonAuth/>
            
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default HomePage;
