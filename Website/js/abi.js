
window.abi = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "Identifier",
				"type": "uint256"
			}
		],
		"name": "AcceptWorkContract",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "Identifier",
				"type": "uint256"
			}
		],
		"name": "ConfirmWorkComplete",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "pAlias",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "eAlias",
				"type": "string"
			},
			{
				"internalType": "address payable",
				"name": "Employee",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "WorkDescription",
				"type": "string"
			}
		],
		"name": "CreateNewWorkContract",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "Proprietor",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "Employee",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "Value",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "ID",
				"type": "uint256"
			}
		],
		"name": "NewWorkContractCreated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "Employee",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "ID",
				"type": "uint256"
			}
		],
		"name": "RequestCompleted",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "Identifier",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "Message",
				"type": "string"
			}
		],
		"name": "RequestWorkComplete",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "Employee",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "ID",
				"type": "uint256"
			}
		],
		"name": "WorkContractAccepted",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "EmployeeActive",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "EmployeeAwaiting",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "IDCounter",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "ProprietorContracts",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "WorkContracts",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "ID",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "Proprietor",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "ProprietorAlias",
				"type": "string"
			},
			{
				"internalType": "address payable",
				"name": "Employee",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "EmployeeAlias",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "WorkDescription",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "Accepted",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "WorkCompleteRequest",
				"type": "bool"
			},
			{
				"internalType": "string",
				"name": "RequestMessage",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "WorkCompleted",
				"type": "bool"
			},
			{
				"internalType": "uint256",
				"name": "EtherPayment",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]