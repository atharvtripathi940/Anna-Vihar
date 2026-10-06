/* =========================================
   ANNA-VIHAR FARMER DASHBOARD
   farmer-dashboard.js
========================================= */


/* =========================================
   1. MOBILE SIDEBAR
========================================= */

const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const sidebar = document.querySelector(".sidebar");
const sidebarOverlay = document.getElementById("sidebarOverlay");


/* Open sidebar */

if (mobileMenuBtn) {

    mobileMenuBtn.addEventListener("click", function () {

        sidebar.classList.add("show");

        sidebarOverlay.classList.add("show");

    });

}


/* Close sidebar when overlay is clicked */

if (sidebarOverlay) {

    sidebarOverlay.addEventListener("click", function () {

        sidebar.classList.remove("show");

        sidebarOverlay.classList.remove("show");

    });

}


/* =========================================
   2. SIDEBAR NAVIGATION
========================================= */

const navLinks = document.querySelectorAll(".nav-link");


navLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        /*
            Prevent the page from jumping to
            a section that does not exist yet.
        */

        event.preventDefault();


        /* Remove active class */

        navLinks.forEach(function (item) {

            item.classList.remove("active");

        });


        /* Add active class to clicked link */

        link.classList.add("active");


        /* Close mobile sidebar */

        if (sidebar) {

            sidebar.classList.remove("show");

        }

        if (sidebarOverlay) {

            sidebarOverlay.classList.remove("show");

        }


        /* Get section name */

        const section = link.getAttribute("data-section");


        /*
            Show a simple message for sections
            that are not yet connected to pages.
        */

        if (section && section !== "dashboard") {

            alert(
                section.charAt(0).toUpperCase() +
                section.slice(1) +
                " section will open here."
            );

        }

    });

});


/* =========================================
   3. ADD PRODUCE BUTTON
========================================= */

const addProduceBtn = document.getElementById("addProduceBtn");


if (addProduceBtn) {

    addProduceBtn.addEventListener("click", function () {

        alert(
            "Add Produce\n\n" +
            "You can add your crop details here."
        );

    });

}


/* =========================================
   4. VIEW MARKET BUTTON
========================================= */

const marketBtn = document.getElementById("marketBtn");


if (marketBtn) {

    marketBtn.addEventListener("click", function () {

        alert(
            "Market Information\n\n" +
            "Here you can see current crop prices " +
            "and buyer demand."
        );

    });

}


/* =========================================
   5. DEMAND FORECAST BUTTON
========================================= */

const forecastBtn = document.getElementById("forecastBtn");


if (forecastBtn) {

    forecastBtn.addEventListener("click", function () {

        alert(
            "Demand Forecast\n\n" +
            "Detailed 7-day market demand will appear here."
        );

    });

}


/* =========================================
   6. VIEW ALL ORDERS
========================================= */

const viewOrdersBtn = document.getElementById("viewOrdersBtn");


if (viewOrdersBtn) {

    viewOrdersBtn.addEventListener("click", function () {

        alert(
            "Orders\n\n" +
            "Your complete list of buyer orders will appear here."
        );

    });

}


/* =========================================
   7. QUICK ACTIONS
========================================= */

const quickProduce = document.getElementById("quickProduce");
const quickOrders = document.getElementById("quickOrders");
const quickPayments = document.getElementById("quickPayments");


/* List Produce */

if (quickProduce) {

    quickProduce.addEventListener("click", function () {

        alert(
            "List Produce\n\n" +
            "Add your available crops and quantities."
        );

    });

}


/* Manage Orders */

if (quickOrders) {

    quickOrders.addEventListener("click", function () {

        alert(
            "Manage Orders\n\n" +
            "You can accept, prepare and track orders here."
        );

    });

}


/* Check Payments */

if (quickPayments) {

    quickPayments.addEventListener("click", function () {

        alert(
            "Payments\n\n" +
            "Your payments and earnings will appear here."
        );

    });

}


/* =========================================
   8. ORDER TABLE BUTTONS
========================================= */

const tableButtons = document.querySelectorAll(".table-action");


tableButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        /*
            Find the table row containing
            the clicked button.
        */

        const row = button.closest("tr");


        /*
            Get the order number from
            the first table cell.
        */

        const orderNumber =
            row.querySelector("td").textContent.trim();


        /* Show order information */

        alert(
            "Order Details\n\n" +
            "Order: " + orderNumber
        );

    });

});


/* =========================================
   9. NOTIFICATION BUTTON
========================================= */

const notificationBtn =
    document.getElementById("notificationBtn");


if (notificationBtn) {

    notificationBtn.addEventListener("click", function () {

        alert(
            "Notifications\n\n" +
            "You have 5 new order notifications."
        );

    });

}


/* =========================================
   10. PROFILE BUTTON
========================================= */

const profileBtn =
    document.getElementById("profileBtn");


if (profileBtn) {

    profileBtn.addEventListener("click", function () {

        alert(
            "Profile\n\n" +
            "Name: Ramesh Patel\n" +
            "Role: Farmer / FPO\n" +
            "Location: Nashik"
        );

    });

}


/* =========================================
   11. LOGOUT FUNCTION
========================================= */

function logout() {

    const confirmLogout =
        confirm("Are you sure you want to logout?");


    if (confirmLogout) {

        alert("You have been logged out.");

        /*
            Later you can redirect the user
            to your login page.

            Example:

            window.location.href = "login.html";
        */

    }

}


/* =========================================
   12. PAGE LOADED MESSAGE
========================================= */

console.log(
    "Anna-Vihar Farmer Dashboard loaded successfully."
);