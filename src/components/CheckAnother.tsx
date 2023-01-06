
import { useState } from 'react'
import styles from '../styles/AddressForm.module.css'
import AddressForm from '../components/AddressForm'
import * as Web3 from '@solana/web3.js'

const  CheckAnother = () => {
  const [balance, setBalance] = useState(0)
  const [address, setAddress] = useState('')
  const [isExecutable, setIsExecutable] = useState(false);

  //This will validate that whatever you pass in is actually a Solana address
  const addressSubmittedHandler = (address: string) => {
    try {
      setAddress(address)
      const key = new Web3.PublicKey(address)
      const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'))
      
      connection.getBalance(key).then(balance => {
        setBalance(balance / Web3.LAMPORTS_PER_SOL)
      })

      connection.getAccountInfo(key).then(info => {
        setIsExecutable(info?.executable ?? false);
      })
    } catch (error) {
      setAddress('')
      setBalance(0)
      alert(error)
    }
  }

  return (
      <div className="md:hero mx-auto p-4 text-center">
          <div className={styles.App}>
              <header className={styles.AppHeader}>
                  <h3 className="text-center text-5xl md:pl-12 font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">
                      Start Your Solana Journey
                  </h3>

                  <AddressForm handler={addressSubmittedHandler} />
                  <p>{`Address: ${address}`}</p>
                  <p>{`Balance: ${balance} SOL`}</p>
                  <p>{`Is it executable? ${isExecutable ? 'Yep' : 'Nope'}`}</p>
              </header>
          </div>

      </div>
    
  )
}

export default CheckAnother