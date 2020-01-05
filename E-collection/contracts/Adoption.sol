pragma solidity ^0.5.0;

contract Adoption {

  address[16] public adopters;  // 保存每个物品的拥有者

    // 购买
  function adopt(uint petId) public returns (uint) {
    // require(petId >= 0 && petId <= 15);  // 确保id在数组长度内

    adopters[petId] = msg.sender;        // 保存调用者地址
    return petId;
  }

  // 返回拥有者信息
  function getAdopters() public view returns (address[16] memory) {
    return adopters;
  }

}