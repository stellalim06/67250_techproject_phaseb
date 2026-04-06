const now = new Date();
const hour = now.getHours();
const year = now.getFullYear();

function greeting(h) {
    let message;

    if (h < 5 || h >= 20) {
        message = "Good night";
    } else if (h < 12) {
        message = "Good morning";
    } else if (h < 18) {
        message = "Good afternoon";
    } else {
        message = "Good evening";
    }

    document.getElementById("greeting").innerHTML = message;
}

function addYear() {
    document.getElementById("copyYear").innerHTML = year;
}

if (document.getElementById("greeting") != null) {
    greeting(hour)
}

/* Javascript Basics: Console Practice

// Variable Declarations and Console Output:
var x = 5;
var y = 7;
var z = x + y;
console.log(z);

A = "Hello ";
B = "world!";
var c = A + B;
console.log(c);

// Create a Basic Function
function SumnPrint(x1, x2) {
    var y = x1 + x2;
    console.log(y);
}

SumnPrint(x, y);
SumnPrint(A, B);

// Add a Conditional Statement
const C = "hello";
const z = 5;

if (C.length > z) {
    if (C.length < z) {
        console.log(z);
    }
    console.log(C);
} else {
    console.log("good job!");
}

// Arrays + Loops (Alerts)
L1 = ["Watermelon","Pineapple","Pear","Banana"];
L2 = ["Apple","Banana","Kiwi","Orange"];
 
function findTheBanana(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "Banana") {
            alert("Banana found!");
        }
    }
}

findTheBanana(L1);
findTheBanana(L2);

// --- Version 2: using forEach ---
function findTheBananaForEach(arr) {
    arr.forEach(function(item) {
        if (item === "Banana") {
            alert("Banana found!");
        }
    });
}

findTheBananaForEach(L1);
findTheBananaForEach(L2); 
*/