// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Import this file to use console.log
import "hardhat/console.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

struct Release 
{
    address tokenContract;
    address token;
}
contract ReleaseClub is AccessControl{
   
   Release[] public releases;
   bytes32 public constant MEMBER_ROLE = keccak256("MEMBER_ROLE");
    constructor() {
        // Grant the contract deployer the default admin role: it will be able
        // to grant and revoke any roles
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
    }
   function addMember(address account) external onlyRole (DEFAULT_ADMIN_ROLE) {
       _grantRole(MEMBER_ROLE,account);
   }
   function revokeMember(address account) external onlyRole (DEFAULT_ADMIN_ROLE) {
       _revokeRole(MEMBER_ROLE,account);
   }
   function addRelease(address tokenContract,address token) public onlyRole (MEMBER_ROLE) {
       Release memory newRelease = Release(tokenContract,token);
       releases.push(newRelease);
   }
}
