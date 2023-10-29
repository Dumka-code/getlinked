import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import localFont from 'next/font/local'


const inter = Montserrat({ subsets: ['latin'] })


const clash = localFont({
  src: '../../public/fonts/ClashDisplay-Bold.ttf',
  variable: '--font-clash',
})


export const metadata: Metadata = {
  title: 'Getlinked',
  description: 'by Dumka Bipnelo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const body_properties  =  `${clash.variable}   ${inter.className} snap-mandatory snap-y scroll-smooth antialiased text-slate-500 dark:text-slate-400 bg-[#150E28]  flex items-center justify-center` ;
 
  return (
    <html lang="en">
      <body  className={body_properties}>{children}</body>
    </html>
  )
}



