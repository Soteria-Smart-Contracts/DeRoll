let account;
const ABI = window.abi;
const contractAddress = "0x2001D679210C0e4531f5C07155d8e3677Dd388ae";

loginWithEth();

async function loginWithEth(){
    if(window.ethereum){
        await ethereum.request({ method: 'eth_requestAccounts' });
        window.web3 = await new Web3(ethereum);
        await getID();
        if (netID != 61){
            console.log("The current Metamask/Web3 network is not Ethereum Classic, please connect to the Ropsten test network."); //CHANGE FOR REAL CROWDSALE TO ETC
            alert("The current Metamask/Web3 network is not ETC, please connect to the Ethereum Classic test network.");
            showOverlay();
            return("Failed to connect")
        }
        accountarray = await web3.eth.getAccounts();
        contract = await new window.web3.eth.Contract(ABI, contractAddress, window.web3);
        account = accountarray[0];
        getsupply();
        await ReturnIds();
        LoadNFTs();
    } else { 
        alert("No ETHER Wallet available")
    }
}