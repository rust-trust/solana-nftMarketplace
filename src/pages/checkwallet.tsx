import type { NextPage } from "next";
import Head from "next/head";
import { CheckWalletView } from "../views";

const CheckWallet: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>NFT Marketplace</title>
        <meta
          name="description"
          content="NFT Marketplace"
        />
      </Head>
      <CheckWalletView />
    </div>
  );
};

export default CheckWallet;
