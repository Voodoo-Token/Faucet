// components/FaucetTitle.js
import React from 'react';

export default function FaucetTitle() {
    return (
        <div className="container relative px-0">
            <div className="row">
                <div className="col">
                    <h1 className="iceway-faucet-title text-5xl text-grey opacity-80 font-bold">VOODOO FAUCET</h1>
                </div>
            </div>
            <div className="row justify-center">
                <div className="col-lg-8 col-md-12 col-12">
                    <p className="iceway-faucet-subtitle text-lg mx-auto text-black opacity-80 font-bold" style={{ maxWidth: '801px' }}>Claim Your Free Voodoo Token Now!</p>
                </div>
            </div>
        </div>
    );
}
