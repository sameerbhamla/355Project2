
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.querySelector(".contact-form");
  
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault(); 
      const ticketNumber = generateRandomTicketNumber();

      displaySubmissionFeedback(ticketNumber);
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
  
