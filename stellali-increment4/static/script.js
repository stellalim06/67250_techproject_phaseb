const now = new Date();
const hour = now.getHours();
const year = now.getFullYear();

function greeting(h) {
    let message;
    if (h < 5 || h >= 20) {
        message = "Good Night";
    } else if (h < 12) {
        message = "Good Morning";
    } else if (h < 18) {
        message = "Good Afternoon";
    } else {
        message = "Good Evening";
    }
    document.getElementById("greeting").innerHTML = message;
}

function addYear() {
    document.getElementById("copyYear").innerHTML = year;
}

function ActiveNav() {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        if (window.location.href === link.href) {
            link.classList.add("active");
        }
    });
}

function showTicketForm() {
    document.getElementById("ticketForm").style.display = "block";
}

function submitTicket() {
    alert("Redirecting to payment system.");
}

if (document.getElementById("greeting") != null) {
    greeting(hour);
}

ActiveNav();

$(document).ready(function () {
    $("#readMore").click(function () {
        $("#longIntro").show();
        $("#readLess").show();
        $("#readMore").hide();
    });
    $("#readLess").click(function () {
        $("#longIntro").hide();
        $("#readLess").hide();
        $("#readMore").show();
    });
});

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