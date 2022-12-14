let account;
const ABI = window.abi;
let contract;
const contractAddress = "0x68b99894178fc5842ef973b0cd13120dd23720b1";

loginWithEth();
UpdateProprietorContracts();
UpdateUnAcceptedContracts();

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
    await loginWithEth();
    PropIDs = await GetProprietorIDs();
    let Contracts = [];
    document.getElementById("pContracts").innerHTML = "";

    index = 0;
    while(index < PropIDs.length){
        current = await GetContractDetails(PropIDs[index])
        Contracts.push(current);
        newcard = document.createElement("a");
        newcard.className = "contractdetail";
        newcard.id = index;
        ether = Number(current[10]) / 1000000000000000000;
        console.log(ether)
        newcard.innerHTML = '<div id="pContracts" class="ContractBox"> <a class="contractdetail">Employee Alias: <e>' + current[2].toString() + '</e></a><a class="contractdetail">Proprietor Alias: <e>' + current[4].toString() + '</e></a><a class="contractdetail">Work Description: <e>' + current[5].toString() + '</e></a><a class="contractdetail">ETC to be paid: <e>' + ether + '</e></a></div>'
        document.getElementById("pContracts").appendChild(newcard);
        index++
    }

    console.log(Contracts);
}

async function UpdateUnAcceptedContracts(){
    await loginWithEth();
    PropIDs = await GetEmployeeUnacceptedIDs();
    let Contracts = [];
    document.getElementById("euContracts").innerHTML = "";

    index = 0;
    while(index < PropIDs.length){
        current = await GetContractDetails(PropIDs[index])
        Contracts.push(current);
        newcard = document.createElement("a");
        newcard.className = "contractdetail";
        newcard.id = index;
        ether = Number(current[10]) / 1000000000000000000;
        console.log(ether)
        newcard.innerHTML = '<div id="pContracts" class="ContractBox"> <a class="contractdetail">Employee Alias: <e>' + current[2].toString() + '</e></a><a class="contractdetail">Proprietor Alias: <e>' + current[4].toString() + '</e></a><a class="contractdetail">Work Description: <e>' + current[5].toString() + '</e></a><a class="contractdetail">ETC to be paid: <e>' + ether + '</e></a></div>'
        document.getElementById("euContracts").appendChild(newcard);
        index++
    }

    console.log(Contracts);
}

async function GetEmployeeUnacceptedIDs(){
    index = 0;
    let PIDs = [];
    while(index <= 4){
        try{
            PIDs.push(await contract.methods.EmployeeAwaiting(account, index).call());
         } catch(err){}
         index++;
    }
    console.log(PIDs)
    return(PIDs)
}


async function GetProprietorIDs(){
    index = 0;
    let PIDs = [];
    while(index <= 4){
        try{
            PIDs.push(await contract.methods.ProprietorContracts(account, index).call());
         } catch(err){}
         index++;
    }
    console.log(PIDs)
    return(PIDs)
}

async function GetContractDetails(ID){
    Contract = await contract.methods.WorkContracts(ID).call();
    return Contract;
}