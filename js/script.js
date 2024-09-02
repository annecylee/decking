// Product data, need to be even number of image
const products = [
  {
    image: "images/Grey-Composite-Deck-Board-Backyard-01.jpg",
    title: "Request A Quote",
    description:
      "Sed adipiscing ornare risus. Morbi est est, blandit sit amet, sagittis vel, euismod vel, velit. ",
  },
  {
    image: "images/Grey-Composite-Deck-Board-Backyard-02.jpg",
    title: "Request A Quote",
    description:
      "Sed adipiscing ornare risus. Morbi est est, blandit sit amet, sagittis vel, euismod vel, velit. ",
  },
  {
    image: "images/Teak-Composite-Deck-Board-Tiny-Home-04.jpg",
    title: "Request A Quote",
    description:
      "Sed adipiscing ornare risus. Morbi est est, blandit sit amet, sagittis vel, euismod vel, velit. ",
  },
  {
    image: "images/Teak-Composite-Deck-Board-Tiny-Home-02.jpg",
    title: "Request A Quote",
    description:
      "Sed adipiscing ornare risus. Morbi est est, blandit sit amet, sagittis vel, euismod vel, velit. ",
  },
  {
    image: "images/Teak-Composite-Deck-Board-Tiny-Home-03.jpg",
    title: "Request A Quote",
    description:
      "Sed adipiscing ornare risus. Morbi est est, blandit sit amet, sagittis vel, euismod vel, velit. ",
  },
  {
    image: "images/Teak-Composite-Deck-Board-backyard-06.jpg",
    title: "Request A Quote",
    description:
      "Sed adipiscing ornare risus. Morbi est est, blandit sit amet, sagittis vel, euismod vel, velit. ",
  },
  {
    image: "images/Teak-Composite-Deck-Board-Tiny-Home-07.jpg",
    title: "Request A Quote",
    description:
      "Sed adipiscing ornare risus. Morbi est est, blandit sit amet, sagittis vel, euismod vel, velit. ",
  },
  {
    image: "images/Grey-Composite-Deck-Board-Backyard-05.jpg",
    title: "Request A Quote",
    description:
      "Sed adipiscing ornare risus. Morbi est est, blandit sit amet, sagittis vel, euismod vel, velit. ",
  },
  {
    image: "images/Grey-Composite-Deck-Board-Backyard-03.jpg",
    title: "Request A Quote",
    description: "Grey Composite Deck Board Backyard ",
  },
  {
    image: "images/Grey-Composite-Deck-Board-Backyard-04.jpg",
    title: "Grey-Composite-Deck-Board-Backyard",
    description:
      "Sed adipiscing ornare risus. Morbi est est, blandit sit amet, sagittis vel, euismod vel, velit. ",
  },
];

// Feature data
const features = [
  {
    title: "DFW Local Inventory, Quick Delivery",
    description:
      "Based in the DFW area, our inventory is stocked and ready for quick delivery, so you can start your project without waiting.",
    action: "Schedule a Visit",
  },
  {
    title: "High-performance, Low-maintenance",
    description:
      "Our decking boards have over 30-year lifespan. Zero water absorption, saltwater resistant, and eco-friendly.",
    action: "Get Free Samples",
  },
  {
    title: "Top Quality, Unbeatable Prices",
    description:
      "Get the same high-quality decking as major retailers, but at a price you'll love. Save more without compromising on quality!",
    action: "Request a Quote",
  },
];

// Client data
const clients = [
  {
    image: "images/contructor-avatar.jpg",
    name: "Contrustor",
    description:
      "I have used this exact product onto other deck projects and it worked very well so I chose to use it again for a third time on my most recent project It looks good and is very durable. It is also easy to install.",
  },
  {
    image: "images/homeowner-avatar.jpg",
    name: "Homeowner",
    description:
      "Perfect for picture framing my deck and steps. Easy to install looks good now. I like the fact that it will last for a very long time. ",
  },
  {
    image: "images/designer-avatar.jpg",
    name: "Designer",
    description:
      "The wood grain texture mimics natural wood, yet the solid color gives the impression that the board has been painted. If you intend to stay in a place for a while or want to upgrade to a composite deck to boost your curb appeal, I could see using this product. The longer you can utilize this product, the more valuable it becomes. Due to different financial situations, not everyone can always afford the more expensive product, I believe that my homeowners association would benefit from this product.",
  },
  {
    image: "images/builder-avatar.jpg",
    name: "Builder",
    description:
      "I must have ordered samples from every composite deck board manufacturer out there. I chose this because it's by far the best quality and the price is evry affordable. The wood grain looks the most real out of all the samples I looked at. It was easy to work with, cuts nicely, looks fabulous!",
  },
];

