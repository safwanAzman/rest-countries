import '@/styles/globals.css'
import { ThemeProvider } from "next-themes";
import Navbar from '@/components/navbar';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Navbar/>
      <div className="container mx-auto">
        <div className="px-6">
          <Component {...pageProps} />
        </div>
      </div>
      <footer className="fixed bottom-0 w-full p-1 bg-black ">
          <div className="flex items-center justify-center text-xs text-white">
            Challenge by <a className="px-1 text-teal-500 border-b-2 border-teal-500" href="https://www.frontendmentor.io/">Frontend Mentor.</a>
            Coded by <a className="pl-1 text-teal-500 border-b-2 border-teal-500" href="https://portfolio-v2-self.vercel.app/"> SafwanAzman.</a>
          </div>
      </footer>
    </ThemeProvider>
  );
}
