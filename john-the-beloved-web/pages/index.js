import React, { useState, useCallback, useRef } from 'react';
import Head from 'next/head';
import HTMLFlipBook from 'react-pageflip';
import { motion } from 'framer-motion';
import { Heart, Send, Users, BookOpen, Music } from 'lucide-react';

export default function Home() {
  const [lang, setLang] = useState('en');
  const bookRef = useRef();

  // --- RAZORPAY CONFIGURATION ---
  // When you have your ID, replace "YOUR_LINK_ID" with the actual ID
  const RAZORPAY_PAYMENT_LINK = "https://rzp.io/l/YOUR_LINK_ID";

  const Page = React.forwardRef((props, ref) => {
    return (
      <div className="bg-white shadow-inner border-l border-gray-200" ref={ref}>
        <img 
          src={`/novel/${lang}/${props.number}.jpg`} 
          alt={`Page ${props.number}`}
          className="w-full h-full object-contain p-4"
          onError={(e) => e.target.src = "https://via.placeholder.com/400x600?text=Page+Image+Missing"}
        />
      </div>
    );
  });

  return (
    <div className="bg-film-teal min-h-screen text-white selection:bg-film-gold selection:text-film-teal">
      <Head>
        <title>John the Beloved | Malayalam Queer Film</title>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@300;400;600&display=swap" rel="stylesheet" />
      </Head>

      {/* Hero Section */}
      <nav className="fixed top-0 w-full z-50 p-6 flex justify-between items-center bg-gradient-to-b from-black/40 to-transparent">
        <span className="font-serif text-2xl font-bold text-film-gold">J B</span>
        <button 
          onClick={() => window.location.href = RAZORPAY_PAYMENT_LINK}
          className="bg-film-gold text-film-teal px-6 py-2 rounded-full font-bold text-sm hover:scale-105 transition"
        >
          SUPPORT NOW
        </button>
      </nav>

      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img src="/hero-scooter.jpg" className="w-full h-full object-cover" alt="Hero" />
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-7xl md:text-9xl font-serif text-film-gold drop-shadow-2xl mb-4">JOHN THE BELOVED</h1>
          <p className="text-xl md:text-2xl font-light tracking-widest uppercase italic">A film by Shahid Iqbal Mafeeda & Friends</p>
        </motion.div>
      </section>

      {/* Synopsis Section */}
      <section className="bg-white text-film-teal py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif mb-6 text-film-dark">The Story</h2>
              <p className="text-lg leading-relaxed mb-6 font-sans">
                John, a gay filmmaker, and his straight best friend Ananthu share a warm bromance in which they support each other as they navigate love, heartbreak, and ambitions.
              </p>
              <div className="p-6 bg-film-teal/5 border-l-4 border-film-gold italic">
                "Greater love has no one than this: to lay down one’s life for one’s friends."
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="h-40 bg-film-teal/10 rounded-lg flex flex-col items-center justify-center p-4">
                <Heart className="text-film-gold mb-2" />
                <span className="text-xs font-bold uppercase">Queer Identity</span>
              </div>
              <div className="h-40 bg-film-teal/10 rounded-lg flex flex-col items-center justify-center p-4">
                <Users className="text-film-gold mb-2" />
                <span className="text-xs font-bold uppercase">Bromance</span>
              </div>
              <div className="h-40 bg-film-teal/10 rounded-lg flex flex-col items-center justify-center p-4">
                <Music className="text-film-gold mb-2" />
                <span className="text-xs font-bold uppercase">Soundscape</span>
              </div>
              <div className="h-40 bg-film-teal/10 rounded-lg flex flex-col items-center justify-center p-4">
                <BookOpen className="text-film-gold mb-2" />
                <span className="text-xs font-bold uppercase">Graphic Novel</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Flipbook Section */}
      <section className="py-24 bg-film-dark overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif text-film-gold mb-12 uppercase tracking-widest">Read the Graphic Novel</h2>
          
          <div className="flex justify-center gap-4 mb-12 font-sans">
            <button 
              onClick={() => setLang('en')}
              className={`px-8 py-3 rounded-full border-2 transition ${lang === 'en' ? 'bg-film-gold border-film-gold text-film-teal' : 'border-white/20 hover:border-white'}`}
            >
              ENGLISH
            </button>
            <button 
              onClick={() => setLang('ml')}
              className={`px-8 py-3 rounded-full border-2 transition ${lang === 'ml' ? 'bg-film-gold border-film-gold text-film-teal' : 'border-white/20 hover:border-white'}`}
            >
              മലയാളം
            </button>
          </div>

          <div className="flex justify-center items-center gap-8">
            <HTMLFlipBook 
              width={400} 
              height={550} 
              size="stretch"
              minWidth={315}
              maxWidth={1000}
              minHeight={400}
              maxHeight={1533}
              maxShadowOpacity={0.5}
              showCover={true}
              className="shadow-2xl mx-auto"
              ref={bookRef}
            >
              {[...Array(36)].map((_, i) => (
                <Page key={i} number={i + 1} />
              ))}
            </HTMLFlipBook>
          </div>
          <p className="mt-8 text-white/50 text-sm font-sans italic">Use your mouse or swipe to flip pages</p>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl font-serif text-film-gold mb-8">Every Contribution Matters</h2>
          <p className="text-xl font-light mb-12 text-white/80">
            Independent cinema exists because people choose to believe in stories before they exist. 
            Help us reach our goal of <strong>₹1,50,000</strong> to bring John's world to life.
          </p>
          
          <div className="space-y-4 max-w-md mx-auto">
             <button 
               onClick={() => window.location.href = RAZORPAY_PAYMENT_LINK}
               className="w-full bg-white text-film-teal py-5 rounded-xl font-bold text-xl flex items-center justify-center gap-3 hover:bg-film-gold transition-colors shadow-2xl"
             >
               <Send size={20} /> SUPPORT VIA RAZORPAY
             </button>
             <p className="text-xs text-white/40 uppercase tracking-widest font-sans">Secure Payment • International Cards Accepted</p>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-white/10 text-center font-sans opacity-50 text-xs">
        <p>© 2024 JOHN THE BELOVED. ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  );
}
