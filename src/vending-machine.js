class VendingMachine {
    constructor(produce, change) {
        this.produce = [...produce];
        this.change = {...change};
    }

    printInventory() {
        return this.produce  
    }
}

module.exports = VendingMachine;