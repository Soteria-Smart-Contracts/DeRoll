//SPDX-License-Identifier:UNLICENSE
pragma solidity ^0.8.17;


contract DeRoll{

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

    mapping(address => WorkContract[]) ProprietorContracts;
    mapping(address => mapping(uint256 => WorkContract)) EmployeeAwaiting; 
    mapping(address => mapping(uint256 => WorkContract)) EmployeeActive;


    function CreateNewWorkContract(string memory pAlias, string memory eAlias, address Employee, string memory WorkDescription) public payable {
        require(msg.value >= 1000000000000000);
        
        uint256 NewPropriID = ProprietorLatest[msg.sender] + 1;
        uint256 NewEmployAwID = EmployeeAwaiting


    }







}