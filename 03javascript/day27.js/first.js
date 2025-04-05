//  based on month size 22
const signs = [
    "Capricorn",
    "Aquarius",
    "Pisces",
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpio",
    "Sagittarius"
  ];

  // size of the array 32
  const compliments = [
    "You have a radiant personality!",
    "Your energy is contagious!",
    "You shine brighter than any star!",
    "You're a natural-born leader!",
    "You have a heart full of kindness.",
    "Your intuition is truly impressive.",
    "You bring peace and joy to those around you.",
    "You’re creative and full of great ideas!",
    "You are strong, smart, and unstoppable!",
    "Your presence makes everything better.",
    "You light up every room you enter.",
    "You have a beautiful mind.",
    "Your smile is pure sunshine.",
    "You inspire everyone around you.",
    "You make the world a better place.",
    "You radiate positivity.",
    "You handle challenges like a champion.",
    "You are uniquely talented.",
    "Your ideas are always brilliant.",
    "You have an incredible inner strength.",
    "You’re always so thoughtful and caring.",
    "You make a difference every single day.",
    "You have a calming presence.",
    "You bring out the best in people.",
    "You have a great sense of humor!",
    "You’re full of good vibes.",
    "You are wise beyond your years.",
    "You are a true original.",
    "You have a spark that lifts others up.",
    "Your compassion is admirable.",
    "You're simply amazing in every way!"
  ];

  // size 20
  const victimCardCompliments = [
    "You’ve been through silent battles—your strength hasn’t gone unnoticed by the universe.",
  "Your heart is soft in a world that rarely shows kindness. That’s your quiet magic.",
  "You often give love without expecting it back. That’s rare and beautiful.",
  "You’ve carried pain with grace. Relief is on its way.",
  "You try to be strong for everyone—now it’s time someone is strong for you.",
  "You’ve outgrown spaces that once felt like home. Growth always feels lonely at first.",
  "You have a calm spirit, even when chaos surrounds you.",
  "You may feel behind, but you’re moving exactly at your soul’s pace.",
  "People misunderstand your silence, but your energy speaks volumes.",
  "You’re doing better than you think—you just don’t give yourself enough credit.",
  "Your intuition is powerful—it protects you even when you doubt it.",
  "Your kindness echoes longer than you realize. The universe is keeping score.",
  "You are allowed to rest. Healing is a journey, not a race.",
  "You attract broken people because your spirit offers them comfort.",
  "You feel things deeply—that’s not a flaw, it’s a superpower.",
  "You’ve stayed soft despite everything—and that’s cosmic bravery.",
  "You’ve been waiting for a shift. It’s coming, slowly but surely.",
  "You forgive, even when it hurts. That grace will return to you.",
  "You love people who can’t match your depth. That’s why the universe is sending better.",
  "You don’t need to prove your worth. Your energy already speaks for you."
];
 
// size of the array 30
const goodLifeRecommendations = [
    "Feed a street dog or cat today — kindness brings instant karma.",
    "Compliment a stranger — your words may heal more than you know.",
    "Give water to plants or trees — the Earth notices your energy.",
    "Call someone you’ve been thinking about — it’s not a coincidence.",
    "Donate old clothes — clear space and create flow.",
    "Spend 10 minutes in silence — the universe speaks in stillness.",
    "Write down 3 things you're grateful for — gratitude amplifies blessings.",
    "Help someone without expecting anything in return.",
    "Smile at everyone you meet today — it's your aura’s superpower.",
    "Leave a positive note in a public place.",
    "Avoid gossip today — protect your energy and elevate your vibe.",
    "Drink more water — clarity flows from within.",
    "Spend time with nature — your soul needs grounding.",
    "Forgive someone quietly in your heart — it frees you more than them.",
    "Clean your room or desk — your space mirrors your mind.",
    "Wake up 30 minutes earlier and stretch — the cosmos favor discipline.",
    "Say 'thank you' more often — appreciation creates alignment.",
    "Share something inspiring on your social media.",
    "Be patient with someone who's struggling — empathy is divine.",
    "Support a small local business — good karma loops back.",
    "Offer your seat to someone else — your humility is noticed.",
    "Spend 5 minutes looking at the sky — connect to your cosmic source.",
    "Do something creative — art is your spirit talking.",
    "Eat something healthy — nourish your body, honor your temple.",
    "Disconnect from your phone for an hour — your mind will thank you.",
    "Apologize if you were wrong — it elevates your frequency.",
    "Pick up litter if you see it — the Earth watches your choices.",
    "Text a heartfelt message to someone you love.",
    "Meditate for 10 minutes — recharge your spiritual battery.",
    "Support someone else's dream — your belief holds power."
  ];
  // size of the array 20
  const realisticFuturePredictions = [
    "You will become a millionaire — your patience and effort will pay off.",
    "You will get married after two years to someone who truly understands you.",
    "You’ll receive a job placement directly from your college campus.",
    "Your dream job is closer than you think — an opportunity is on the way.",
    "You’ll travel abroad for work or study in the next few years.",
    "You will launch a successful business idea that others doubted.",
    "Your hard work will bring you unexpected recognition this year.",
    "Someone from your past will return with good intentions and closure.",
    "You will be the first in your circle to buy your own car or house.",
    "You’ll be part of a team or company that values your skills deeply.",
    "Marriage is written in your stars — and it will feel like home.",
    "You will achieve financial independence earlier than you expect.",
    "You’re going to receive an award, scholarship, or honor soon.",
    "The coming year will bring clarity and new beginnings in your career.",
    "Someone will soon appreciate your loyalty and support in a big way.",
    "You’ll start a creative project that brings you both joy and income.",
    "You will mentor or inspire others in your field someday.",
    "You will complete your studies with success and pride.",
    "A family celebration will bring unexpected joy and surprises.",
    "Your future includes success, stability, and a peaceful personal life."
  ];
  
  const form = document.getElementById('astroForm');
  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form from refreshing the page
    const Name = document.getElementById('firstName').value;
    const Surname = document.getElementById('lastName').value;
    const birthDate = Number(document.getElementById('day').value);
    const birthMonth = Number(document.getElementById('month').value);
    const birthYear = Number(document.getElementById('year').value);
    
    const result = document.getElementById('result');
    const first_message = `Hello ${Name} ${Surname}`;
    const second_message = `You were born on ${birthDate}/${birthMonth}/${birthYear}`;
    const third_message = `Your zodiac sign is ${signs[birthMonth - 1]}`;
    const fourth_message = compliments[birthDate-1];

    let index  = Math.floor(Math.random()*20);
    const fifth_message = victimCardCompliments[index];

    index =(Name.length * Surname.length * birthYear)%30;
    const sixth_message = goodLifeRecommendations[index];

    index = (birthDate * birthMonth * birthYear) % 20;
    const seventh_message = realisticFuturePredictions[index];

    result.innerHTML = ` <p><strong>${first_message}</strong></p>
  <p>${second_message}</p>
  <p> ${third_message}</p>
  <p> ${fourth_message}</p>
  <p> ${fifth_message}</p>
  <p><strong>Our Recommendation For You:</strong> ${sixth_message}</p>
  <p><strong>And In Future - </strong> ${seventh_message}</p>`;
  });
  
  