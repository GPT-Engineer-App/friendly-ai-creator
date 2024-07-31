import React from 'react';
import { Github, Linkedin, Youtube, MessageSquare } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <img src="/placeholder.svg" alt="Lovable logo" className="h-8 w-8 mr-2" />
            <span className="text-xl font-bold">GPT Engineer</span>
          </div>
          <div className="space-x-4">
            <a href="#vision" className="text-gray-600 hover:text-gray-900">Vision</a>
            <a href="#news" className="text-gray-600 hover:text-gray-900">News</a>
            <a href="#careers" className="text-gray-600 hover:text-gray-900">Careers</a>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">The last piece of software.</h1>
          <p className="text-xl text-gray-600 mb-8">We're building software that builds software. Our vision is to unlock human creativity — by enabling anyone to create software.</p>
          <img src="/placeholder.svg" alt="GPT Engineer logo" className="mx-auto object-cover w-64 h-64" />
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">It starts with an AI software engineer.</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">For Everyone</h3>
              <p>Chat with AI to build and deploy web apps, with no technical knowledge needed.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">For Developers</h3>
              <p>Collaborate in chat and code with an AI engineer, to build at lightning speed.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">For Agencies</h3>
              <p>Partner with AI to streamline web app creation, iteration, and support.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-full md:w-1/3 mb-4 md:mb-0">
              <img src="/placeholder.svg" alt="Lovable logo" className="h-8 w-8 mb-2" />
              <h3 className="text-xl font-bold">GPT Engineer</h3>
            </div>
            <div className="w-full md:w-1/3 mb-4 md:mb-0">
              <h4 className="font-semibold mb-2">Company</h4>
              <ul>
                <li><a href="#overview" className="hover:text-gray-300">Overview</a></li>
                <li><a href="#for-everyone" className="hover:text-gray-300">For Everyone</a></li>
                <li><a href="#for-developers" className="hover:text-gray-300">For Developers</a></li>
                <li><a href="#for-agencies" className="hover:text-gray-300">For Agencies</a></li>
                <li><a href="#get-early-access" className="hover:text-gray-300">Get early access</a></li>
                <li><a href="#login" className="hover:text-gray-300">Login</a></li>
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <h4 className="font-semibold mb-2">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-gray-300"><MessageSquare size={24} /></a>
                <a href="#" className="hover:text-gray-300"><Github size={24} /></a>
                <a href="#" className="hover:text-gray-300"><Youtube size={24} /></a>
                <a href="#" className="hover:text-gray-300"><Linkedin size={24} /></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
