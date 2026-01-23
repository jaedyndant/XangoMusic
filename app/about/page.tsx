import React from 'react';
import Image from 'next/image';

/**
 * Over deze pagina
 */
export default function AboutPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">About Xango Music</h1>
          <p className="text-gray-500">Local music from all over the world</p>
        </div>

        {/* Sektie over Arrnulf */}
        <div className="bg-[#4b4b4b] text-white rounded-3xl p-8 md:p-12 mb-12 shadow-xl overflow-hidden relative">
          <div className="flex flex-col md:flex-row gap-12 items-center relative z-10">
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-6">Arnulf den Boesterd</h2>
              <p className="text-lg leading-relaxed mb-6">
                Founder and owner of Xango Music, Arnulf started this journey as a hobby that got out of hand. His love of music made him decide to turn his passion into Xango Music.
              </p>
              <p className="text-lg leading-relaxed">
                Making the unavailable available! Our mission is to distribute amazing local music from all over the world to stores in the Benelux countries and worldwide online.
              </p>
            </div>
            <div className="md:w-1/3">
              <div className="relative aspect-square w-full max-w-[300px] rounded-2xl overflow-hidden border-4 border-white/20">
                <Image 
                  src="/images/arnulf-2.png" 
                  alt="Arnulf den Boesterd" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 bg-[#4b4b4b] rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-bold text-white mb-6">Get in Touch</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="First Name" aria-label="First Name" className="w-full px-4 py-3 rounded-lg bg-white outline-none" />
                <input type="text" placeholder="Last Name" aria-label="Last Name" className="w-full px-4 py-3 rounded-lg bg-white outline-none" />
              </div>
              <input type="email" placeholder="Email Address" aria-label="Email Address" className="w-full px-4 py-3 rounded-lg bg-white outline-none" />
              <select aria-label="Select Subject" className="w-full px-4 py-3 rounded-lg bg-white outline-none text-gray-500">
                <option>Select Subject</option>
                <option>General Inquiry</option>
                <option>Distribution</option>
                <option>Magazine</option>
              </select>
              <textarea placeholder="Your message..." aria-label="Your message" rows={4} className="w-full px-4 py-3 rounded-lg bg-white outline-none resize-none"></textarea>
              <button className="w-full bg-xango-red text-white font-bold py-3 rounded-lg hover:bg-red-700 transition-colors">
                Send Message
              </button>
            </form>
          </div>

          <div className="lg:col-span-1 bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-8">Locations</h3>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="text-xango-red mt-1">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Office</h4>
                  <p className="text-gray-600">Vleutenseweg 227</p>
                  <p className="text-gray-600">3532 HD Utrecht, Netherlands</p>
                  <div className="mt-4 rounded-xl overflow-hidden h-48 bg-gray-100 border border-gray-200">
                    <iframe 
                      width="100%" 
                      height="100%" 
                      title="Xango Music Office Location"
                      style={{ border: 0 }} 
                      src="https://maps.google.com/maps?q=Vleutenseweg%20227,3532%20HD%20Utrecht,Netherlands&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="text-xango-red mt-1">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Warehouse</h4>
                  <p className="text-gray-600">Berenkoog 53 C</p>
                  <p className="text-gray-600">1822 BN Alkmaar, Netherlands</p>
                  <div className="mt-4 rounded-xl overflow-hidden h-48 bg-gray-100 border border-gray-200">
                    <iframe 
                      width="100%" 
                      height="100%" 
                      title="Xango Music Warehouse Location"
                      style={{ border: 0 }} 
                      src="https://maps.google.com/maps?q=Berenkoog%2053%20C,1822%20BN%20Alkmaar,Netherlands&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1 bg-[#333] rounded-2xl p-8 shadow-lg text-white">
            <h3 className="text-xl font-bold mb-8">Contact Details</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="text-xango-red">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span>info@xangomusic.com</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-xango-red">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span>+31 (0) 6 260 263 60</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-xango-red">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span>Mon-Fri: 9AM-6PM CET</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
