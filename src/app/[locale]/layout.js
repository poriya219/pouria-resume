import { Geist, Geist_Mono } from "next/font/google";
import "../../styles/globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing'; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Pouria Jafarzadeh",
  description: "Pouria's resume",
};

export default async function LocaleLayout({ children, params }) {
  const param = await params;
  const locale = param.locale;
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale)) {
    notFound();
  }
 
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
        <div className="min-h-screen">
        <Header/>
        <div className="px-8">
        {children}
        </div>
        </div>
        <Footer/>
      </NextIntlClientProvider>
        
      </body>
    </html>
  );
}
