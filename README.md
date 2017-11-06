# Budgety - Javascript Web App
A budget application based on Javascript where concepts of objects, functions, arrays, DOM manipulation and few other items.

## Approach
Design Pattern - Module Pattern<br />
3 Main Modules -> Budget Module, UI Module, App Module (Which gets access to other module controllers)<br />
Starter code provided with basic HTML and CSS files and the entire JS code is understood and written as I followed the course.

## Final Architechure Diagram (Ref: postimg.org)
[![Screen_Shot_2017-11-06_at_11.29.51_PM.png](https://s1.postimg.org/30iyhn94a7/Screen_Shot_2017-11-06_at_11.29.51_PM.png)](https://postimg.org/image/81b197fysr/)

### Additional Material
Q. What is Event Delegation?<br />
A. Event delegation allows us to attach a single event listener, to a parent element, that will fire for all descendants matching a selector, whether those descendants exist now or are added in the future.

Q. What is Event Bubbling?<br />
A. Understanding how events propagate is an important factor in being able to leverage Event Delegation. Any time one of inner target element  is clicked, a click event is fired for that element, and then bubbles up the DOM tree, triggering each of its parents. This is called event bubbling or event propagation. The opposite event of event bubbling is called event capturing. 

// Event Bubbling uses false<br/>
document.getElementById("ourIdElement").addEventListener("click", ourFunction, false);
 
// Event Capturing uses true<br/>
document.getElementById("ourIdElement").addEventListener("click", ourFunction, true);

### Reference
This is the main and final project done as part of the paid course on [Udemy](https://www.udemy.com/) by [*Jonas Schmedtmann*](https://www.udemy.com/the-complete-javascript-course/learn/v4/overview)
