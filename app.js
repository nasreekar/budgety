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
    
    // DOM Strings (private variable)
    var DOMStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    }
    
    
    // public function for accessing the UI Controller
    return {
        getInput : function(){
            return{
                
                // how to return three values at a time if we are creating three separate variables to store the input data?
                // so we return an object containing these three variables
                // object with three variables. usagae of ':'
                
                type: document.querySelector(DOMStrings.inputType).value,
                description: document.querySelector(DOMStrings.inputDescription).value,
                value:document.querySelector(DOMStrings.inputValue).value   
            };
        },
        getDOMStrings : function(){
            return DOMStrings;
        }
    }
    
    
})();


// App Module which gets access to other controllers 
// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl,UICtrl){
    
    // code here
    
    // Accessing DOM Strings from UI Controller
    var DOM = UICtrl.getDOMStrings();
    
    var ctrlAddItem = function(){
        
        // TO DO LIST ON BUTTON CLICK
        
        // Get the input data
        var input = UICtrl.getInput();
        console.log(input);
        
        // Add the item to budget controller
        
        
        // Add the item to UI
        
        
        // Calculate the budget 
        
        
        // Display the budget on UI
        
    }
    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
    
    // On Enter button press
    
    document.addEventListener('keypress', function(event){
        if(event.keyCode === 13 || event.which === 13){
            event.preventDefault(); // prevents the enter key from also triggering a click event
            ctrlAddItem();
        }
    })
    
    
})(budgetController,UIController); // arguments to the function

