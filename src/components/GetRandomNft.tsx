import React from 'react'
import { useState } from "react";

const [data, setData] = useState([]);
const getNftData = () => {
    const options = { method: "GET", headers: { accept: "application/json" } };
    // https://api.opensea.io/api/v1/assets
    // https://api.rarible.org/v0.1/items/byOwner/?owner=ETHEREUM:0x4765273c477c2dc484da4f1984639e943adccfeb
    fetch("https://api.opensea.io/api/v1/assets", options)
        .then((response) => response.json())
        .then((response) => {
            setData(response.assets);
            console.log(response);
        })
        .catch((err) => console.error(err));
};

//  https://api.rarible.org/v0.1/items/byOwner/?owner=ETHEREUM:0x4765273c477c2dc484da4f1984639e943adccfeb
export default function GetRandomNft() {
    return (
        <div className="secondP">
            {data.map((nft, index) => {
                return (
                    <div key={index}>
                        <img src={nft.image_url} alt={"nft.im"} />
                        <p>{nft.name}</p>
                        <p>{nft.id}</p>
                        <p>{nft.asset_contract.opensea_seller_fee_basis_points}</p>
                    </div>
                );
            })}
        </div>
    )
}
