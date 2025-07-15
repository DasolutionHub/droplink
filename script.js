function generateWhatsApp() {
  const location = document.getElementById("locationInput").value.trim();
  const phone = document.getElementById("phoneInput").value.trim();
  const status = document.getElementById("statusMessage");

  if (!location.startsWith("https://www.google.com/maps")) {
    status.innerText = "⚠️ Please enter a valid Google Maps link.";
    return;
  }

  if (!/^[0-9]{11,15}$/.test(phone)) {
    status.innerText = "⚠️ Enter a valid phone number in international format.";
    return;
  }

  const message = `Hello, here is your rider's live location:\n${location}`;
  const encodedMsg = encodeURIComponent(message);
  const whatsappURL = `https://wa.me/${phone}?text=${encodedMsg}`;

  status.innerText = "✅ Opening WhatsApp...";
  setTimeout(() => {
    window.open(whatsappURL, '_blank');
    status.innerText = "✅ Message sent (or opened in WhatsApp).";
  }, 1000);
}