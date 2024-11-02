import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Laptop, Zap, Shield, Users, ChevronRight, Star } from 'lucide-react'
import Image from 'next/image'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">InnovateTech</div>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-600 hover:text-blue-600">Home</a>
          <a href="#" className="text-gray-600 hover:text-blue-600">Features</a>
          <a href="#" className="text-gray-600 hover:text-blue-600">Testimonials</a>
          <a href="#" className="text-gray-600 hover:text-blue-600">Contact</a>
        </nav>
        <Button>Get Started</Button>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Innovate Your Future</h1>
            <p className="text-xl text-gray-600 mb-8">Empowering businesses with cutting-edge technology solutions</p>
            <div className="flex justify-center md:justify-start space-x-4">
              <Button size="lg">
                Get Started
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">Learn More</Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <Image 
              src="/placeholder.svg?height=400&width=600" 
              alt="Innovative technology illustration" 
              width={600} 
              height={400} 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Laptop className="h-10 w-10 text-blue-500" />, title: 'Advanced Technology', description: 'Cutting-edge solutions for modern businesses' },
              { icon: <Zap className="h-10 w-10 text-blue-500" />, title: 'Fast Performance', description: 'Lightning-fast systems for optimal efficiency' },
              { icon: <Shield className="h-10 w-10 text-blue-500" />, title: 'Enhanced Security', description: 'Top-tier security measures to protect your data' },
              { icon: <Users className="h-10 w-10 text-blue-500" />, title: 'Team Collaboration', description: 'Tools to enhance your team\'s productivity' },
            ].map((feature, index) => (
              <div key={index} className="bg-blue-50 p-6 rounded-lg text-center">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'John Doe', role: 'CEO, TechCorp', content: 'InnovateTech has transformed our business operations. Their solutions are truly game-changing.' },
              { name: 'Jane Smith', role: 'CTO, InnovateCo', content: 'The level of innovation and support we\'ve received from InnovateTech is unparalleled.' },
              { name: 'Mike Johnson', role: 'Founder, NextGen', content: 'Choosing InnovateTech was the best decision we made for our startup\'s growth.' },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <Image 
                  src={`/placeholder.svg?height=80&width=80&text=${index + 1}`} 
                  alt={`${testimonial.name}'s portrait`} 
                  width={80} 
                  height={80} 
                  className="rounded-full mx-auto mb-4"
                />
                <div className="flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-yellow-400" />
                  <Star className="h-6 w-6 text-yellow-400" />
                  <Star className="h-6 w-6 text-yellow-400" />
                  <Star className="h-6 w-6 text-yellow-400" />
                  <Star className="h-6 w-6 text-yellow-400" />
                </div>
                <div className="text-center mb-4">
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm">{testimonial.role}</div>
                </div>
                <p className="text-gray-600 text-center">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <Image 
                src="/placeholder.svg?height=300&width=400&text=CTA" 
                alt="Call to action illustration" 
                width={400} 
                height={300} 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl font-bold mb-4">Ready to Innovate?</h2>
              <p className="mb-8">Join thousands of businesses already benefiting from our cutting-edge solutions.</p>
              <div className="flex justify-center md:justify-start">
                <div className="flex w-full max-w-md">
                  <Input type="email" placeholder="Enter your email" className="rounded-r-none bg-white text-gray-800" />
                  <Button className="rounded-l-none">Get Started</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400">About Us</a></li>
                <li><a href="#" className="hover:text-blue-400">Careers</a></li>
                <li><a href="#" className="hover:text-blue-400">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Products</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400">Features</a></li>
                <li><a href="#" className="hover:text-blue-400">Pricing</a></li>
                <li><a href="#" className="hover:text-blue-400">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400">Blog</a></li>
                <li><a href="#" className="hover:text-blue-400">Documentation</a></li>
                <li><a href="#" className="hover:text-blue-400">Support</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-400">Terms of Service</a></li>
                <li><a href="#" className="hover:text-blue-400">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
            © 2024 InnovateTech. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}