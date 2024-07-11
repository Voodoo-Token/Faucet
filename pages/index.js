import FaucetTitle from "@/components/FaucetTitle";
import Navbar from "@/components/Navbar";
import useSigner, { SignerProvider } from '@/state/signer';
import { requestTokens, hasRequested } from "../Interaction/init.js";
import React, { useState, useEffect } from 'react';

export default function Home() {
    const { signer } = useSigner();
    const [walletConnected, setWalletConnected] = useState(false);
    const [walletAddress, setWalletAddress] = useState("");

    useEffect(() => {
        if (signer === undefined) {
            setWalletConnected(false);
        } else {
            setWalletConnected(true);
            // Get the wallet address from the signer and set it to walletAddress state
            signer.getAddress().then(address => setWalletAddress(address));
        }
    }, [signer]);

    const handleTokenRequest = async () => {
        console.log('handleTokenRequest called');
        const allow = await hasRequested(signer);
        if (allow) {
            alert("You Already have used the Faucet");
            return;
        }
        if (signer && walletAddress) {
            console.log('Requesting tokens...');
            try {
                await requestTokens(signer);
                // console.log('Tokens requested successfully');
            } catch (error) {
                console.error('Error requesting tokens:', error);
            }
        }
    };


    return (
        <div className="text-white min-h-screen flex flex-col p-6 px-4 font-main">
            <Navbar></Navbar>
            <FaucetTitle></FaucetTitle>
            <div className="bg-tertiary-bg container pt-9 pb-4 rounded-t-3xl relative">
                <div className="absolute top-0 left-0 iceway-faucet-request-component-shadow"></div>
                <div className="flex flex-wrap">
                    <div className="iceway-faucet-request-component-embeded col w-full">
                        <span>
                            <form className="" onSubmit={handleTokenRequest}>
                                <div className="flex flex-wrap">
                                    <div className="w-full md:w-3/4 sm:w-full mb-4 px-1">
                                        <input
                                            placeholder="Connect Wallet to load Address"
                                            disabled={walletConnected}
                                            type="text"
                                            className="iceway-faucet-panel-input-text form-control form-control-lg w-full"
                                            value={walletAddress}
                                            onChange={(e) => setWalletAddress(e.target.value)}
                                        />
                                    </div>

                                    <div className="w-full md:w-1/4 sm:w-full mb-4 px-1">
                                        <button
                                            type="button"
                                            className="iceway-faucet-button btn btn-dark btn-lg w-full text-center"
                                            onClick={handleTokenRequest}
                                        >
                                            <div className="iceway-faucet-table-body">
                                                <span>Claim</span>
                                            </div>
                                        </button>



                                    </div>
                                </div>
                            </form>
                            <div className="flex flex-wrap">
                                {/* This section is empty in your original code, add any other components or elements you want to display here */}
                            </div>
                            <div className="flex flex-wrap">
                                <div className="w-full px-1">
                                    <div>
                                        {/* This section is empty in your original code, add any other components or elements you want to display here */}
                                    </div>
                                </div>
                            </div>
                        </span>
                    </div>
                </div>
            </div>

        </div>
    );

}
