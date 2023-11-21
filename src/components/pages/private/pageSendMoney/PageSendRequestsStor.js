

import { makeAutoObservable } from "mobx";

class PageSendRequestsStor {
  amount = "";
  userName = "";
  userAvatar = "";
  trDate = "";
  trType = "out";
  

//   userContact = [];

  constructor() {
    makeAutoObservable(this);
  }

//   addUserContact(item) {
//     this.userContact.push(item);
//     console.log("sendContact", this.userContact)
   
//   }
  setUserName(userName){
    this.userName = userName;
    console.log("setUserName", this.userName)
  }

  setUserAvatar(userAvatar){
    this.userAvatar = userAvatar;
    console.log("setUserAvatar", this.userAvatar)
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
