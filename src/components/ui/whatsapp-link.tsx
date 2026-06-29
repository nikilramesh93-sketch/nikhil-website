import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";

export const WHATSAPP_NUMBER = "919019494768";
export const WHATSAPP_DISPLAY = "+91 90194 94768";

export function buildWhatsAppUrl(message?: string): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

interface WhatsAppIconProps {
  size?: number;
  className?: string;
}

export function WhatsAppIcon({ size = 18, className = "" }: WhatsAppIconProps) {
  return (
    <Image
      src="/icons/whatsapp.svg"
      alt=""
      width={size}
      height={size}
      className={className}
      aria-hidden
    />
  );
}

interface WhatsAppLinkProps {
  message?: string;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}

export function WhatsAppLink({ message, className = "", style, children }: WhatsAppLinkProps) {
  return (
    <a
      href={buildWhatsAppUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      style={style}
    >
      {children}
    </a>
  );
}
