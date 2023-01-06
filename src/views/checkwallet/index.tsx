// Next, React
import { FC, useEffect, useState } from "react"
import Link from "next/link"

// Wallet
import { useWallet, useConnection } from "@solana/wallet-adapter-react"

// Components
import { RequestAirdrop } from "../../components/RequestAirdrop"
import pkg from "../../../package.json"

// Store
import useUserSOLBalanceStore from "../../stores/useUserSOLBalanceStore"
import CheckAnother from "../../components/CheckAnother"

export const CheckWalletView : FC = ({}) => {
  const wallet = useWallet()
  const { connection } = useConnection()

  const balance = useUserSOLBalanceStore((s) => s.balance)
  const { getUserSOLBalance } = useUserSOLBalanceStore()

  useEffect(() => {
    if (wallet.publicKey) {
      console.log(wallet.publicKey.toBase58())
      getUserSOLBalance(wallet.publicKey, connection)
    }
  }, [wallet.publicKey, connection, getUserSOLBalance])

  return (
    <div className="md:hero mx-auto p-4">
      <div className="md:hero-content flex flex-col">
     
        <CheckAnother/>
        <div className="text-center">
          <RequestAirdrop />
          {/* {wallet.publicKey && <p>Public Key: {wallet.publicKey.toBase58()}</p>} */}
          {wallet && <p>SOL Balance: {(balance || 0).toLocaleString()}</p>}
        </div>
      </div>
    </div>
  )
}
