/* ==========================================
   ANNA-VIHAR JAVASCRIPT
========================================== */


/* ==========================================
   FARMER LOGIN
========================================== */

const farmerLoginForm =
    document.getElementById("farmerLoginForm");


if (farmerLoginForm) {

    farmerLoginForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const mobile =
                document.getElementById(
                    "farmerMobile"
                ).value.trim();


            const password =
                document.getElementById(
                    "farmerPassword"
                ).value.trim();


            /* Mobile validation */

            if (!/^[0-9]{10}$/.test(mobile)) {

                alert(
                    "Please enter a valid 10-digit mobile number."
                );

                return;
            }


            /* Password validation */

            if (password.length < 6) {

                alert(
                    "Password must contain at least 6 characters."
                );

                return;
            }


            /* Save login */

            localStorage.setItem(
                "userType",
                "farmer"
            );

            localStorage.setItem(
                "farmerMobile",
                mobile
            );


            /* Open dashboard */

            window.location.href =
                "farmer-dashboard.html";

        }
    );
}



/* ==========================================
   PASSWORD SHOW / HIDE
========================================== */

function togglePassword(
    inputId,
    button
) {

    const input =
        document.getElementById(inputId);


    if (input.type === "password") {

        input.type = "text";

        button.textContent = "🙈";

    } else {

        input.type = "password";

        button.textContent = "👁";

    }

}



/* ==========================================
   FARMER DASHBOARD SECURITY
========================================== */

function checkFarmerAccess() {

    const userType =
        localStorage.getItem("userType");


    if (userType !== "farmer") {

        window.location.href =
            "farmer-login.html";

    }

}


/* Run only on dashboard */

if (
    window.location.pathname.includes(
        "farmer-dashboard.html"
    )
) {

    checkFarmerAccess();

}



/* ==========================================
   LOGOUT
========================================== */

function logout() {

    localStorage.removeItem(
        "userType"
    );

    localStorage.removeItem(
        "farmerMobile"
    );

    window.location.href =
        "index.html";

}