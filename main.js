document.getElementById("orderForm").addEventListener("submit", function(e){
  e.preventDefault();

  // Dish price mapping
  let prices = {
    "Veg Biryani": 250,
    "Paneer Butter Masala": 300,
    "Chicken Curry": 350,
    "Fish Fry": 400
  };

  let dish = document.getElementById("dish").value;
  let amount = prices[dish] * 100; // Razorpay accepts paise (₹250 = 25000)

  var options = {
    "key": "YOUR_RAZORPAY_KEY_ID", // 🔑 Replace with your Razorpay Key ID
    "amount": amount,
    "currency": "INR",
    "name": "My Restaurant",
    "description": "Food Order Payment",
    "handler": function (response){
        alert("✅ Payment Successful! Payment ID: " + response.razorpay_payment_id);
    },
    "prefill": {
        "name": document.getElementById("name").value,
        "email": document.getElementById("email").value,
        "contact": document.getElementById("phone").value
    },
    "theme": {
        "color": "#ff6f61"
    }
  };

  var rzp1 = new Razorpay(options);
  rzp1.open();
});
document.getElementById("paymentForm").addEventListener("submit", function(e){
  e.preventDefault();
  let method = document.querySelector("input[name='payment']:checked").value;

  // redirect to success page after payment
  window.location.href = "success.html?method=" + method;
});
