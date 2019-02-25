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

  describe("Adding coin inventory to vending machine", () => {
    it("should return coin count of 200,since there are 5 coins with 40 max each", () => {
      expect(VendingMachine.reStockCoins()).toEqual(200);
    });
  });

  describe("Puchasing a product from the vending machine", () => {
    it("should return an item when payment equals the price of the item", () => {
      expect(VendingMachine.purchaseItem("apple", 1.25)).toEqual({
        change: 0,
        item: "Apple",
        inventory: 11
      });
    });

    it("should return an item and return change", () => {
      expect(VendingMachine.purchaseItem("apple", 2.0)).toEqual({
        change: 0.75,
        item: "Apple",
        inventory: 11
      });
    });

    it("should decrease inventory count by 1 when returning an item", () => {
      expect(VendingMachine.purchaseItem("celery", 1.5)).toEqual({
        change: 0.5,
        item: "Celery",
        inventory: 11
      });
    });
  });
  
  describe("When payment is greater than the cost of the item", () => {
    it("should return change", () => {
      expect(VendingMachine.makeChange(3.40)).toEqual({
        2: 1,
        1: 1,
        0.25: 1,
        0.1: 1
      });
    });

    it("should return change as a coin and the fewest number possible", () => {
      expect(VendingMachine.makeChange(0.60)).toEqual({
        0.25: 2,
        0.05: 1
      });
    });
  });
});