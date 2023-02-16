import { Html, Head, Main, NextScript } from 'next/document'
import Navbar from '@/components/navbar'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-light-background dark:bg-dark-background">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
