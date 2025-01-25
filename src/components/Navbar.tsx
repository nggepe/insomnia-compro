import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return <nav className="flex items-center justify-between bg-gray-800 p-0">
    <div className="flex items-center space-x-4">
      <Link href="/" className="text-white">
        <Image src={"/logo-transparent.png"} alt="Insomnia Creative & Digital Agency" width={200} height={50} />
      </Link>
    </div>
  </nav>
}