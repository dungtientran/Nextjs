import Header from '@/components/Header'
import ListPost from '@/pages/[list]';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
  
      <head />
      <body>
        <Header />
        {/* <ListPost /> */}
        {children}
      </body>
    </html>
  )
}
