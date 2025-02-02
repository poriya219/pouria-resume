import Link from "next/link";

export default function Header() {
    return (
      <header className="flex justify-end items-center p-4">
        {/* <h1 className="text-xl font-bold">Pouria jafarzadeh</h1> */}
        <nav>
          <ul className="flex space-x-4">
            <Link href="/" className="hover:underline hover:text-[#84c4eb] transition-all duration-500">Home</Link>
            <Link href="/about" className="hover:underline hover:text-[#84c4eb] transition-all duration-500">About</Link>
            <Link href="/works" className="hover:underline hover:text-[#84c4eb] transition-all duration-500">Works</Link>
          </ul>
        </nav>
      </header>
    );
  }