import * as CryptoJS from "crypto-js";

class Block {
    public index: number;
    public hash: string;
    public previousHash: string;
    public data: string;
    public timestamp: number;

    // Hash값을 계산하는 static method
    // static method가 아니면 Block class 밖에서 Block.calculateBlockHash로 사용할 수 없다.
    static calculateBlockHash = (index:number, previousHash:string, timestamp:number, data:string) : string => CryptoJS.SHA256(index + previousHash + timestamp + data).toString();
    
    constructor(
        index: number,
        hash: string,
        previousHash: string,
        data: string,
        timestamp: number
    ){
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}



const genesisBlock: Block = new Block(0, "202020202020202", "", "Hello", 123456);

let blockchain: Block[] = [genesisBlock];

const getBlockchain = () : Block[] => blockchain;

const getLatestBlock = () : Block => blockchain[blockchain.length -1];

const getNewTimeStamp = () : number => Math.round(new Date().getTime() / 1000);

export {};