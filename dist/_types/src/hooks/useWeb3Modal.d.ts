export declare function useWeb3Modal(): {
    isOpen: boolean;
    open: (options?: import("@web3modal/core/src/controllers/ModalCtrl").OpenOptions | undefined) => Promise<void>;
    close: () => void;
    setDefaultChain: (selectedChain: import("@wagmi/chains").Chain | undefined) => void;
};
