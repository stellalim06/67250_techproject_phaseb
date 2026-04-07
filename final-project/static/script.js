const now = new Date();
const hour = now.getHours();
const year = now.getFullYear();
const currentPath = window.location.pathname;

/* -- Fix navigation issues --*/
document.querySelectorAll("nav a").forEach(link => {
  const href = link.getAttribute("href");

  if (
    currentPath.includes(href) ||
    (currentPath === "/" && href.includes("index.html"))
  ) {
    link.classList.add("active");
  }
});

/* ---- Copyright Year ---- */
function addYear() {
    const el = document.getElementById("copyYear");
    if (el) el.innerHTML = year;
}

/* ---- Time-based Greeting ---- */
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
    const el = document.getElementById("greeting");
    if (el) el.innerHTML = message;
}

/* ---- Active Navigation ---- */
function ActiveNav() {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        if (window.location.href === link.href) {
            link.classList.add("active");
        }
    });
}

/* ---- Hamburger Toggle ---- */
function toggleNav() {
    const navbar = document.getElementById("mainNav");
    if (navbar) {
        navbar.classList.toggle("responsive");
    }
}

/* ---- Ticket Form ---- */
function showTicketForm() {
    const form = document.getElementById("ticketForm");
    if (form) form.style.display = "block";
}

function submitTicket() {
    alert("Redirecting to payment system.");
}

/* ---- Leaflet Map (only runs if #map exists) ---- */
function initMap() {
    if (!document.getElementById("map")) return;

    // MonoMuse fictional location: Pittsburgh, PA (CMU area)
    var currentpage = L.map('map').setView([40.4434, -79.9436], 15);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(currentpage);

    L.marker([40.4434, -79.9436])
        .addTo(currentpage)
        .bindPopup('<b>MonoMuse Museum</b><br>5000 Forbes Ave, Pittsburgh, PA')
        .openPopup();
}

/* ---- Run on every page load ---- */
addYear();
ActiveNav();

if (document.getElementById("greeting")) {
    greeting(hour);
}

/* ---- jQuery: Read More / Read Less (index.html only) ---- */
if (typeof $ !== 'undefined') {
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
}

/* ---- Init map after page loads (Leaflet may not be available on all pages) ---- */
window.addEventListener('load', function () {
    if (typeof L !== 'undefined') {
        initMap();
    }
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