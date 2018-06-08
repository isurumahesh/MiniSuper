import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemCustomerService implements InMemoryDbService {
    createDb() {
        let customers = [
            { id: 1, firstName: 'Windstorm', lastName: "Silva", address: "London", mobileNo: "0715567008", email: "windstorm@gmail.com" },
            { id: 2, firstName: 'Bombasto', lastName: "Perera", address: "Sydney", mobileNo: "0715567008", email: "bombasto@gmail.com" },
            { id: 3, firstName: 'Magneta', lastName: "Snow", address: "New York", mobileNo: "0715567008", email: "magneta@gmail.com" },
            { id: 4, firstName: 'Tornado', lastName: "Mark", address: "Paris", mobileNo: "0715567008", email: "tornado@gmail.com" }
        ];

        let products = [
            { id: 1, name: "soap", price: 20 },
            { id: 2, name: "butter", price: 30 },
            { id: 3, name: "coconutoil", price: 40 },
            { id: 4, name: "jelly", price: 15 },
        ]

        let orderitems = [
            { id: 1, orderId: 1, "productId": 1, "quantity": 2, price: 20 },
            { id: 2, orderId: 1, "productId": 2, "quantity": 2, price: 30 },
            { id: 3, orderId: 2, "productId": 3, "quantity": 5, price: 40 },
            { id: 4, orderId: 2, "productId": 1, "quantity": 5, price: 20 },
        ]

        let orders = [
            { id: 1, orderDate: new Date(), customerName: "Windstorm", total: 100 },
            { id: 2, orderDate: new Date(), customerName: "Bombasto", total: 200 },
            { id: 3, orderDate: new Date(), customerName: "Magneta", total: 300 },
            { id: 4, orderDate: new Date(), customerName: "Tornado", total: 400 },
        ]
        return { customers: customers, products: products, orders: orders };
    }
}