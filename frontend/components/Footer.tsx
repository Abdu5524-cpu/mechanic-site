import Contact from '../components/Contact'

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-20 py-6">
      <Contact />
      <div className=" text-center max-w-6xl mx-auto px-4 text-sm text-gray-500 flex flex-col md:flex-row justify-between">
        <span>&copy;Awais Auto Repair & Tire Shop. All rights reserved. Brooklyn, NY</span>
      </div>
    </footer>
  )
}
