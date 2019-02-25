const VendingMachine = require('../src/vending-machine');

describe('VendingMachine', () => {
    let vendingMachine, produce, change;
    beforeEach(() => {
        
        produce = [
            {
                name: 'Orange',
                price: 1.5,
                inventory: 6
            },
            {
                name: 'Apple',
                price: 1.25,
                inventory: 8
            },
            {
                name: 'Banana',
                price: 1,
                inventory: 4
            },
            {
                name: 'Carrot',
                price: 1.75,
                inventory: 2
            },
            {
                name: 'Cucumber',
                price: 1.5,
                inventory: 0
            },
            {
                name: 'Celery',
                price: 1,
                inventory: 10
            },
            {
                name: 'Kiwi',
                price: 1.35,
                inventory: 3
            },
            {
                name: 'Mango',
                price: 2.15,
                inventory: 9
            },
            {
                name: 'Peach',
                price: 1.6,
                inventory: 5
            },
            {
                name: 'Onion',
                price: 0.8,
                inventory: 7
            },
            {
                name: 'Zuchini',
                price: 1.4,
                inventory: 1
            },
            {
                name: 'Tomato',
                price: 1.05,
                inventory: 5
            }
        ];
        change = {
            0.05: 12,
            0.1: 10,
            0.25: 16,
            1.0: 13,
            2.0: 3,
        };
        vendingMachine = new VendingMachine(produce, change);
    });

    describe('Print vending machine inventory', () => {
        
        describe('When you ask for the vending machine inventory', () => {
            it('will return the array of produce', () => {
                const result = vendingMachine.printInventory();
                expect(result).toEqual(
                    [{name: 'Orange', price: 1.5, inventory: 6},
                    {name: 'Apple', price: 1.25, inventory: 8},
                    {name: 'Banana', price: 1, inventory: 4},
                    {name: 'Carrot', price: 1.75, inventory: 2},
                    {name: 'Cucumber', price: 1.5, inventory: 0},
                    {name: 'Celery', price: 1, inventory: 10},
                    {name: 'Kiwi', price: 1.35, inventory: 3},
                    {name: 'Mango', price: 2.15,inventory: 9},
                    {name: 'Peach', price: 1.6, inventory: 5},
                    {name: 'Onion', price: 0.8, inventory: 7},
                    {name: 'Zuchini', price: 1.4, inventory: 1},
                    {name: 'Tomato', price: 1.05, inventory: 5}]
                );
            });
        });
       
    });
});