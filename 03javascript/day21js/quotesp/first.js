const quotes = [
  // Hindi Quotes
  "जो खो गया उसके लिए रोया नहीं करते, जो पाया है उसे खोने मत दो।",
  "जो संघर्ष करता है वही चमकता है।",
  "इंसान खुद की नज़रों में सही होना चाहिए, दुनिया तो भगवान से भी खुश नहीं।",
  "समय बर्बाद मत करो, ये वही चीज़ है जो कभी वापस नहीं आती।",
  "जो लोग आपको गिरता देखना चाहते हैं, उन्हें अपनी उड़ान से जवाब दो।",
  "बिना मेहनत के कुछ भी नहीं मिलता, ये जिंदगी उतनी आसान नहीं है।",
  "हिम्मत करने वालों की कभी हार नहीं होती।",
  "सपने वो नहीं जो नींद में आएं, सपने वो हैं जो नींद ही न आने दें।",
  "जो अपने हालात खुद बदलते हैं, इतिहास उन्हीं का होता है।",
  "हर सुबह एक नया मौका है खुद को बेहतर बनाने का।",

  // English Quotes
  "Success doesn’t come from comfort zones.",
  "Push yourself, because no one else is going to do it for you.",
  "Dream big. Work hard. Stay focused.",
  "You don’t have to be great to start, but you have to start to be great.",
  "Doubt kills more dreams than failure ever will.",
  "Discipline is choosing between what you want now and what you want most.",
  "Your only limit is you.",
  "Don’t watch the clock; do what it does. Keep going.",
  "The harder you work for something, the greater you’ll feel when you achieve it.",
  "Success is not for the lazy."
];

function getRandomQuote() {
const text = document.getElementById("quote");

const index = Math.floor(Math.random()*quotes.length);
text.textContent = quotes[index];
}
setInterval(getRandomQuote, 2000); // Change quote every 5 seconds