// MODULE PATTERN


// Budget Module
// IIFE allows us to have data privacy because it creates a new scope that is not visible from the outside scope.
// the varibles and functions cannot be accessed from outside

var budgetController = (function(){
   //code here
    
    var x = 23;
    
    // private add function
    var add = function(a){
        return x + a;
    }
    
    // return functions and variables which are needed to be public
    return {
        // public method and it has access to varibles of main function because of the power of closure's
        publicTest : function(b){
            return add(b);
        }
    }
    
})(); //IIFE function 


// UI Module
// the controllers dont know each other
var UIController = (function(){
    // code here
    
    
})();


// App Module which gets access to other controllers 
var controller = (function(budgetCtrl,UICtrl){
    // code here
    var z = budgetCtrl.publicTest(5);
    
    return {
        printValue : function(){
            console.log('from app controller: ' + z);
        }
    }
    
})(budgetController,UIController); // arguments to the function

