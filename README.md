# budgety
A budget application based on Javascript


## Additional Material

Q. What is Event Delegation  ?
A. Event delegation allows us to attach a single event listener, to a parent element, that will fire for all descendants matching a selector, whether those descendants exist now or are added in the future.

Q. What is Event Bubbling  ?
A. Understanding how events propagate is an important factor in being able to leverage Event Delegation. Any time one of inner target element  is clicked, a click event is fired for that element, and then bubbles up the DOM tree, triggering each of its parents. This is called event bubbling or event propagation. The opposite event of event bubbling is called event capturing. 

// Event Bubbling uses false
document.getElementById("ourIdElement").addEventListener("click", ourFunction, false);
 
// Event Capturing uses true
document.getElementById("ourIdElement").addEventListener("click", ourFunction, true);