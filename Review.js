document.addEventListener('DOMContentLoaded', () => {
    // Display reviews when the page loads
    displayReviews();

    // Toggle review section visibility
    const toggleReviewButton = document.getElementById("toggle-review-section");
    const reviewContainer = document.getElementById("review-container");

    toggleReviewButton.addEventListener("click", () => {
        reviewContainer.classList.toggle("hide");
    });
});

const addToReview = () => {
    let reviewText = document.getElementById("your-review").value.trim();
    let email = sessionStorage.getItem("email");

    if (!reviewText || !email) {
        alert("Review text or user email is missing.");
        return;
    }

    let users = JSON.parse(localStorage.getItem('users')) || [];
    let userIndex = users.findIndex(user => user.email === email);
    if (userIndex === -1) {
        alert("User not found.");
        return;
    }

    let username = users[userIndex].username;
    let reviews = JSON.parse(localStorage.getItem("reviews")) || [];
    reviews.push({ username, review: reviewText });
    localStorage.setItem("reviews", JSON.stringify(reviews));
    document.getElementById("your-review").value = '';
    displayReviews();
}

const displayReviews = () => {
    let divReviewed = document.getElementById('reviewed');
    let reviews = JSON.parse(localStorage.getItem("reviews")) || [];
    
    let showReviews = reviews.map(review => `
        <div class="personal-review">
            <div class="user-review">${review.username}</div>
            <div class="review-content">${review.review}</div>
        </div>
        <hr>
    `).join('');

    divReviewed.innerHTML = showReviews;
}