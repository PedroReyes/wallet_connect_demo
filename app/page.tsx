"use client";

import { useWeb3Modal } from '@web3modal/ethers/react';

export default function Home() {
   // 4. Use modal hook
  const { open } = useWeb3Modal()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black">
       <>
      <button onClick={() => open()}>Open Connect Modal</button>
      <button onClick={() => open({ view: 'Networks' })}>Open Network Modal</button>
    </>
    </main>
  );
}
