// MODULE PATTERN


// Budget Module
// IIFE allows us to have data privacy because it creates a new scope that is not visible from the outside scope.
// the varibles and functions cannot be accessed from outside

// BUDGET CONTROLLER
var budgetController = (function(){
   
    //code here
    
    // Function Constructor - Capital Letter
    var Expense = function(id, description,value){
        this.id = id;
        this.description = description;
        this.value = value;
    };
    
    var Income = function(id, description,value){
        this.id = id;
        this.description = description;
        this.value = value;
    };
    
    // DS to store all expenses and income objects 
    var data = {
         allItems : {
             exp:[],
             inc:[]
         },
         totals : {
            exp: 0,
            inc: 0
        }
    };
   
    return {
        addItem : function(type,des,val){
            var newItem,ID;
            
            // create new ID
            if(data.allItems[type].length > 0){
                ID = data.allItems[type][data.allItems[type].length-1].id + 1;
            } else {
                ID = 0;
            }
            
            // create new item based on inc or exp type
            if(type === 'exp') {
                newItem = new Expense(ID,des,val);
            } else if(type === 'inc'){
                newItem = new Income(ID,des,val);
            }
            
            // push data to datastructure
            data.allItems[type].push(newItem); // push method adds an element at the end of array
            
            // return new element
            return newItem;
        },
        
        test : function(){
            console.log(data);
        }
    };
    
})(); //IIFE function 


// UI Module
// UI CONTROLLER
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
    
    // setup Event Listeners
    var setupEventListeners = function(){
        
        // Accessing DOM Strings from UI Controller
        var DOM = UICtrl.getDOMStrings();
        
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
    
        // On Enter button press
        document.addEventListener('keypress', function(event){
            if(event.keyCode === 13 || event.which === 13){
                event.preventDefault(); // prevents the enter key from also triggering a click event
                ctrlAddItem();
            }
        });
    }
    
    var ctrlAddItem = function(){
        
        var newItem,input;
        
        // TO DO LIST ON BUTTON CLICK
        
        // Get the input data
        input = UICtrl.getInput();
        
        // Add the item to budget controller
        newItem = budgetCtrl.addItem(input.type,input.description,input.value);
        
        // Add the item to UI
        
        
        // Calculate the budget 
        
        
        // Display the budget on UI
        
    };
    
    return {
        init : function(){
            console.log('Application Started');
            // setup Event Listeners
            setupEventListeners();
        }
    };
    
    
})(budgetController,UIController); // arguments to the function

// only line of code that is outside the controller
// initializing event listeners
controller.init();
