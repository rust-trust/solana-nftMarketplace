import { FC, useEffect, useState } from "react"
import styles from "../styles/custom.module.css"

export const FetchRariableNfts: FC = () => {

    const [address, setAddress] = useState(null);
    const [nfts, setNfts] = useState([]);
    const [pageItems, setPageItems] = useState(null)
    const [page, setPage] = useState(1)

    // 41xhAz1SqXPLRMVC4ZjDs6yh92T88w8rrquDNy6fqbPc
    // 7TXr6pVsMVEjXk92wsVpQZkRjKD6KQx7a5kEkZjFd6h9
    // DSwfRF1jhhu6HpSuzaig1G19kzP73PfLZBPLofkw6fLD
    // GoLMLLR6iSUrA6KsCrFh7f45Uq5EHFQ3p8RmzPoUH9mb

    const getNftData = async () => {
        const response = await fetch(
            
            " https://api.rarible.org/v0.1/items/byCollection?collection=SOLANA:DSwfRF1jhhu6HpSuzaig1G19kzP73PfLZBPLofkw6fLD"
        );
        const data = await response.json();
        setNfts(data.items);
        console.log(data);
    };

    useEffect(() => {
        getNftData();
    }, [address]);


    //   // paging
    //   const getPage = async (page, perPage) => {
    //     const pageItems = nfts.items.slice(
    //       (page - 1) * perPage,
    //       page * perPage
    //     )

    //     // fetch metadata of NFTs for page
    //     let nftData = []
    //     for (let i = 0; i < pageItems.length; i++) {
    //       let fetchResult = await fetch(pageItems[i].uri)
    //       let json = await fetchResult.json()
    //       nftData.push(json)
    //     }
    //     console.log(nftData)
    //     // set state
    //     setPageItems(nftData)
    //   }

    //   // previous page
    //   const prev = async () => {
    //     if (page - 1 < 1) {
    //       setPage(1)
    //     } else {
    //       setPage(page - 1)
    //     }
    //   }

    //   // next page
    //   const next = async () => {
    //     setPage(page + 1)
    //   }


    //   // fetch metadata for NFTs when page or candy machine changes
    //   useEffect(() => {
    //     if (!nfts) {
    //       return
    //     }
    //     getPage(page, 3)
    //   }, [nfts, page])

    return (
        <div>

            <div className={styles.gridNFT}>
                {nfts.map((nft) => (
                    <div className={styles.innerwrapper}>
                        <div className={styles.content}>
                            <img
                                src={nft?.meta?.content[0]?.url}
                                alt={nft?.meta?.name}
                                className={styles.imgnft}
                            />
                            <div className="container mx-auto mt-2">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ">
                                    <div className="flex justify-center ">
                                        <div className={styles.nftinfo}>
                                            <div className={styles.nftinfoname}> {nft?.meta?.name}  </div>

                                        </div>
                                    </div>
                                    <div className="flex justify-center ">
                                        <div className={styles.nftinfo}>
                                            <div className={styles.nftinfoname}> {nft?.blockchain}  </div>

                                        </div>
                                    </div>

                                </div>
                                <button
                                            className="px-8 btn animate-pulse bg-gradient-to-r from-[#9945FF] to-[#14F195] hover:from-pink-500 hover:to-yellow-500 ..."
                                        // onClick={buy}
                                        >
                                            Buy
                                        </button>
                                {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ">
                                    <div className="flex justify-center ">
                                        <button
                                            className="px-8 btn animate-pulse bg-gradient-to-r from-[#9945FF] to-[#14F195] hover:from-pink-500 hover:to-yellow-500 ..."
                                        // onClick={buy}
                                        >
                                            Buy
                                        </button>
                                    </div>
                                    <div className="flex justify-center ">
                                        <div className={styles.nftinfo}>
                                            <div className={styles.nftinfoname}> {nft?.blockchain}  </div>

                                        </div>
                                    </div>
                                    

                                </div> */}
                               

                            </div>

                        </div>
                    </div>
                ))}
            </div>

        </div>

   
    )
}
