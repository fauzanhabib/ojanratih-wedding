import React, { useState, useEffect, useRef } from 'react';
import { InstagramIcon, CalendarIcon, LocationPinIcon, CopyIcon, BankIcon, GiftIcon, FacebookIcon, WhatsAppIcon, HeartIcon } from '../components/Icons';
// import { CountdownTimer } from './components/Countdown';
import { RsvpSection } from '../components/RsvpSection';
import type { RsvpMessage } from '../types';
import { Mail } from "lucide-react";
import AudioPlayer from "../components/AudioPlayer";
import Slideshow from "../components/BgSlideShow";
import WeddingOverlay from "../components/WeddingOverlay";
import { Calendar } from 'lucide-react';
import PhotoSection from "../components/PhotoSection";

// SECTION WRAPPER COMPONENT
// Fix: Add style prop to Section component to allow inline styling.
const Section: React.FC<{ id?: string; children: React.ReactNode; className?: string; style?: React.CSSProperties }> = ({ id, children, className = '', style }) => (
  <section id={id} className={`w-full py-16 md:py-20 px-6 md:px-12 flex justify-center ${className}`} style={style}>
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center gap-8">
      {children}
    </div>
  </section>
);

// HERO SECTION COMPONENT

const HeroSection: React.FC<{ onOpen: () => void }> = ({ onOpen }) => (
    <div className="relative h-screen w-full flex flex-col justify-center items-center text-center p-6 text-white">
    {/* Blurred background */}
    <div
      className="absolute inset-0 bg-cover bg-center blur-xs"
      style={{ backgroundImage: `url('/images/bgdepan.webp')` }}
    ></div>
    <div className="absolute inset-0 bg-black bg-opacity-40"></div>
  
    {/* Foreground content */}
    <div className="relative z-2 flex flex-col items-center animate-fade-in mb-8">
      {/* Portrait with arch shape */}
      <div className="overflow-hidden rounded-t-full rounded-b-[1.5rem] shadow-2xl mb-20 w-32 sm:w-56 md:w-72 lg:w-96">
        <img
          src="/images/bgkecil.jpg"
          alt="Couple"
          className="w-full h-auto object-cover"
        />
      </div>

  
      <p className="font-lora tracking-widest text-lg">THE WEDDING OF</p>
      <h1 className="font-playfair text-4xl md:text-8xl">Fauzan & Ratih</h1>
      <p className="font-italiana mt-3">Yth. Bapak/Ibu/Saudara</p>
      <button
        onClick={onOpen}
        className="mt-4 flex items-center gap-2 px-8 py-3 
             bg-gradient-to-r from-[#B7CBBF] via-[#A3B899] to-[#7D9D8D] 
             text-white font-lato tracking-wider rounded-full 
             hover:opacity-90 transition-all duration-300"
      >
        <Mail className="w-5 h-5" /> {/* Message/Envelope icon */}
        BUKA UNDANGAN
      </button>

    </div>
  </div>
);


// PRAYER/VERSE SECTION COMPONENT
const VerseSection: React.FC = () => (
  <Section id="prayer" className="bg-sage-light text-brand-dark text-center">
    <h2 className="font-playfair text-4xl text-brand-gold">Our Prayer</h2>
    <blockquote className="font-lato italic text-md md:text-lg max-w-2xl mx-auto">
      “Dan di antara ayat-ayat-Nya ialah Dia menciptakan untukmu istri-istri dari jenismu sendiri,
      supaya kamu merasa nyaman kepadanya, dan dijadikan-Nya di antaramu mawadah dan rahmah.
      Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berpikir”
    </blockquote>
    <p className="font-lato font-bold">(Q.S. Ar-Rum: 21)</p>

    {/* Two Pictures Side by Side */}
    <div className="flex justify-center gap-6 mt-6">
    <FlowerIcon />
    </div>
  </Section>
);

// COUPLE SECTION COMPONENT
const CoupleSection: React.FC = () => (
  <Section id="couple" className="bg-[url('/pattern-bg.png')] bg-cover bg-center py-12 px-4">
    {/* Title */}
    <div className="text-center mb-6">
      <h3 className="font-lato text-sm sm:text-base tracking-[0.3em] text-brand-dark">Pasangan</h3>
      <h2 className="font-playfair text-3xl sm:text-5xl text-brand-dark">Mempelai</h2>
    </div>
    
    {/* Opening Text */}
    <p className="font-lato text-center text-brand-dark max-w-2xl mx-auto leading-relaxed text-sm sm:text-base mb-10">
      Dengan segala puji bagi Allah yang telah menciptakan makhluk-Nya berpasang-pasangan, 
      Ya Allah izinkanlah kami merangkaikan cinta yang Engkau berikan dalam ikatan pernikahan.
    </p>
    
    {/* Couple Info */}
    <div className="flex justify-center gap-6 mt-6">
      {/* Bride */}
      <div className="text-center w-full max-w-xs sm:max-w-sm relative">
        <div className="relative mx-auto mb-6">
          {/* Arch container */}
          <div className="w-full aspect-[3/4] bg-white/80 rounded-t-full border-2 border-white shadow-xl overflow-hidden">
            <img
              src="/images/ojan.jpg"
              alt=""
              className="w-full h-full object-cover rounded-t-full"
            />
          </div>
          {/* Name Overlay */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <div className="bg-white/90 px-4 py-1 rounded-full shadow">
              
            </div>
          </div>
        </div>

        {/* Details */}
        <h3 className="font-playfair text-base sm:text-2xl text-brand-dark">Fauzan</h3>
        <h3 className="font-playfair text-base sm:text-2xl text-brand-dark">Habiburrohman,</h3>
        <h3 className="font-playfair text-base sm:text-2xl text-brand-dark">S.Kom</h3>
        <p className="font-lato text-brand-dark text-xs sm:text-sm mt-2">Putra Sulung dari</p>
        <p className="font-lato text-brand-dark text-xs sm:text-sm">
          Bapak John Wisnu Anggono S.M<br /> & Ibu Sriwidodo
        </p>
        <a
          href="#"
          className="inline-block mt-3 p-2 sm:p-3 bg-white rounded-full shadow hover:shadow-lg"
        >
          <i className="fab fa-instagram text-brand-dark text-lg sm:text-xl"></i>
        </a>
      </div>

      {/* Separator */}
      <div className="font-playfair text-5xl text-brand-dark my-6 md:my-0">&</div>

      {/* Groom */}
      <div className="text-center w-full max-w-xs sm:max-w-sm relative">
        <div className="relative mx-auto mb-6">
          {/* Arch container */}
          <div className="w-full aspect-[3/4] bg-white/80 rounded-t-full border-2 border-white shadow-xl overflow-hidden">
            <img
              src="/images/ratih.jpg"
              alt=""
              className="w-full h-full object-cover rounded-t-full"
            />
          </div>
          {/* Name Overlay */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <div className="bg-white/90 px-4 py-1 rounded-full shadow">

            </div>
          </div>
        </div>

        {/* Details */}
        <h3 className="font-playfair text-base sm:text-2xl text-brand-dark">ST. Ratih Nurwanti,</h3>
        <h3 className="font-playfair text-base sm:text-2xl text-brand-dark">S.Ak M.Ak</h3>
        <p className="font-lato text-brand-dark text-xs sm:text-sm mt-2">Putri Bungsu dari</p>
        <p className="font-lato text-brand-dark text-xs sm:text-sm">
          Bapak H. Wawan Ridwan Wahyu, S.Ap <br /> & Ibu Hj. Suryati S.Ag
        </p>
        <a
          href="#"
          className="inline-block mt-3 p-2 sm:p-3 bg-white rounded-full shadow hover:shadow-lg"
        >
          <i className="fab fa-instagram text-brand-dark text-lg sm:text-xl"></i>
        </a>
      </div>
    </div>
  </Section>
);



// COUNTDOWN SECTION COMPONENT


const FlowerIcon = () => (
  <svg width="120" height="80" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
    <g stroke="currentColor" strokeWidth="1.5" fill="none">
      {/* Main stem */}
      <path d="M60 75 Q58 55 55 35 Q52 15 60 5" strokeLinecap="round"/>
      
      {/* Branches and flowers */}
      <g>
        {/* Left branch */}
        <path d="M55 35 Q45 32 38 28" strokeLinecap="round"/>
        <circle cx="36" cy="26" r="3"/>
        <path d="M36 26 Q32 24 28 26 Q30 22 34 22 Q38 22 40 26 Q36 30 32 28 Q34 28 36 26" strokeLinecap="round"/>
        
        {/* Left upper branch */}
        <path d="M52 15 Q42 12 35 8" strokeLinecap="round"/>
        <circle cx="33" cy="6" r="3"/>
        <path d="M33 6 Q29 4 25 6 Q27 2 31 2 Q35 2 37 6 Q33 10 29 8 Q31 8 33 6" strokeLinecap="round"/>
        
        {/* Right branch */}
        <path d="M60 45 Q70 42 77 38" strokeLinecap="round"/>
        <circle cx="79" cy="36" r="3"/>
        <path d="M79 36 Q83 34 87 36 Q85 32 81 32 Q77 32 75 36 Q79 40 83 38 Q81 38 79 36" strokeLinecap="round"/>
        
        {/* Right upper branch */}
        <path d="M60 25 Q70 22 77 18" strokeLinecap="round"/>
        <circle cx="79" cy="16" r="3"/>
        <path d="M79 16 Q83 14 87 16 Q85 12 81 12 Q77 12 75 16 Q79 20 83 18 Q81 18 79 16" strokeLinecap="round"/>
        
        {/* Top flowers */}
        <circle cx="60" cy="5" r="3"/>
        <path d="M60 5 Q56 3 52 5 Q54 1 58 1 Q62 1 64 5 Q60 9 56 7 Q58 7 60 5" strokeLinecap="round"/>
        
        {/* Center flower */}
        <circle cx="60" cy="35" r="3"/>
        <path d="M60 35 Q56 33 52 35 Q54 31 58 31 Q62 31 64 35 Q60 39 56 37 Q58 37 60 35" strokeLinecap="round"/>
      </g>
      
      {/* Small leaves */}
      <path d="M45 30 Q40 28 42 25" strokeLinecap="round"/>
      <path d="M65 40 Q70 38 68 35" strokeLinecap="round"/>
      <path d="M50 20 Q45 18 47 15" strokeLinecap="round"/>
      <path d="M70 25 Q75 23 73 20" strokeLinecap="round"/>
    </g>
  </svg>
);

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex gap-8 text-center">
      <div className="flex flex-col">
        <span className="text-5xl font-bold text-white">{String(timeLeft.days).padStart(3, '0')}</span>
        <span className="text-sm text-gray-200 mt-1">Hari</span>
      </div>
      <div className="flex flex-col">
        <span className="text-5xl font-bold text-white">{String(timeLeft.hours).padStart(2, '0')}</span>
        <span className="text-sm text-gray-200 mt-1">Jam</span>
      </div>
      <div className="flex flex-col">
        <span className="text-5xl font-bold text-white">{String(timeLeft.minutes).padStart(2, '0')}</span>
        <span className="text-sm text-gray-200 mt-1">Menit</span>
      </div>
      <div className="flex flex-col">
        <span className="text-5xl font-bold text-white">{String(timeLeft.seconds).padStart(2, '0')}</span>
        <span className="text-sm text-gray-200 mt-1">Detik</span>
      </div>
    </div>
  );
};

const CountdownSection = () => {
  //di akad diganti turut mengundang
  return (
    <section className="relative w-full min-h-screen flex justify-center items-center bg-sage text-white overflow-hidden">

      {/* Background overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      {/* Background couple image effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
      
      {/* Main content container */}
      <div className="relative z-10 w-full max-w-md mx-auto flex flex-col items-center text-center px-8 py-12 bg-white bg-opacity-10 backdrop-blur-md rounded-3xl border border-white border-opacity-20 shadow-2xl">
        
        {/* Decorative flower illustration */}
        <div className="mb-8">
          <FlowerIcon />
        </div>
        
        {/* Countdown text */}
        <div className="mb-2">
          <p className="text-lg font-light tracking-widest text-gray-200">Hitung Mundur</p>
        </div>
        
        {/* Main heading */}
        <h1 className="text-3xl font-light mb-6 leading-tight">
          Hari Bahagia Kami
        </h1>
        
        {/* Date */}
        <p className="text-lg font-light mb-12 text-gray-200">
          Sabtu, 08 November 2025
        </p>
        
        {/* Countdown timer */}
        <div className="mb-12">
          <CountdownTimer targetDate="2025-11-08T09:00:00Z" />
        </div>
        
        {/* Description text */}
        <p className="text-sm font-light leading-relaxed mb-8 max-w-sm text-gray-200">
          Bergabunglah bersama Kami menyaksikan sekaligus merayakan terbentuknya ikatan suci ini. Kami ingin Anda menjadi bagian dari hari istimewa kami.
        </p>
        
        {/* Save the date button */}
        <a
            href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Pernikahan+Fauzan+%26+Ratih&dates=20251108T063000Z/20251108T100000Z&details=Bergabunglah+bersama+kami+merayakan+hari+istimewa+Fauzan+%26+Ratih.&location=Jakarta,+Indonesia"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white bg-opacity-20 backdrop-blur-sm border border-white border-opacity-30 text-white px-8 py-3 rounded-full font-light tracking-wide hover:bg-opacity-30 transition-all duration-300"
          >
            <Calendar size={16} />
            Simpan Tanggalnya!
          </a>


      </div>
      
      {/* Subtle background decorative elements */}
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-white bg-opacity-5 rounded-full -mb-16 -ml-16"></div>
      <div className="absolute top-0 right-0 w-24 h-24 bg-white bg-opacity-5 rounded-full -mt-12 -mr-12"></div>
    </section>
  );
};



// EVENT DETAILS SECTION COMPONENT
const EventDetailsSection: React.FC = () => {
    const venue = {
        name: "Buni Manten",
        address: "Jl. Kihajar Dewantara, Sawah Lama, Kec. Ciputat, Kota Tangerang Selatan, Banten 15413",
        mapsUrl: "https://maps.app.goo.gl/B6arvEVG6D74d3EBA"
    };

    return (
        <Section id="location">
            <h2 className="font-playfair text-4xl text-brand-gold text-center">Waktu & Tempat</h2>
            <div className="flex flex-col md:flex-row gap-8 w-full mt-4">
                {/* tambahan jika di buni */}
                <div className="flex-1 bg-white p-8 rounded-lg shadow-lg text-center text-brand-dark">
                    <h3 className="font-playfair text-3xl text-brand-gold">RESEPSI</h3>
                    <p className="font-lato mt-4 font-bold">Sabtu, 08 November 2025</p>
                    <p className="font-lato">13:30 - 17:00 WIB</p>
                    <hr className="my-4 border-brand-gold/20"/>
                    <p className="font-lato font-bold">{venue.name}</p>
                    <p className="font-lato text-sm">{venue.address}</p>
                    <a href={venue.mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 px-6 py-2 border border-brand-gold text-brand-gold rounded-full hover:bg-brand-gold hover:text-white transition-colors">
                        <LocationPinIcon /> Lihat Lokasi
                    </a>
                </div>
            </div>
        </Section>
    );
};



// STORY SECTION COMPONENT
const StorySection: React.FC = () => (
    <Section id="story" className="bg-white">
        <h2 className="font-playfair text-4xl text-brand-gold text-center">Perjalanan Cinta</h2>
        <div className="mt-8 w-full max-w-xl">
            <div className="relative border-l-2 border-brand-gold/30 ml-4 pl-8 py-4">
                 <div className="absolute -left-2 top-4 w-4 h-4 bg-brand-gold rounded-full border-4 border-white"></div>
                 <h3 className="font-playfair text-xl text-brand-dark">Awal Bertemu</h3>
                 <p className="font-lato text-brand-dark/70">26 Agustus 2024</p>
                 <p>Semuanya berawal di Leverate.
                 Ratih datang sebagai karyawan baru, sementara Fauzan sudah lebih dulu ada di sana. Obrolan ringan sepulang kerja berubah jadi cerita panjang di WhatsApp. Dari tatapan singkat di kantor, hingga menjalani hobi bersama, perasaan itu tumbuh begitu alami.
                  </p>
            </div>
            <div className="relative border-l-2 border-brand-gold/30 ml-4 pl-8 py-4">
                 <div className="absolute -left-2 top-4 w-4 h-4 bg-brand-gold rounded-full border-4 border-white"></div>
                 <h3 className="font-playfair text-xl text-brand-dark">Menjalani Hubungan</h3>
                 <p className="font-lato text-brand-dark/70">26 September 2024</p>
                 <p>Tak butuh waktu lama, hanya dalam hitungan minggu, Fauzan mantap menyampaikan niat untuk menikahi Ratih. Dan Ratih pun berkata “iya.”
                  </p>
            </div>
            <div className="relative ml-4 pl-8 py-4">
                 <div className="absolute -left-2 top-4 w-4 h-4 bg-brand-gold rounded-full border-4 border-white"></div>
                 <h3 className="font-playfair text-xl text-brand-dark">Hari Pernikahan</h3>
                 <p className="font-lato text-brand-dark/70">14 Februari 2025</p>
                 <p>Sejak itu, langkah demi langkah kami jalani bersama—mendaki gunung, menyelam, olahraga, tertawa, hingga yakin melangkah menuju hari terindah: hari pernikahan kami.</p>
            </div>
        </div>
        <p className="font-lato italic text-center mt-8 text-brand-dark max-w-2xl">
            "Cinta sejati bukanlah menemukan seseorang yang sempurna, tetapi belajar melihat seseorang yang tidak sempurna menjadi sempurna."
        </p>
    </Section>
);

// INSTAGRAM FILTER SECTION
const sampleImages = [
    {
      src: "/images/our/moment1.webp",
      alt: "Professional studio portrait session",
    },
    {
      src: "/images/our/moment2.webp",
      alt: "Romantic couple portrait",
    },
    {
      src: "/images/our/moment3.webp",
      alt: "Beautiful wedding moment",
    },
    {
      src: "/images/our/our1.webp",
      alt: "Beautiful wedding moment",
    },
    {
      src: "/images/our/our2.webp",
      alt: "Beautiful wedding moment",
    },
    {
      src: "/images/our/our3.webp",
      alt: "Beautiful wedding moment",
    },
    {
      src: "/images/our/our4.webp",
      alt: "Beautiful wedding moment",
    },
    {
      src: "/images/our/our5.webp",
      alt: "Beautiful wedding moment",
    },
    {
      src: "/images/our/our6.webp",
      alt: "Beautiful wedding moment",
    },
    {
      src: "/images/our/our7.webp",
      alt: "Beautiful wedding moment",
    },
    {
      src: "/images/our/our8.webp",
      alt: "Beautiful wedding moment",
    },
    {
      src: "/images/our/our9.webp",
      alt: "Beautiful wedding moment",
    },
  ];
  
  

// GIFTING SECTIONS
const GiftSection: React.FC = () => {
    const [copied, setCopied] = useState('');

    const handleCopy = (key: string, value: string) => {
        navigator.clipboard.writeText(value);
        setCopied(key);
        setTimeout(() => setCopied(''), 2000);
    };

    const bankAccounts = [
        { key: 'bca_fauzan', bank: 'BCA', name: 'Fauzan Habiburrohman', number: '5010360848' },
        { key: 'bca_ratih', bank: 'MANDIRI', name: 'ST. Ratih Nurwanti', number: '1630005520807' }
    ];

    const giftAddress = {
        recipient: "Fauzan & Ratih",
        address: "Patio Premier A01, Jl. Palapa No.62, RT.3/RW.18, Serua, Kec. Ciputat, Kota Tangerang Selatan, Banten 15414"
    };

    return (
        <Section id="gifts" className="bg-white">
            <div className="flex flex-col items-center text-center">
                <h2 className="font-playfair text-4xl text-brand-gold">Hadiah Pernikahan</h2>
                <p className="font-lato mt-4 text-brand-dark max-w-2xl">
                    Doa restu Anda adalah hadiah terindah bagi kami. Namun, jika Anda ingin memberikan tanda kasih, kami dengan senang hati menerimanya.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mt-8">
                {bankAccounts.map(acc => (
                    <div key={acc.key} className="bg-sage-light p-6 rounded-lg text-center">
                        <BankIcon className="mx-auto" />
                        <p className="font-lato font-bold mt-2">{acc.bank}</p>
                        <p className="font-lato text-lg">{acc.number}</p>
                        <p className="font-lato text-sm">a/n {acc.name}</p>
                        <button onClick={() => handleCopy(acc.key, acc.number)} className="mt-4 flex items-center justify-center gap-2 w-full px-4 py-2 border border-brand-gold text-brand-gold rounded-full hover:bg-brand-gold hover:text-white transition-colors">
                           <CopyIcon /> {copied === acc.key ? 'Tersalin!' : 'Salin Rekening'}
                        </button>
                    </div>
                ))}
            </div>

                {/* ilangin kalau di akad */}
            <div className="flex flex-col items-center text-center mt-16">
                <h2 className="font-playfair text-4xl text-brand-gold">Kirim Kado</h2>
                 <div className="bg-sage-light p-6 rounded-lg text-center mt-8 w-full max-w-md">
                    <GiftIcon className="mx-auto" />
                    <p className="font-lato font-bold mt-2">Penerima: {giftAddress.recipient}</p>
                    <p className="font-lato text-sm">{giftAddress.address}</p>
                    <button onClick={() => handleCopy('address', giftAddress.address)} className="mt-4 flex items-center justify-center gap-2 w-full px-4 py-2 border border-brand-gold text-brand-gold rounded-full hover:bg-brand-gold hover:text-white transition-colors">
                        <CopyIcon /> {copied === 'address' ? 'Tersalin!' : 'Salin Alamat'}
                    </button>
                </div>
            </div>
        </Section>
    );
};


// CLOSING SECTION
const ClosingSection: React.FC = () => (
    <section id="closing" className="relative w-full py-16 md:py-24 px-6 md:px-12 flex justify-center bg-center bg-fixed text-white"   style={{ backgroundImage: `url('/images/bgsage.webp')` }}>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center gap-8 text-center">
            <h2 className="font-playfair text-4xl">Terima Kasih</h2>
            <p className="font-lato max-w-2xl">
                Atas kehadiran dan doa restu Bapak/Ibu/Saudara/i, kami mengucapkan terima kasih. Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Anda berkenan hadir untuk memberikan doa restu kepada kami.
            </p>
            <div className="flex items-center gap-4 mt-4">
                <HeartIcon />
                <h3 className="font-playfair text-2xl">Fauzan & Ratih</h3>
                <HeartIcon />
            </div>
        </div>
    </section>
);


// FOOTER
const Footer: React.FC = () => (
    <footer className="bg-sage-light text-brand-dark text-white py-8 px-6 text-center">
        <p className="font-lato">Made with ❤️ by Ojan </p>
    </footer>
);


// MAIN APP COMPONENT
function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [messages, setMessages] = useState<RsvpMessage[]>([]);

  useEffect(() => {
    if (isOpened) {
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'hidden';
    }
  }, [isOpened]);

  const handleOpenInvitation = () => {
    setIsOpened(true);
  };
  
  const handleRsvpSubmit = (message: Omit<RsvpMessage, 'id'>) => {
    setMessages(prev => [...prev, { ...message, id: Date.now() }]);
  };


  if (!isOpened) {
    return <HeroSection onOpen={handleOpenInvitation} />;
  }

  return (
    <div className="font-lato bg-sage-light text-brand-dark">
  
      <main>
        <AudioPlayer />
        <Slideshow />
        <WeddingOverlay />
        <Slideshow />
        <VerseSection />
        <CoupleSection />
        <EventDetailsSection />
        <StorySection />
        <PhotoSection images={sampleImages} />
        {/* <RsvpSection messages={messages} onSubmit={handleRsvpSubmit} /> */}
        <GiftSection />
        <CountdownSection />
        <ClosingSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
