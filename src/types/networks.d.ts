declare module '*/assets/networks.json5' {
    export interface INetwork {
        type: string;
        href: string;
        text: string;
        color?: string;
    }
    const networks: INetwork[];
    export default networks;
}
