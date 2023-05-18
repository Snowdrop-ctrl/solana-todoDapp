import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { GlowWalletAdapter, PhantomWalletAdapter, SlopeWalletAdapter} from "@solana/wallet-adapter-wallets"
import { clusterApiUrl } from "@solana/web3.js";
import { useMemo } from "react";


// solana connection
// import { Connection, clusterApiUrl } from '@solana/web3.js'
// const connection = new Connection(clusterApiUrl("devnet"))

export const WalletConnectProvider = ({children}) => {
    const network = WalletAdapterNetwork.Devnet
    WalletAdapterNetwork
    // const endpoint = useMemo(() => {
    //     return 
    // })

    const wallets = useMemo(() => [new PhantomWalletAdapter()],[network])

    return (
        <ConnectionProvider endpoint={clusterApiUrl("devnet")}>
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>{children}</WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    )
}