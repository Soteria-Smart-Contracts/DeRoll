//SPDX-License-Identifier:UNLICENSE
pragma solidity ^0.8.17;


contract DeRoll{
    //Variable and Struct Declarations
    struct WorkContract{
        address Proprietor;
        string ProprietorAlias;
        address Employee;
        string EmployeeAlias;
        string WorkDescription;
        bool WorkCompleteRequest;
        bool WorkComplete;
        uint256 EtherPayment;
    }

    //Variable and Struct Declarations
    mapping(address => WorkContract[]) ProprietorContracts;
    mapping(address => WorkContract[]) EmployeeAwaiting; 
    mapping(address => WorkContract[]) EmployeeActive;


    function CreateNewWorkContract(string memory pAlias, string memory eAlias, address payable Employee, string memory WorkDescription) public payable {
        require(msg.value >= 1000000000000000);

        WorkContract memory NewWorkContract = WorkContract(msg.sender, pAlias, Employee, eAlias, WorkDescription, false, false, msg.value);

        ProprietorContracts[msg.sender].push(NewWorkContract);
        EmployeeAwaiting[msg.sender].push(NewWorkContract);





    }







}