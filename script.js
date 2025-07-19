<!-- index.html --><!DOCTYPE html><html lang="en"><head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Mafia Wearz</title>
  <link rel="stylesheet" href="style.css" />
</head><body>
  <div class="intro-animation">
    <div class="car-entry"></div>
    <h1 class="logo-animation">MAFIA WEARZ</h1>
    <audio autoplay>
      <source src="sound.mp3" type="audio/mpeg">
    </audio>
  </div>  <section class="products">
    <h2>Our Products</h2>
    <div class="product-list">
      <div class="product-card">
        <h3>T-Shirt</h3>
        <p>Price: ₹400</p>
        <button onclick="orderProduct('T-Shirt')">Customize & Order</button>
      </div>
      <div class="product-card">
        <h3>Oversized T-Shirt</h3>
        <p>Price: ₹600</p>
        <button onclick="orderProduct('Oversized T-Shirt')">Customize & Order</button>
      </div>
      <div class="product-card">
        <h3>Hoodie</h3>
        <p>Price: ₹1500</p>
        <button onclick="orderProduct('Hoodie')">Customize & Order</button>
      </div>
    </div>
    <p class="cod">🚚 All India Cash on Delivery Available</p>
  </section>  <div class="order-form hidden" id="orderForm">
    <h2>Order Form</h2>
    <form>
      <label>Name:<input type="text" required></label>
      <label>Phone Number:<input type="tel" required></label>
      <label>Additional Number (Optional):<input type="tel"></label>
      <label>Email:<input type="email" required></label>
      <label>State:
        <select id="stateSelect" onchange="loadDistricts()"></select>
      </label>
      <label>District:
        <select id="districtSelect"></select>
      </label>
      <button type="submit">Place Order</button>
    </form>
  </div>  <script src="script.js"></script></body></html>
