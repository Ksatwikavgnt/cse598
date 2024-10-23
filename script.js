document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    
    form.addEventListener("submit", function(event) {
        // Get the selected rating value
        const rating = document.querySelector('input[name="rating"]:checked');
        
        if (!rating) {
            // If no rating is selected, prevent form submission
            event.preventDefault();
            alert("Please select a rating before submitting the feedback.");
            return;
        }
        
        // Display a confirmation message before submission
        const productName = document.getElementById("product-name").value;
        const feedbackText = document.getElementById("feedback").value;
        const newsletter = document.getElementById("newsletter").checked;

        let message = `Thank you for your feedback on ${productName}!\n\n` +
                      `Rating: ${rating.value} Stars\n` +
                      `Feedback: ${feedbackText}`;
        
        if (newsletter) {
            message += `\n\nYou have subscribed to our newsletter.`;
        }
        
        alert(message);
    });
});

