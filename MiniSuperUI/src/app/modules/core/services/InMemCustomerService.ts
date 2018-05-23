import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemCustomerService implements InMemoryDbService {
    createDb() {
        let customers = [
            { id: 1, firstName: 'Windstorm', lastName: "John", mobileNo: "0715567008", email: "john@gmail.com" },
            { id: 2, firstName: 'Bombasto', lastName: "John", mobileNo: "0715567008", email: "john@gmail.com" },
            { id: 3, firstName: 'Magneta', lastName: "John", mobileNo: "0715567008", email: "john@gmail.com" },
            { id: 4, firstName: 'Tornado', lastName: "John", mobileNo: "0715567008", email: "john@gmail.com" }
        ];
        return { customers };
    }
}