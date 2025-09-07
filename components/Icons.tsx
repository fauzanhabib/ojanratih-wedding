
import React from 'react';

export const InstagramIcon: React.FC<{className?: string}> = ({className}) => (
  <svg className={`w-6 h-6 ${className}`} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.398 1.363.444 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.046 1.064-.197 1.791-.444 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.398-2.427.444-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.046-1.791-.197-2.427-.444a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.398-1.363-.444-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.046-1.064.197-1.791.444-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.08 2.525c.636-.247 1.363-.398 2.427-.444C9.531 2.013 9.885 2 12.315 2zM12 8.118a4.1 4.1 0 100 8.2 4.1 4.1 0 000-8.2zM12 14.828a2.625 2.625 0 110-5.25 2.625 2.625 0 010 5.25zM16.338 7.325a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z" clipRule="evenodd" />
  </svg>
);

export const CalendarIcon: React.FC<{className?: string}> = ({className}) => (
  <svg className={`w-5 h-5 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
  </svg>
);

export const LocationPinIcon: React.FC<{className?: string}> = ({className}) => (
  <svg className={`w-5 h-5 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"></path>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
  </svg>
);

export const CopyIcon: React.FC<{className?: string}> = ({className}) => (
    <svg className={`w-5 h-5 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
    </svg>
);

export const BankIcon: React.FC<{className?: string}> = ({className}) => (
    <svg className={`w-8 h-8 text-brand-gold ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h8a2 2 0 002-2v-1a2 2 0 012-2h1.945M12 4v7m0 0l-2-2m2 2l2-2"></path>
    </svg>
);

export const GiftIcon: React.FC<{className?: string}> = ({className}) => (
    <svg className={`w-8 h-8 text-brand-gold ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V6a2 2 0 10-2 2h2zm0 13l-4-4h8l-4 4zM4 11h16M4 11a2 2 0 01-2-2V7a2 2 0 012-2h16a2 2 0 012 2v2a2 2 0 01-2 2H4z"></path>
    </svg>
);

export const FacebookIcon: React.FC<{className?: string}> = ({className}) => (
    <svg className={`w-6 h-6 ${className}`} fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
    </svg>
);

export const WhatsAppIcon: React.FC<{className?: string}> = ({className}) => (
    <svg className={`w-6 h-6 ${className}`} fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.34 4.66A10 10 0 0 0 12 2 10 10 0 0 0 2 12c0 2.1.66 4.05 1.83 5.66L2 22l4.34-1.83A10 10 0 0 0 12 22a10 10 0 0 0 10-10c0-2.76-1.12-5.26-2.93-7.07L19.34 4.66zM12 20.5a8.5 8.5 0 0 1-4.3-1.24l-3.03 1.28 1.3-2.95A8.5 8.5 0 0 1 3.5 12 8.5 8.5 0 0 1 12 3.5 8.5 8.5 0 0 1 20.5 12 8.5 8.5 0 0 1 12 20.5zM16.56 14.1c-.2-.1-1.2-.59-1.38-.66-.18-.07-.31-.1-.45.1-.14.2-.52.66-.64.8-.12.14-.24.15-.45.05-.2-.1-.85-.31-1.62-.99-.6-.54-1-1.2-1.12-1.4-.12-.2-.02-.31.07-.4.08-.08.18-.21.27-.31.1-.1.13-.18.2-.3.07-.12.04-.24-.02-.34s-.45-1.08-.6-1.48c-.15-.4-.3-.34-.42-.34h-.4c-.12 0-.3.04-.45.2-.15.16-.58.57-.58 1.4s.6 1.62.68 1.75c.08.12 1.17 1.9 2.82 2.62.38.17.68.27.9.35.48.17.9.14 1.24.09.38-.06 1.2-.49 1.37-.96.17-.48.17-.88.12-.96-.05-.08-.18-.13-.38-.23z" />
    </svg>
);

export const HeartIcon: React.FC<{className?: string}> = ({className}) => (
    <svg className={`w-8 h-8 text-brand-gold ${className}`} fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
    </svg>
);

export const UserIcon: React.FC<{className?: string}> = ({className}) => (
  <svg className={`w-5 h-5 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
  </svg>
);

export const CheckCircleIcon: React.FC<{className?: string}> = ({className}) => (
  <svg className={`w-5 h-5 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
  </svg>
);

export const XCircleIcon: React.FC<{className?: string}> = ({className}) => (
  <svg className={`w-5 h-5 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
  </svg>
);
