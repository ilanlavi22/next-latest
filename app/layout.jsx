import './globals.css';
import Navbar from './shared/Navbar';
import WordGenerator from './shared/WorGenerator';

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>Next 13 Latest</title>
        <meta name='description' content='NextJs 13 App' />
        <link rel='icon' href='/favicon.ico' />
      </head>
      <body>
        <Navbar />
        <main>
          {children}
          {/* <WordGenerator /> */}
        </main>
      </body>
    </html>
  );
}
