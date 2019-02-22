const vendingMachine = require('../src/vending-machine');

describe('vendingMachine', () => {
    beforeEach(() => {
        
        const produce = [
            {
                name: 'Orange',
                price: 1.5,
                inventory: 6,
                code: 'A1',
            },
            {
                name: 'Apple',
                price: 1.25,
                inventory: 8,
                code: 'A2',
            },
            {
                name: 'Banana',
                price: 1,
                inventory: 4,
                code: 'A3',
            },
            {
                name: 'Carrot',
                price: 1.75,
                inventory: 2,
                code: 'B1',
            },
            {
                name: 'Cucumber',
                price: 1.5,
                inventory: 0,
                code: 'B2',
            },
            {
                name: 'Celery',
                price: 1,
                inventory: 10,
                code: 'B3',
            },
            {
                name: 'Kiwi',
                price: 1.35,
                inventory: 3,
                code: 'C1',
            },
            {
                name: 'Mango',
                price: 2.15,
                inventory: 9,
                code: 'C2',
            },
            {
                name: 'Peach',
                price: 1.6,
                inventory: 5,
                code: 'C3',
            },
            {
                name: 'Onion',
                price: 0.8,
                inventory: 7,
                code: 'D1',
            },
            {
                name: 'Zuchini',
                price: 1.4,
                inventory: 1,
                code: 'D2',
            },
            {
                name: 'Tomato',
                price: 1.05,
                inventory: 5,
                code: 'D3',
            }
        ]

    
//         // test.data = [test.jermain, test.julianna, test.emmalee];
    
//         // test.result = processData(test.data);
//     });

//     describe('vendingMachine()', () => {
//         beforeEach(() => {
//             // test.subject = new studentStats(test.simpleProcessedData)
//             // test.projectData = test.simpleProcessedData.projects[test.projectName];
//         });
//     });
// });