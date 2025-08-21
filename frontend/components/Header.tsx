export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">Awais Auto Repair & Tire Shop
</h1>
        <nav className="space-x-4 text-sm">
          <a href="#services" className="text-gray-600 hover:text-blue-600">Services</a>
          <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
          <a href="#quote" className="text-white bg-blue-600 px-3 py-1 rounded hover:bg-blue-700">Get a Quote</a>
        </nav>
      </div>
    </header>
  )
}
