document.addEventListener("DOMContentLoaded", () => {
    let clickedImages = 0;
    let totalDiceValue = 0;

    const image1 = document.getElementById("image1");
    const image2 = document.getElementById("image2");
    const image3 = document.getElementById("image3");
    const image4 = document.getElementById("image4");
    const form = document.getElementById("registration-form");
    const message = document.getElementById("message");
    const name= document.getElementById("name"); 
    const username=document.getElementById("username");   

    image1.addEventListener("click", () => {
        // Show the registration form
   
        form.style.display = "block";
        image1.style.pointerEvents = "none"; // Disable clicking 
        message.innerText = "Please Complete this form and go next step ";
        clickedImages++;
    });

 

    image2.addEventListener("click", () => {
        if (clickedImages < 1 ) {
            message.innerText = "Please complete 1 steps.";
        }
        else if(name.value==="" || username.value===""){
            message.innerText="Please give the name and username"
        }
        else {
            // Display the name and username
            message.innerText = `Name: ${name.value}, Username: ${username.value}  ------------ try your luck with next step`;
            image2.style.pointerEvents = "none"; // Disable clicking again
            clickedImages++;
        }
    });

    image3.addEventListener("click", () => {
        if (clickedImages < 2) {
            message.innerText = "Please complete 2 steps.";
        } else if (clickedImages < 5) {
            // Generate a random value between 1 and 6
            const diceValue = Math.floor(Math.random() * 6) + 1;
            totalDiceValue += diceValue;
            message.innerText = `Dice Value: ${diceValue}, Total: ${totalDiceValue}`;
            clickedImages++;
            
            if (clickedImages === 5 && totalDiceValue > 10) {
                image4.style.pointerEvents = "auto"; // Allow clicking on the 4th image
            }
        } else {
            message.innerText = "You've reached your limit for rolling the dice see your coupon.";
        }
    });

    image4.addEventListener("click", () => {
        if (clickedImages < 5) {
            message.innerText = "Please complete 3 steps.";
        } else {
            // Generate a 12-digit coupon code
            const couponCode = generateCouponCode();
            message.innerText = `Coupon Code: ${couponCode}`;
            image4.style.pointerEvents = "none"; // Disable clicking again
        }
    });

    function generateCouponCode() {
        // Generate a random 12-digit code (for simplicity)
        const characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let code = "";
        for (let i = 0; i < 12; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            code += characters.charAt(randomIndex);
        }
        return code;
    }
});
