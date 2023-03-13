import React from 'react'
import { useEffect, useState } from "react";

//  https://api.rarible.org/v0.1/items/byOwner/?owner=ETHEREUM:0x4765273c477c2dc484da4f1984639e943adccfeb
const GetRandomNft = () => {
      

    const [nfts, setNfts] = useState([]);
    const [address, setAddress] = useState(null);
  
    const getNftData = async () => {
      const response = await fetch(
        " https://api.rarible.org/v0.1/items/byOwner/?owner=ETHEREUM:0x4765273c477c2dc484da4f1984639e943adccfeb"
      );
      const data = await response.json();
      setNfts(data.items);
      console.log(data);
    };
  
    useEffect(() => {
      getNftData();
    }, [address]);

    // const randomNft = data[Math.floor(Math.random() * data.length)];
    return (
        <div>
            <button  onClick={GetRandomNft } className="px-12 m-2 btn animate-pulse bg-gradient-to-r from-[#9945FF] to-[#14F195] hover:from-pink-500 hover:to-yellow-500 ...">
                Random UNO
            </button>
            <div className="secondP">
                
            </div>
        </div>
    )
}
export default GetRandomNft
