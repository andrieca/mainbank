
import { action, makeObservable, observable } from 'mobx';

class PageContactsStore {

    users = [];

    constructor() {
        makeObservable(this, {
            users: observable,
            addUsers: action,
        }

        )

    }

    addUsers(items) {
        const filteredArray = items.filter(obj => obj.avatar !== null && obj.avatar !== '');
        this.users = filteredArray;
    }

}


const pageContactsStore = new PageContactsStore();
export default pageContactsStore;