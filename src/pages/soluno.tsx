import type { NextPage } from "next"
import Head from "next/head"
import { SolUnoView } from "../views"

const SolUno: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Nft Marketplace</title>
        <meta name="description" content="Basic Functionality" />
      </Head>
      <SolUnoView />
    </div>
  )
}

export default SolUno
