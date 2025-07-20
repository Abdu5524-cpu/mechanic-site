
'use client'
import { useEffect } from 'react';
import { useState } from 'react'


export default function Home() {
  useEffect(() => {
    console.log("Component mounted"); // Step 6 log

    fetch('http://localhost:3000/api/ping')

      .then(res => res.json())
      .then(data => {console.log('API response:', data); //step 6 log
      }) // Step 6 log
      .catch(err => {
        console.error('Error fetching API:', err); // Step 7 log
    });
  }, []);


  const [formData, setFormData] = useState({ name: '', car: '', issue: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Quote form submitted:', formData)
    // TODO: send to backend
  }

  return (
    <main className="flex flex-col gap-20 px-4 py-10 max-w-4xl mx-auto text-gray-800">
      {/* Hero */}
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Precision Auto Repairs</h1>
        <p className="text-lg">Trusted mechanic services for every vehicle</p>
      </section>

      {/* Services */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <li className="bg-gray-100 p-4 rounded-xl shadow">Oil Changes</li>
          <li className="bg-gray-100 p-4 rounded-xl shadow">Brake Repair</li>
          <li className="bg-gray-100 p-4 rounded-xl shadow">Engine Diagnostics</li>
          <li className="bg-gray-100 p-4 rounded-xl shadow">AC & Heating</li>
        </ul>
      </section>

      {/* Quote Form */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Get a Quick Quote</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-white p-6 rounded-xl shadow">
          <input
            className="border border-gray-300 rounded px-4 py-2"
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            className="border border-gray-300 rounded px-4 py-2"
            type="text"
            name="car"
            placeholder="Car Make & Model & Year"
            value={formData.car}
            onChange={handleChange}
          />
          <textarea
            className="border border-gray-300 rounded px-4 py-2"
            name="issue"
            placeholder="Describe the issue"
            value={formData.issue}
            onChange={handleChange}
          />
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            Submit
          </button>
        </form>
      </section>

      {/* Testimonials */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">What Customers Say</h2>
        <p className="text-gray-600 italic">Testimonials coming soon...</p>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 mt-20">
        &copy; {new Date().getFullYear()} Precision Auto Repairs. All rights reserved.
      </footer>
    </main>
  )
  

}
