import './globals.css'

import { Web3Modal } from '../context/web3modal'

export const metadata = {
  title: 'Web3Modal',
  description: 'Web3Modal Example'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Web3Modal>{children}</Web3Modal>
      </body>
    </html>
  )
}
