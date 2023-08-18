public with sharing class AccountData {
    
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(Double annualRevenue){
        return [SELECT Id, Name, AnnualRevenue, Website FROM Account WHERE AnnualRevenue >= :annualRevenue];
    }

    @AuraEnabled
    public static Boolean deleteAccounts(List<Id> idList){
        Database.delete([SELECT Id FROM Account WHERE Id IN :idList], false);
    }
}