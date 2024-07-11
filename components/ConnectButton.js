
import useSigner from "@/state/signer";
import AddressAvatar from "./AddressAvatar";

const ConnectButton = () => {
  const { address, loading, connectWallet } = useSigner();

  if (address) return <AddressAvatar address={address} />;
  return (
    <button
      className="active:scale-95 transition-all flex justify-center items-center border border-blueCustom rounded-md hover:opacity-80 disabled:opacity-80 bg-blueCustom text-primary px-8 py-2 text-sm"
      onClick={connectWallet}
      disabled={loading}
    >
      {loading ? "Loading..." : "Connect Wallet"}
    </button>
  );
};

export default ConnectButton;