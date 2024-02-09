class loadGeneralData {
  date;
  refNumber;
  status;
  currency;
  applied;
  approved;
  instalment;
  nextPayDate;
  followingPaydate;
  netPay;
  partnersInco;
  ipAddress;
  loanPurpose;
  allowMarjeting;
  allowThiriedPartyContact;
  constructor(data) {
    Object.keys(data).forEach((k) => {
      this[k] = data[k];
    });
  }
}
