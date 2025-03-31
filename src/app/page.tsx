import Link from "next/link";

function HomePage() {
  return (
    <div className="flex justify-between">
      <h1 className="text-2xl font-bold">Ecommerce Yoadev</h1>
      <nav >
        <ul>
          <li className="space-x-4 font-bold">
            <Link href="/">Home</Link>
            <Link href="/products/new">Products</Link>
            <Link href="#">About us</Link>
            <Link href="#">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default HomePage;
