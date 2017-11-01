// MODULE PATTERN


// Budget Module
// IIFE allows us to have data privacy because it creates a new scope that is not visible from the outside scope.
// the varibles and functions cannot be accessed from outside

// BUDGET CONTROLLER
var budgetController = (function(){
   //code here
   
    
})(); //IIFE function 


// UI Module
// BUDGET CONTROLLER
var UIController = (function(){
    // code here
    
    
})();


// App Module which gets access to other controllers 
// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl,UICtrl){
    // code here
    
    
    var ctrlAddItem = function(){
        
        // TO DO LIST ON BUTTON CLICK
        
        // Get the input data 
        // Add the item to budget controller
        // Add the item to UI
        // Calculate the budget 
        // Display the budget on UI
        
        
        console.log('item added');
        
        
    }
    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);
    
    // On Enter button press
    
    document.addEventListener('keypress', function(event){
        if(event.keyCode === 13 || event.which === 13){
            event.preventDefault(); // prevents the enter key from also triggering a click event
            ctrlAddItem();
        }
    })
    
    
})(budgetController,UIController); // arguments to the function

