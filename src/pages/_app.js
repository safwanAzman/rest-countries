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
    </ThemeProvider>
  );
}
