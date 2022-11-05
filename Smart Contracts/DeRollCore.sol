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


    mapping(address => mapping(uint256 => WorkContract)) ProprietorContracts;
    mapping(address => mapping(uint256 => WorkContract)) EmployeeAwaiting; 
    mapping()





}