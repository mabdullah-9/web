// Apna WhatsApp number yahan likhein (country code ke sath, baghair + ya spaces ke)
// Example Pakistan ke liye: "923001234567"
const WHATSAPP_NUMBER = "923104341328";

// Har "Order Now" button par click hone par WhatsApp message open karega
document.addEventListener("DOMContentLoaded", () => {
  const orderButtons = document.querySelectorAll(".order-btn");

  orderButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest(".card");
      const dressName = card
        ? card.querySelector(".card-title").textContent.trim()
        : "Dress";
      const dressPrice = card
        ? card.querySelector(".card-price").textContent.trim()
        : "";
        

      const message = `Assalam-o-Alaikum LASANI ARTS! Mujhe yeh dress order karna hai:\n- Dress: ${dressName}\n- Price: ${dressPrice}`;
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

      window.open(whatsappUrl, "_blank");
    });
  });
});
