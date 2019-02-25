class vendingMachine {
    constructor(json) {
      this.data = require(json);
    }
  
    singleItemInventory(title) {
      return {
        name: this.data.produce[title].name,
        inventory: this.data.produce[title].inventory
      };
    }
    singleItemPrice(title) {
      return {
        name: this.data.produce[title].name,
        price: this.data.produce[title].price
      };
    }
  
    produceInventory() {
      const totalInventory = Object.entries(this.data.produce);
  
      return totalInventory
        .reduce((string, item) => {
          string.push(`${item[1].name}: ${item[1].inventory}`);
          return string;
        }, [])
        .join(", ");
    }
  
    reStock() {
      const reStockInventory = Object.entries(this.data.produce);
      let reStockCount = 0;
      reStockInventory.map(item => {
        if (item[1].inventory < 12) {
          item[1].inventory = 12;
        }
        reStockCount += item[1].inventory;
      });
      return reStockCount;
    }

    reStockCoins() {
        const reStockCoinsInventory = Object.entries(this.data.change);
        let reStockCoinsCount = 0;
        reStockCoinsInventory.map(change => {
          if (change[1].inventory < 40) {
              change[1].inventory = 40;
          }
          reStockCoinsCount += change[1].inventory;
        });
        return reStockCoinsCount;
    }

    purchaseItem(title, payment) {
        let itemName = this.data.produce[title].name;
        let itemPrice = this.data.produce[title].price;
        let itemInventory = this.data.produce[title].inventory;
    
        let purchase = {
          change: "",
          item: "",
          inventory: ""
        };
    
        if (payment === itemPrice || payment > itemPrice) {
          purchase.change = payment - itemPrice;
          purchase.item = itemName;
          purchase.inventory = itemInventory -= 1;
        }
        return purchase;
    }

    makeChange(payment) {
        let coins = [2, 1, 0.25, 0.1, 0.05];
        let change = {};
    
        for (let i = 0; payment > 0 && i < coins.length; i++) {
          let coinValue = coins[i];
    
          if (coinValue <= payment) {
            change[coinValue] = Math.floor(payment / coinValue);
            payment -= coinValue * change[coinValue];
          }
        }
    
        return change;
    }
}
  
  module.exports = vendingMachine;