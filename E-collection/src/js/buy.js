import contract from 'truffle-contract'
import AdoptionContract from '@contracts/Adoption.json'

const Buy = {
  contract: null,
  instance: null,

  init: function () {
    let self = this

    self.contract = contract(AdoptionContract)
    self.contract.setProvider(window.web3.currentProvider)
    self.contract.deployed().then(instance => {
      self.instance = instance
    }).catch(err => {
      console.log(err)
    })
    web3 = new Web3(window.web3.currentProvider)
    Buy.bind_events()
    Buy.mark_adopted()
  },

  init_items: function (){
    let data_res = undefined
    $.ajaxSettings.async = false;
    $.getJSON('./static/data/items.json', function (data){
      data_res = data
    })
    $.ajaxSettings.async = true;
    return data_res
  },

  bind_events: function () {
    $(document).on('click', '.buy_item', Buy.handle_adopt)
  },

  mark_adopted: function () {
    var adoptionInstance;

    Buy.contract.deployed().then(function (instance) {
      adoptionInstance = instance;

      // 调用合约的getAdopters(), 用call读取信息不用消耗gas
      return adoptionInstance.getAdopters.call();
    }).then(function (adopters) {
      console.log(adopters)
      for (let i = 0; i < adopters.length; i++) {
        if (adopters[i] !== '0x0000000000000000000000000000000000000000') {
          $('.buy_item').eq(i).text('No Stock').attr('disabled', true);
        }
      }
    }).catch(function (err) {
      console.log(err.message);
    });
  },

  handle_adopt: function (event) {
    console.log($(event.target))
    var itemId = parseInt($(event.target).attr('data-id'))
    console.log(itemId)
    var adoptionInstance;

    web3.eth.getAccounts(function (error, accounts) {
      if (error) {
        console.log(error);
      }
      
      var account = accounts[0];
      Buy.contract.deployed().then(function (instance) {
        adoptionInstance = instance;

        // 发送交易
        return adoptionInstance.adopt(itemId, {
          from: account
        });
      }).then(function (result) {
        Buy.mark_adopted();
      }).catch(function (err) {
        console.log(err.message);
      });
    });

  }

}

export default Buy
