public with sharing class AccountData {
    
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(Double annualRevenue){
        return [SELECT Id, Name, AnnualRevenue, Website FROM Account WHERE AnnualRevenue >= :annualRevenue];
    }

}