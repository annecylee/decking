// Q & A
const faqData = [
  {
    question: "Where are you located?",
    answer:
      "Based in Dallas with our inventory located in the Dallas-Fort Worth (DFW) area, we ensure fast delivery to our customers",
  },
  {
    question: "How can I get a sample?",
    answer:
      "Please scroll down to the page and fill out the conatct form. Our sales representive will contact you within in one business day to send you a sample.",
  },
  {
    question:
      "Does it water resisted? How about compare to common wood-plastic composite?",
    answer:
      "Yes, our decking board is highly water-resistant. It is non-absorbent, which means it doesn't absorb water at all. In comparison, common wood-plastic composite decking has a low water absorption rate, but it still absorbs some moisture. This makes our decking superior in terms of water resistance. ",
  },
  {
    question:
      "How long can I expect Decking.eco's Environmental Plastic Board to last?",
    answer:
      "Great question! We're proud to say that our Environmental Plastic decking is built to last. Based on extensive testing and real-world performance, the expected service life of Decking.eco's Environmental Plastic Board is an impressive 30 years.",
  },
  {
    question: "How do I maintain my eco-friendly deck?",

    answer:
      "Maintaining your eco-friendly deck is simple and low-effort1. Occasiona l. sweeping to remove debris 2. Wash with mild soap and water once or twice a year 3. No sealing or staining required 4. Clean spills promptly with just water 5. Avoid harsh chemicals or pressure washing 6. Use plastic shovel for snow removal. Our deck is designed to resist fading, staining, and mold with minimal upkeep. Most of the time, rain and wind will do the cleaning for you!",
  },
  {
    question: "Are eco-friendly decking materials safe for children and pets?",
    answer:
      "Yes, our eco-friendly decking materials are safe for both children and pets. They're splinter-free and don't contain harmful chemicals found in some treated woods.",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const faqList = document.querySelector(".faq-list");
  faqData.forEach((item, index) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
    <h3 class="faq-question">${item.question}</h3>
    <p class="faq-answer">${item.answer}</p>
   `;
    faqList.appendChild(listItem);
  });

  function setupFormSubmission() {
    document
      .getElementById("contactForm")
      .addEventListener("submit", function (e) {
        // Your form submission code here
      });
  }
});
