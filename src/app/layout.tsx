import type { Metadata } from "next";
import "./globals.css";
import {Montserrat} from '@next/font/google'
import { ChakraProvider } from '@chakra-ui/react'
import light from "./themes/light";

export const metadata: Metadata = {
  title: "Portfolio",
};

const montserrat = Montserrat ({
  subsets: ['latin'],
  weight:'400'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
      className={montserrat.className}>
      <ChakraProvider theme={light}>
        {children}
      </ChakraProvider>
      </body>
    </html>
  );
}
