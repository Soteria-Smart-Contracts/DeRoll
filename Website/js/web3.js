let account;
const ABI = window.abi;
const contractAddress = "0x2001D679210C0e4531f5C07155d8e3677Dd388ae";

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
    pAlias = document.getElementById('pAlias').innerText;
    eAlias = document.getElementById('eAlias').innerText;
    Addy = document.getElementById('AddyInput').innerText;
    Desc = document.getElementById('DescInput').innerText;
    EtherInput = BigInt(document.getElementById('EtherInput').value * 1000000000);

    Ether = BigInt(EtherInput * BigInt(1000000000)).toString();

    if(Addy.length =! 42){
        alert("Employee Address is invalid")
        return("Invalid Address")
    }


}