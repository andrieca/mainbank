import { observable, action, makeObservable, runInAction } from "mobx";

class TransactStor {
  usersTransactions = [];
  filteredTransactions = [];
  viewAll = true;

  constructor() {
    makeObservable(this, {
      usersTransactions: observable,
      filteredTransactions: observable,
      viewAll: observable,
      addTransaction: action,
      setViewAll: action,
      setViewIn: action,
      resetFilters: action,
      filterTransactions: action,

    });
  }

  addTransaction(items) {
    console.log(">>> items::", items)
    this.usersTransactions = items;

    this.filterTransactions();
  }

  setViewIn(viewIn) {
    this.viewAll = false;
    this.filteredTransactions = viewIn
      ? this.usersTransactions.filter((userTransactions) => userTransactions.trType === 'in')
      : this.usersTransactions.filter((userTransactions) => userTransactions.trType === 'out');
  }

  setViewAll() {
    this.viewAll = true;
    this.filterTransactions();
  }

  resetFilters() {
    this.setViewIn(true);
  }

  filterTransactions() {
    if (this.viewAll) {
      this.filteredTransactions = this.usersTransactions;
    } else {
      this.setViewIn(true);
    }
  }
    
}

const transactStor = new TransactStor();
export default transactStor;