
import React, { useState } from 'react';
import type { RsvpMessage } from '../types';
import { UserIcon, CheckCircleIcon, XCircleIcon } from './Icons';

interface RsvpSectionProps {
  messages: RsvpMessage[];
  onSubmit: (message: Omit<RsvpMessage, 'id'>) => void;
}

export const RsvpSection: React.FC<RsvpSectionProps> = ({ messages, onSubmit }) => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [attendance, setAttendance] = useState<'present' | 'absent'>('present');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.length < 2) {
      setError('Nama harus diisi (min. 2 karakter).');
      return;
    }
    setError('');
    onSubmit({ name, message, attendance });
    setName('');
    setMessage('');
  };
  
  const presentCount = messages.filter(m => m.attendance === 'present').length;
  const absentCount = messages.filter(m => m.attendance === 'absent').length;

  return (
    <section id="rsvp" className="w-full py-16 md:py-24 px-6 md:px-12 flex justify-center bg-white">
        <div className="w-full max-w-4xl mx-auto flex flex-col items-center gap-8">
            <h2 className="font-playfair text-4xl text-brand-gold text-center">Doa & Ucapan</h2>
            <p className="font-lato text-center text-brand-dark max-w-2xl">
                Kirimkan doa dan ucapan terbaik Anda untuk kami di hari bahagia ini.
            </p>

            <form onSubmit={handleSubmit} className="w-full max-w-lg bg-sage-light p-8 rounded-lg shadow-md">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-brand-dark font-lato mb-2">Nama Anda</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-2 border border-brand-gold/30 rounded-md focus:ring-brand-gold focus:border-brand-gold"
                        placeholder="Masukkan nama Anda"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-brand-dark font-lato mb-2">Pesan & Doa</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={4}
                        className="w-full px-4 py-2 border border-brand-gold/30 rounded-md focus:ring-brand-gold focus:border-brand-gold"
                        placeholder="Tuliskan pesan dan doa Anda"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-brand-dark font-lato mb-2">Konfirmasi Kehadiran</label>
                    <div className="flex gap-4">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="radio" name="attendance" value="present" checked={attendance === 'present'} onChange={() => setAttendance('present')} className="form-radio text-brand-gold focus:ring-brand-gold"/>
                            <CheckCircleIcon className="text-green-500" /> Hadir
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="radio" name="attendance" value="absent" checked={attendance === 'absent'} onChange={() => setAttendance('absent')} className="form-radio text-brand-gold focus:ring-brand-gold"/>
                            <XCircleIcon className="text-red-500" /> Tidak Hadir
                        </label>
                    </div>
                </div>
                {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                <button type="submit" className="w-full py-3 bg-brand-gold text-white font-lato tracking-wider rounded-full hover:bg-opacity-80 transition-all duration-300">
                    Kirim Pesan
                </button>
            </form>
            
            <div className="w-full max-w-lg mt-8">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="font-playfair text-2xl text-brand-dark">Pesan ({messages.length})</h3>
                    <div className="flex gap-4 font-lato text-sm">
                        <span>{presentCount} Hadir</span>
                        <span>{absentCount} Tidak Hadir</span>
                    </div>
                </div>
                <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
                    {messages.length > 0 ? messages.map((msg) => (
                        <div key={msg.id} className="bg-sage-light p-4 rounded-lg">
                            <div className="flex items-center gap-3">
                                <UserIcon className="text-brand-gold"/>
                                <div>
                                    <p className="font-bold font-lato text-brand-dark">{msg.name}</p>
                                    <p className="text-sm font-lato text-brand-dark/80">{msg.message || "..."}</p>
                                </div>
                                {msg.attendance === 'present' 
                                    ? <span className="ml-auto text-xs font-bold text-green-600 bg-green-100 px-2 py-1 rounded-full">Hadir</span>
                                    : <span className="ml-auto text-xs font-bold text-red-600 bg-red-100 px-2 py-1 rounded-full">Absen</span>
                                }
                            </div>
                        </div>
                    )).reverse() : (
                        <p className="text-center font-lato text-brand-dark/70">Belum ada pesan. Jadilah yang pertama!</p>
                    )}
                </div>
                <p className="text-xs text-center text-brand-dark/50 mt-4">Mohon maaf! Khusus untuk tamu undangan.</p>
            </div>
        </div>
    </section>
  );
};
