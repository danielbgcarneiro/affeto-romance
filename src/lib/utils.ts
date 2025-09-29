import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const handleWhatsAppClick = (text: string) => {
  const phoneNumber = "+5585981968490";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

  // Open the URL immediately to avoid popup blockers on mobile
  window.open(url, '_blank');

  // Then send the gtag event
  const gtag = (window as any).gtag;
  if (gtag) {
    gtag('event', 'conversion', {
      'send_to': 'AW-17517583541/PKkWCJuMy6MbELW5hKFB',
    });
  }
};