// Function to generate product carousel
function generateProductCarousel() {
  const carousel = document.getElementById("carousel-images");
  products.forEach((product) => {
    const productEl = document.createElement("article");
    productEl.innerHTML = `
      <div class="image fit">
        <img src="${product.image}" alt="${product.title}" />
      </div>
      <p>${product.description}</p>
      <header>
        <h3>${product.title}</h3>
      </header>
    `;
    carousel.appendChild(productEl);
  });
}

// Function to generate feature grid
function generateFeatureGrid() {
  const grid = document.getElementById("feature-grid");
  features.forEach((feature) => {
    const featureEl = document.createElement("article");
    featureEl.innerHTML = `
      <header>
        <h3>${feature.title}</h3>
      </header>
      <p>${feature.description}</p>
      <footer>
        <a href="#" class="button special">${feature.action}</a>
      </footer>
    `;
    grid.appendChild(featureEl);
  });
}
// Function to handle "Read More" functionality
function setupReadMore() {
  const clientBoxes = document.querySelectorAll(".box.person");
  clientBoxes.forEach((box) => {
    const description = box.querySelector("p");
    const originalText = description.textContent;

    if (description.offsetHeight > 200) {
      description.style.maxHeight = "200px";
      description.style.overflow = "hidden";

      const readMoreBtn = document.createElement("span");
      readMoreBtn.className = "clickable-text";
      readMoreBtn.textContent = "Read More";

      description.style.overflow = "hidden";

      readMoreBtn.addEventListener("click", () => {
        if (description.style.maxHeight) {
          description.style.maxHeight = null;
          description.style.overflow = "visible";
          readMoreBtn.textContent = "Read Less";
        } else {
          description.style.maxHeight = "200px";
          description.style.overflow = "hidden";
          readMoreBtn.textContent = "Read More";
        }
      });

      box.appendChild(readMoreBtn);
    }
  });
}

// Add setupReadMore to init function
const originalInit = init;
init = function () {
  originalInit();
  setupReadMore();
};

// Function to generate client grid
function generateClientGrid() {
  const grid = document.getElementById("client-grid");
  clients.forEach((client) => {
    const clientEl = document.createElement("div");
    clientEl.className = "box person";
    const starsHTML = '<div class="stars">★★★★★</div>';
    clientEl.innerHTML = `
      <div class="image round">
        <img src="${client.image}" alt="${client.name}" />
      </div>
      <h3>${client.name}</h3>
      ${starsHTML}
      <p>${client.description}</p>
    `;
    grid.appendChild(clientEl);
  });
}

// Initialize all dynamic content
function init() {
  generateProductCarousel();
  generateFeatureGrid();
  generateClientGrid();
}

// Run initialization when DOM is fully loaded
document.addEventListener("DOMContentLoaded", init);

// Header scroll effect
window.addEventListener("scroll", function () {
  const header = document.getElementById("header");
  if (window.scrollY > 100) {
    header.classList.add("header-scrolled");
  } else {
    header.classList.remove("header-scrolled");
  }
});

// Smooth scroll to footer when "Contact Us" is clicked
var scrollToBottomNav = document.getElementById("contact-nav");
document.getElementById("contact-nav").addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector("#footer").scrollIntoView({
    behavior: "smooth",
  });
});

// Scroll to top button
var scrollToTopBtn = document.getElementById("scroll-to-top");

window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "inline-flex";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

scrollToTopBtn.onclick = function () {
  scrollToTop();
};

function scrollToTop() {
  var currentScroll =
    document.documentElement.scrollTop || document.body.scrollTop;

  if (currentScroll > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, currentScroll - currentScroll / 15);
  }
}

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

document
  .querySelector('button[type="submit"]')
  .addEventListener("click", function (e) {
    e.preventDefault(); // Prevent the default form submission
    console.log("Submit button clicked");
    // Your code to handle the submission
  });

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  e.stopPropagation();
  console.log("Submit button clicked");

  try {
    const name = encodeURIComponent(document.getElementById("name").value);
    const phone = encodeURIComponent(document.getElementById("phone").value);
    const email = encodeURIComponent(document.getElementById("email").value);
    const message = encodeURIComponent(
      document.getElementById("message").value,
    );

    const googleFormUrl = `https://docs.google.com/forms/d/e/1FAIpQLSedlg7SLNl4P2OeCtBIuPP93AAg0iE3vlqnoNfKodLSshyoiA/formResponse?entry.2005620554=${name}&entry.1045781291=${email}&entry.1166974658=${phone}&entry.839337160=${message}`;

    console.log("Submitting to URL:", googleFormUrl);

    const form = document.createElement("form");
    form.method = "POST";
    form.action = googleFormUrl;
    form.target = "hidden_iframe";
    document.body.appendChild(form);
    form.submit();

    // Reset form and show confirmation message
    setTimeout(() => {
      this.reset();
      alert(
        "Your message submitted successfully! We will contact with you soon",
      );
    }, 1000);
  } catch (error) {
    console.error("Error submitting message:", error);
    alert("An error occurred while submitting the form. Please try again.");
  }
});
