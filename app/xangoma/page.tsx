import React from 'react';

/**
 * Xangoma Machasine
 * 
 * Laat het online magazine zien.
 */
export default function XangomaPage() {
  const editions = [
    { id: 1, title: 'Winter 2025 Edition', focus: 'African Rhythms', date: 'Jan 2025' },
    { id: 2, title: 'Autumn 2024 Edition', focus: 'South American Folk', date: 'Oct 2024' },
    { id: 3, title: 'Summer 2024 Edition', focus: 'Asian Fusion', date: 'Jul 2024' }
  ];

  return (
    <div className="bg-white min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Xangoma Magazine</h1>
          <p className="text-gray-500">Deep dives into world music culture, artist interviews, and stories behind the music.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {editions.map((edition) => (
            <div key={edition.id} className="group cursor-pointer">
              <div className="aspect-[3/4] bg-xango-dark rounded-2xl mb-4 overflow-hidden shadow-lg transition-transform duration-500 group-hover:scale-[1.02]">
                <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center text-white border-2 border-white/10">
                  <span className="text-xango-red text-xs font-bold uppercase tracking-widest mb-4">Xangoma</span>
                  <h3 className="text-2xl font-bold mb-2">{edition.title}</h3>
                  <div className="w-12 h-0.5 bg-xango-red my-4"></div>
                  <p className="text-sm italic opacity-70">Focus: {edition.focus}</p>
                </div>
              </div>
              <div className="flex justify-between items-center px-2">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{edition.date}</span>
                <span className="text-xango-red font-bold text-sm">Read Issue →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
