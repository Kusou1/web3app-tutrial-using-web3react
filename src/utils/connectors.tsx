import { InjectedConnector } from "@web3-react/injected-connector";


// 设置支持的链
export const injected = new InjectedConnector({
    supportedChainIds: [
        1, 
        3, 
        4, 
        5, 
        10, 
        42, 
        31337, 
        42161
    ]
})
