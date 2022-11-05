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

    mapping(address => uint256) ProprietorLatest;
    mapping(address => mapping(uint256 => WorkContract)) ProprietorContracts;

    mapping(address => uint256) EmployeeAwaitingLatest;
    mapping(address => mapping(uint256 => WorkContract)) EmployeeAwaiting; 
    mapping(address => uint256) EmployeeActiveLatest;
    mapping(address => mapping(uint256 => WorkContract)) EmployeeActive;


    function CreateNewWorkContract(string pAlias, string eAlias, address Employee, string WorkDescription, uint256 EtherPayment){
        
    }







}