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
    
    // calculate total based on type of input. input or expense
    var calculateTotal = function(type){
        var sum = 0;
        data.allItems[type].forEach(function(cur){
            sum = sum + cur.value;
        });
        data.totals[type] = sum; // storing the data in global variables we defined in data object.
        
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
        },
        budget: 0,
        percentage: -1 // -1 means something non existent
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
        
        calculateBudget: function(){
            
            // calculate total income and expenses
            calculateTotal('exp');
            calculateTotal('inc');
            
            // calculate the budget : income - expenses
            data.budget = data.totals.inc - data.totals.exp;
            
            // calculate the % of income that we spent
            if(data.totals.inc>0){
                data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
            }else{
                data.percentage = -1;
            }
            
        },
        
        getBudget: function(){
          
            return {
                budget: data.budget,
                totalIncome: data.totals.inc,
                totalExpenses: data.totals.exp,
                percentage: data.percentage
            };
            
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
        inputBtn: '.add__btn',
        incomeContainer: '.income__list', // DOM Container
        expensesContainer: '.expenses__list', // DOM Container
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expensesLabel: '.budget__expenses--value',
        percentageLabel: '.budget__expenses--percentage'
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
                value: parseFloat(document.querySelector(DOMStrings.inputValue).value) // to get the values as float   
            };
        },
        
        addListItem : function(obj,type) {
          
            var html, newHtml,element;
            
            // create HTML string with placeholder text
            if(type === 'inc'){ 
                element = DOMStrings.incomeContainer;
                html = '<div class="item clearfix" id="income-%id%"> <div class="item__description">%description%</div> <div class="right clearfix"> <div class="item__value">+ %value%</div> <div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> <\/div></div></div>' ;
            
            } else if(type === 'exp'){
                element = DOMStrings.expensesContainer;
                html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description% </div><div class="right clearfix"><div class="item__value">- %value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }
          
            // replace the place holder text with some actual data
            newHtml = html.replace('%id%',obj.id);
            newHtml = newHtml.replace('%value%',obj.value);
            newHtml = newHtml.replace('%description%',obj.description);
            
            // Insert the HTML into DOM 
            document.querySelector(element).insertAdjacentHTML('beforeend',newHtml);
            
        },
        
        clearFields : function(){
            var fields, fieldsArray;
            
            // querySelectorAll returns a list, so we need to convert it into an array. To do this we can use array method slice to create a duplicate.
            fields = document.querySelectorAll(DOMStrings.inputDescription + ', ' + DOMStrings.inputValue);
            
            fieldsArray = Array.prototype.slice.call(fields); // as we cannot use fields.slice directly as fields is a list and not an array. 
            // Since it is a function we use 'call' method.
            
            
            // the value of the array that is currently being processed, current index, fields Array
            fieldsArray.forEach(function(current,index,array){
               
                // call back function (anonymous function)
                current.value = ""; //description
                
            });
            
            // to set the focus to the description input box
            fieldsArray[0].focus();
            
        },
        
        // obj from budget controller
        displayBudget: function(obj){
            
            document.querySelector(DOMStrings.budgetLabel).textContent = obj.budget;
            document.querySelector(DOMStrings.incomeLabel).textContent = obj.totalIncome;
            document.querySelector(DOMStrings.expensesLabel).textContent = obj.totalExpenses;
           
           if(obj.percentage > 0){ 
               document.querySelector(DOMStrings.percentageLabel).textContent = obj.percentage + '%';
            }else{
                document.querySelector(DOMStrings.percentageLabel).textContent = '---';
            }
            
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
    };
    
    var updateBudget = function(){
        
        var budget;
        
        // Calculate the budget
        budgetCtrl.calculateBudget();
        
        // Return the budget
        budget = budgetCtrl.getBudget();
        
        // Display the budget on UI
        UICtrl.displayBudget(budget);
    };
    
    var ctrlAddItem = function(){
        
        var newItem,input;
        
        // TO DO LIST ON BUTTON CLICK
        
        // Get the input data
        input = UICtrl.getInput();
        
        if(input.description !== "" && !isNaN(input.value) && input.value > 0){
        
            // Add the item to budget controller
            newItem = budgetCtrl.addItem(input.type,input.description,input.value);
        
            // Add the item to UI
            UICtrl.addListItem(newItem,input.type);
        
            // Clear the fields
            UICtrl.clearFields();
        
            // Calculate and update budget
            updateBudget(); //
        }
        
    };
    
    return {
        init : function(){
            console.log('Application Started');
            UICtrl.displayBudget({
                budget: 0,
                totalIncome: 0,
                totalExpenses: 0,
                percentage: -1
            });
            // setup Event Listeners
            setupEventListeners();
        }
    };
    
    
})(budgetController,UIController); // arguments to the function

// only line of code that is outside the controller
// initializing event listeners
controller.init();
