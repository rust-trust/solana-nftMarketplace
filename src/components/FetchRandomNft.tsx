import { FC, useEffect, useState } from "react"
import styles from "../styles/custom.module.css"
import axios from "axios";

export const FetchRandomNft: FC = () => {

    const [address, setAddress] = useState(null);
    const [nfts, setNfts] = useState([]);
    const [pageItems, setPageItems] = useState(null)
    const [page, setPage] = useState(1)

    // 41xhAz1SqXPLRMVC4ZjDs6yh92T88w8rrquDNy6fqbPc
    // 7TXr6pVsMVEjXk92wsVpQZkRjKD6KQx7a5kEkZjFd6h9
    // DSwfRF1jhhu6HpSuzaig1G19kzP73PfLZBPLofkw6fLD
    // GoLMLLR6iSUrA6KsCrFh7f45Uq5EHFQ3p8RmzPoUH9mb

    async function getNftData(user_id){
        const {data: user} = await axios(
            "https://jsonplaceholder.typicode.com/users/" + user_id
        );
    
        const {data: post} = await axios(
            "https://jsonplaceholder.typicode.com/posts?userId=" + user_id
        );
    
            user.post = post
    
        console.log(user);
    }
    
 

  

    // useEffect(() => {
    //     getNftData();
    // }, [address]);


   
    return (
        <div>
            
            
          
        </div>

   
    )
}
