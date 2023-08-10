public with sharing class AccountData {
    
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(){
        return [SELECT Id, Name, AnnualRevenue FROM Account];
    }

}