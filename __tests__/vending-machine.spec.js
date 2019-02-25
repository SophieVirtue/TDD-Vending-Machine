const vendingMachine = require("../src/vending-machine.js");

describe("vendingMachine", () => {
  let VendingMachine;

  beforeEach(() => {
    VendingMachine = new vendingMachine("../items.json");
  });

  describe("Single produce item detail search", () => {
    it("should return the name and inventory amount of the item", () => {
      expect(VendingMachine.singleItemInventory("carrot")).toEqual({
        name: "Carrot",
        inventory: 2
      });
    });

    it("should return the name and price of the item", () => {
      expect(VendingMachine.singleItemPrice("carrot")).toEqual({
        name: "Carrot",
        price: 1.75
      });
    });
  });

  describe("All produce inventory search", () => {
    it("should return complete vending machine inventory", () => {
      expect(VendingMachine.produceInventory()).toBe(
        "Orange: 6, Apple: 8, Banana: 4, Carrot: 2, Cucumber: 0, Celery: 10, Kiwi: 3, Mango: 9, Peach: 5, Onion: 7, Zuchini: 1, Tomato: 5"     
      );
    });
  });

  describe("Adding inventory to vending machine", () => {
    it("should return produce count of 144, since there are 12 items with 12 slots each", () => {
      expect(VendingMachine.reStock()).toEqual(144);
    });
  });

  describe("Adding coint inventory to vending machine", () => {
    it("should return coin count of 200,since there are 5 coins with 40 max each", () => {
      expect(VendingMachine.reStockCoins()).toEqual(200);
    });
  });

  
});