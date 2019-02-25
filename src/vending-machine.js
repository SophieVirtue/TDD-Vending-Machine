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
          if (change[1].inventory < change[1].max) {
              change[1].inventory = change[1].max;
          }
          reStockCoinsCount += change[1].max;
        });
        return reStockCoinsCount;
      }
  }
  
  module.exports = vendingMachine;