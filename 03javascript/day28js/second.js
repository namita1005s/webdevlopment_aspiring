// callback hell 
function placeOrder(callback) {
  console.log("☎️ Talking with Dominos...");
  setTimeout(() => {
    console.log("✅ Order placed successfully!");
    callback();
  }, 1000);
}

function preparingOrder(callback) {
  console.log("👨‍🍳 Chef started preparing the order...");
  setTimeout(() => {
    console.log("🍕 Order prepared!");
    callback();
  }, 1000);
}

function pickupOrder(callback) {
  console.log("📞 Calling customer for pickup...");
  setTimeout(() => {
    console.log("📦 Order picked up successfully!");
    callback();
  }, 1000);
}

// Nested callbacks (Callback Hell)
placeOrder(() => {
  preparingOrder(() => {
    pickupOrder(() => {
      console.log("🎉 All done. Enjoy your pizza!");
    });
  });
});

//output

// ☎️ Talking with Dominos...
// ✅ Order placed successfully!
// 👨‍🍳 Chef started preparing the order...
// 🍕 Order prepared!
// 📞 Calling customer for pickup...
// 📦 Order picked up successfully!
// 🎉 All done. Enjoy your pizza!
