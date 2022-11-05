//SPDX-License-Identifier:UNLICENSE
pragma solidity ^0.8.17;


contract DeRoll{
    //Variable and Struct Declarations
    uint256 public IDCounter;

    struct WorkContract{
        uint256 ID;
        address Proprietor;
        string ProprietorAlias;
        address payable Employee;
        string EmployeeAlias;
        string WorkDescription;
        bool WorkCompleteRequest;
        bool WorkComplete;
        uint256 EtherPayment;
    }

    //Mapping Declarations
    mapping(address => WorkContract[]) public ProprietorContracts;
    mapping(address => WorkContract[]) public EmployeeAwaiting; 
    mapping(address => WorkContract[]) public EmployeeActive;

    //Event Declarations
    event NewWorkContractCreated(address Proprietor, address Employee, uint256 Value);


    //Proprietor Functions
    function CreateNewWorkContract(string memory pAlias, string memory eAlias, address payable Employee, string memory WorkDescription) public payable {
        require(msg.value >= 1000000000000000);

        WorkContract memory NewWorkContract = WorkContract(IDcounter++, msg.sender, pAlias, Employee, eAlias, WorkDescription, false, false, msg.value);

        ProprietorContracts[msg.sender].push(NewWorkContract);
        EmployeeAwaiting[msg.sender].push(NewWorkContract);

        emit NewWorkContractCreated(msg.sender, Employee, msg.value);
    }

    //Employee functions
    function AcceptWorkContract(uint256 Identifier) public{
        
    }







}