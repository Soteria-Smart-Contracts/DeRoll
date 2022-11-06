let account;
const ABI = window.abi;
let contract;
let PIDs = [];
const contractAddress = "0x5E1271b0964357c0BF7CfcC2E3F05C04d77AD659";

loginWithEth();

let accountInterval = setInterval(function() {
    if (web3.eth.accounts[0] !== account) {
      account = web3.eth.accounts[0];
      loginWithEth();
    }
  }, 300);

async function loginWithEth(){
    if(window.ethereum){
        await ethereum.request({ method: 'eth_requestAccounts' });
        window.web3 = await new Web3(ethereum);
        accountarray = await web3.eth.getAccounts();
        contract = await new window.web3.eth.Contract(ABI, contractAddress, window.web3);
        account = accountarray[0];
        document.getElementById('walletbuton').innerText = "Wallet Connected";
        document.getElementById('walletbuton').style.backgroundColor = '#4353ff';
        document.getElementById('walletbuton').style.color = 'white';
    } else { 
        alert("No ETHER Wallet available")
    }
}

async function CreateWorkContract(){
    pAlias = document.getElementById('pAlias').value;
    eAlias = document.getElementById('eAlias').value;
    Addy = document.getElementById('AddyInput').value;
    Desc = document.getElementById('DescInput').value;
    EtherInput = BigInt(document.getElementById('EtherInput').value * 1000000000);

    Ether = BigInt(EtherInput * BigInt(1000000000)).toString();

    if(Addy.length != 42){
        alert("Employee Address is invalid")
        return("Invalid Address")
    }

    await contract.methods.CreateNewWorkContract(pAlias, eAlias, Addy, Desc).send({from: account, value: Ether, gas: 3000000});
}

async function UpdateProprietorContracts(){
    await GetProprietorIDs();
    let Contracts = [];

    index = 0;
    while(index < PIDs.length){
        Contracts.push(await GetContractDetails(PIDs[index]));
        index++
    }

    newcard = document.createElement("div");
    newcard.className = "NFTcard";
    newcard.id = indexid;
    let img = '<img class="nftimage" src="src/images/collection/' + indexid + '.png"></img>"';
    let BlockscoutLink = 'https://blockscout.com/etc/mainnet/token/0x2001d679210c0e4531f5c07155d8e3677dd388ae/instance/' + indexid +  '/token-transfers';
    newcard.innerHTML = img + '<a class="nftID head">MoonBird ID:</a>' + '<br>' + '<a class="nftID">' + indexid + '</a>' + '<br>' + '<a class="nftID head">MoonBird Rank:</a>' + '<br>' + '<a class="nftID">' + index + '</a>' + '<br>' + '<a class="nftID scout" href="' + BlockscoutLink + '" target="_blank">View On Blockscout</a>';
    document.getElementById("CollectionContainer").appendChild(newcard);


    console.log(Contracts);
}

async function GetProprietorIDs(){
    index = 0;
    while(index <= 4){
        try{
            PIDs.push(await contract.methods.ProprietorContracts(account, index).call());
         } catch(err){}
         index++;
    }
    console.log(PIDs)
}

async function GetContractDetails(){
    Contract = await contract.methods.WorkContracts(3).call();
    return Contract;
}