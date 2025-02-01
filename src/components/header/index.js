export default function Header() {
    return (
      <header className="flex justify-between items-center p-4 border-b">
        <h1 className="text-xl font-bold">Pouria</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:underline hover:text-[#84c4eb] transition-all duration-500">Home</a></li>
            <li><a href="#" className="hover:underline hover:text-[#84c4eb] transition-all duration-500">About</a></li>
            <li><a href="#" className="hover:underline hover:text-[#84c4eb] transition-all duration-500">Works</a></li>
            <li><a href="#" className="hover:underline hover:text-[#84c4eb] transition-all duration-500">Contact</a></li>
          </ul>
        </nav>
      </header>
    );
  }