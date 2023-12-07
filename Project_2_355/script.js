document.addEventListener("DOMContentLoaded", function() {
    const creativeMessages = [
        "Uncover hidden treasures!",
        "Jaw-dropping discounts await you!",
        "Experience the magic of wholesale shopping!",
        "Your satisfaction, our priority!",
        "Embrace the art of smart shopping!"
    ];

    const dynamicMessageElement = document.getElementById("dynamic-message");
    const promotionsContainer = document.getElementById("promotions-container");
    const testimonialsContainer = document.getElementById("testimonials-container");

    function changeDynamicMessage() {
        const randomIndex = Math.floor(Math.random() * creativeMessages.length);
        dynamicMessageElement.textContent = creativeMessages[randomIndex];
    }

    function generatePromotions() {
        const promotions = [
            "Limited-time offer: Free shipping on all orders!",
            "Buy one, get one free on selected items!",
            "Flash sale: Up to 50% off on clearance items!",
            "Exclusive discounts for newsletter subscribers!"
        ];

        promotions.forEach(promotion => {
            const promotionItem = document.createElement("div");
            promotionItem.textContent = promotion;
            promotionsContainer.appendChild(promotionItem);
        });
    }

    function generateTestimonials() {
        const testimonials = [
            { name: "John Doe", comment: "Great products and fast delivery! Highly recommended." },
            { name: "Jane Smith", comment: "The prices here are unbeatable. I'm a satisfied customer!" },
            { name: "Bob Johnson", comment: "Excellent customer service. Will shop here again!" }
        ];

        testimonials.forEach(testimonial => {
            const testimonialItem = document.createElement("div");
            testimonialItem.innerHTML = `<strong>${testimonial.name}:</strong> ${testimonial.comment}`;
            testimonialsContainer.appendChild(testimonialItem);
        });
    }

    setInterval(changeDynamicMessage, 5000);
    changeDynamicMessage();

    generatePromotions();
    generateTestimonials();
});
