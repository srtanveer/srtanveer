import { init } from '@emailjs/browser';

// Initialize EmailJS with your public key
if (typeof window !== 'undefined') {
  init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '');
} 