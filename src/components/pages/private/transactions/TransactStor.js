import { observable, action, makeObservable } from "mobx";

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
    this.viewAll = true;
    this.filterTransactions();
  }

  filterTransactions() {
    if (this.viewAll) {
      this.filteredTransactions = this.usersTransactions;
    } else {
      this.setViewIn(true);
    }
  }








//     transactions = [];
//   filteredTransactions = [];
//   showAllTransactions = true;

//   constructor() {
//     makeObservable(this, {
//       transactions: observable,
//       filteredTransactions: observable,
//       showAllTransactions: observable,
//       setTransactions: action,
//       setShowInTransactions: action,
//       setShowAllTransactions: action,
//       resetFilters: action,
//     });
//   }

//   setTransactions(transactions) {
//     this.transactions = transactions;
//     this.filterTransactions();
//   }

//   setShowInTransactions(showIn) {
//     this.showAllTransactions = false;
//     this.filteredTransactions = showIn
//       ? this.transactions.filter((transaction) => transaction.key === 'in')
//       : this.transactions.filter((transaction) => transaction.key === 'out');
//   }

//   setShowAllTransactions() {
//     this.showAllTransactions = true;
//     this.filterTransactions();
//   }

//   resetFilters() {
//     this.showAllTransactions = true;
//     this.filterTransactions();
//   }

//   filterTransactions() {
//     if (this.showAllTransactions) {
//       this.filteredTransactions = this.transactions;
//     } else {
//       this.setShowInTransactions(true);
//     }
//   }
    


}

const transactStor = new TransactStor();
export default transactStor;