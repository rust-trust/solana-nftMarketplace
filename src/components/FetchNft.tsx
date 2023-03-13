import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { Metaplex, walletAdapterIdentity } from "@metaplex-foundation/js"
import { FC, useEffect, useState } from "react"
import styles from "../styles/custom.module.css"

export const FetchNft: FC = () => {
  const [nftData, setNftData] = useState(null)

  const { connection } = useConnection()
  const wallet = useWallet()
  const metaplex = Metaplex.make(connection).use(walletAdapterIdentity(wallet))

  // fetch nfts
  const fetchNfts = async () => {
    if (!wallet.connected) {
      return
    }

    // fetch NFTs for connected wallet
    const nfts = await metaplex
      .nfts()
      .findAllByOwner({ owner: wallet.publicKey })
      .run()

     // fetch off chain metadata for each NFT
    let nftData = []
    for (let i = 0; i < nfts.length; i++) {
      let fetchResult = await fetch(nfts[i].uri)
      let json = await fetchResult.json()
      nftData.push(json)
    }

    // set state
    setNftData(nftData)
  }

  // fetch nfts when connected wallet changes
  useEffect(() => {
    fetchNfts()
  }, [wallet])

  return (
    <div>
      {nftData && (
        <div className={styles.gridNFT}>
          {nftData.map((nft) => (
            <div>

              <div className={styles.innerwrapper}>
                <div className={styles.content}>
                  <img
                    src={nft.image}
                    alt={nft.name}
                    className={styles.imgnft}
                  />
                  <div className="container mx-auto mt-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ">
                      <div className="flex justify-center ">
                        <div className={styles.nftinfo}>
                          <div className={styles.nftinfoname}> {nft.name}  </div>

                        </div>
                      </div>
                      <div className="flex justify-center ">
                        <div className={styles.nftinfo}>
                          {/* <div className={styles.nftinfoname}> {nft?.blockchain}  </div> */}

                        </div>
                      </div>

                    </div>
                    <button
                      className="px-8 btn animate-pulse bg-gradient-to-r from-[#9945FF] to-[#14F195] hover:from-pink-500 hover:to-yellow-500 ..."
                    // onClick={buy}
                    >
                      Buy
                    </button>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

