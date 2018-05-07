
/**
 * Sample transaction processor function.
 * @param {org.example.basic.record_submit} sumbit -  The record needs to be pushed on blockchain.
 * @transaction
 */
function submit(submit) {  
  
  return getAssetRegistry('org.example.basic.farmerinfo')
    .then(function (assetRegistry) {
        return assetRegistry.update(submit.f_info);
    });
}
