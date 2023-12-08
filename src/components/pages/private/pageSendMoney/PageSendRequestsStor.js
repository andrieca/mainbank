

import { makeAutoObservable } from "mobx";

class PageSendRequestsStor {
  amount = "";
  userName = "";
  userAvatar = "";
  trDate = "";
  trType = "out";


  constructor() {
    makeAutoObservable(this);
  }

  setUserName(userName) {
    this.userName = userName;
  }

  setUserAvatar(userAvatar) {
    this.userAvatar = userAvatar;
  }

  setAmount(amountPage) {
    this.amount = amountPage;
  }

  setTrDate(trDatePage) {
    this.trDate = trDatePage;
  }

  getDataForRequest() {


    return {
      amount: +this.amount,
      userName: this.userName,
      userAvatar: this.userAvatar,
      trDate: this.trDate,
      trType: this.trType,
    };
  }

}

const pageSendRequestsStor = new PageSendRequestsStor();
export default pageSendRequestsStor;
