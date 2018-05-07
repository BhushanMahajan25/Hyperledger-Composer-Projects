	/**
	* Track the trade of a commodity from one trader to another
	* @param {org.acme.bank.amountTransfer} Transfer - to trade    
	* @transaction
	 */
	function Transfer(Transfer)
	{
  var amount1=Transfer.owner1.balance
  var amount2=Transfer.owner2.balance
	  
	if(Transfer.amount>amount1)
	{
	  return 0;
	}else
	{
  var owner1 =  Transfer.owner1
  var owner2 =  Transfer.owner2
  
    owner1.balance= parseInt(owner1.balance)
    owner2.balance= parseInt(owner2.balance)
	Transfer.amount=parseInt(Transfer.amount);
  
     owner1.balance-=Transfer.amount
 	 owner2.balance+=Transfer.amount

       owner1.balance=String( owner1.balance);
       owner2.balance=String( owner2.balance);
      Transfer.amount=String( Transfer.amount);
      
      
	  return getAssetRegistry('org.acme.bank.acount')
		.then(function (assetRegistry) {
		    return assetRegistry.update(Transfer.owner1);
		}).then(function () {
		    return getAssetRegistry('org.acme.bank.acount');
		}).then(function (assetRegistry) {
		    return assetRegistry.update(Transfer.owner2);
		});
	}
	  

	  
	  }

	
