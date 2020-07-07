pragma solidity ^0.5.0;

contract Cert {
    uint public currentId = 0 ;
    string[] certfill;

    struct uni {
    uint uid;
    string year;
    string certs;
  }

    mapping(uint => uni) public unis;

    function addCert(uint _uid, string memory _year, string memory _content) public
    {
        currentId ++;
        unis[_uid] = uni(_uid,_year, _content);
    }
  
    }
   