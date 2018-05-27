import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemCustomerService implements InMemoryDbService {
    createDb() {
        let customers = [
            { id: 1, firstName: 'Windstorm', lastName: "Silva", mobileNo: "0715567008", email: "windstorm@gmail.com" },
            { id: 2, firstName: 'Bombasto', lastName: "Perera", mobileNo: "0715567008", email: "bombasto@gmail.com" },
            { id: 3, firstName: 'Magneta', lastName: "Snow", mobileNo: "0715567008", email: "magneta@gmail.com" },
            { id: 4, firstName: 'Tornado', lastName: "Mark", mobileNo: "0715567008", email: "tornado@gmail.com" }
        ];
        return { customers };
    }
}