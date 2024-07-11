import useSigner, { SignerProvider } from '@/state/signer';
import ConnectButton from './ConnectButton.js';

export default function Navbar() {
    return (
        <div className="px-6 fixed left-0 top-0 w-full h-[60px] z-20 lg:h-[80px] bg-transparent flex justify-end items-center">
            <div className="flex items-center w-full h-full gap-3 px-2 lg:w-max sm:px-3">
                <div className="items-center h-full gap-3 flex">
                    <div className="flex items-center justify-center w-full gap-3">
                        <div className="relative items-center h-full flex">
                            <SignerProvider>
                                <ConnectButton />
                            </SignerProvider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
