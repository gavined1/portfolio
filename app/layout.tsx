// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script'; // Import Script from next/script for better script handling

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Gavin | Portfolio',
  description: 'Welcome to my portfolio!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Chatwoot Widget Script */}
        <Script
          id="chatwoot-widget"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(d,t) {
                var BASE_URL="https://chat.gavined.work";
                var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
                g.src=BASE_URL+"/packs/js/sdk.js";
                g.defer = true;
                g.async = true;
                s.parentNode.insertBefore(g,s);
                g.onload=function(){
                  window.chatwootSDK.run({
                    websiteToken: 'eDcd8P8tzL2UsDfDMipyPdvK',
                    baseUrl: BASE_URL
                  });
                }
              })(document,"script");
            `,
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
