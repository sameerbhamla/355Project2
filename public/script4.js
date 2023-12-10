
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.querySelector(".contact-form");
  
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault(); 

      const ticketNumber = generateRandomTicketNumber();
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      const xhr = new XMLHttpRequest();
      xhr.open("POST", "/submit", true);
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          displaySubmissionFeedback(ticketNumber);
        }
      };
      const formData = JSON.stringify({ ticketNumber, name, email, message });
      xhr.send(formData);
    });
  
    function generateRandomTicketNumber() {
      return Math.floor(Math.random() * 1000000) + 1000;
    }
  
    function displaySubmissionFeedback(ticketNumber) {
        const feedbackContainer = document.createElement("div");
        feedbackContainer.classList.add("submission-feedback");
      
        const feedbackText = document.createElement("p");
        feedbackText.innerHTML = `Thank you for reaching out, ${getUserName()}! Your ticket number is: <span>${ticketNumber}</span>`;
      
        const closeBtn = document.createElement("button");
        closeBtn.textContent = "Close";
        closeBtn.addEventListener("click", function () {
          feedbackContainer.remove();
        });
      
        feedbackContainer.appendChild(feedbackText);
        feedbackContainer.appendChild(closeBtn);
        contactForm.prepend(feedbackContainer);
      }
  
    function getUserName() {
      const nameInput = document.getElementById("name");
      return nameInput ? nameInput.value : "Guest";
    }
  });
  
