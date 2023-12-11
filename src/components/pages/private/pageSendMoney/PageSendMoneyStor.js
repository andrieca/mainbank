

import { makeAutoObservable } from "mobx";

class PageSendMoneyStor {
  amount = "";
  userName = "";
  userAvatar = "";
  trDate = "";
  trType = "out";
  userId = "";

  userContact = [];


   currentDate = new Date();
   formattedDate = this.currentDate.toLocaleDateString();
   hours = this.currentDate.getHours();
   minutes = this.currentDate.getMinutes();
   

  constructor() {
    makeAutoObservable(this);
  }

  addUserContact(item) {
    this.userContact.push(item); 
  }

  clearUserContact() {
    this.userContact = [];
  }

  setAmount(amountPage) {
    this.amount = amountPage;
    
  }

  setTrDate(trDatePage) {
    this.trDate = trDatePage;
  }

  getDataForRequest() {
    const userContact = this.userContact.find(item => item._id === this.userId);
    if (!userContact) return null;

    return {
      amount: +this.amount,
      userName: userContact.username,
      userAvatar: userContact.avatar,
      trDate: this.trDate,
      trType: this.trType,
      userId: this.userId
    };
  }

}

const pageSendMoneyStor = new PageSendMoneyStor();
export default pageSendMoneyStor;
