// Dynamically update the PayPal amount field with the donation amount
document.getElementById("amount").addEventListener("input", function () {
  document.getElementById("paypal-amount").value = this.value;
});

// Wallet addresses for crypto donations
const walletAddresses = {
  btc: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
  eth: "0x4E83362442B8d1bec281594cEa3050c8EB01311C",
};
// Show the modal for crypto donations
function showCryptoModal() {
  const modal = document.getElementById("crypto-modal");
  modal.style.display = "flex"; // Show the modal
}

// Hide the modal
function hideCryptoModal() {
  const modal = document.getElementById("crypto-modal");
  modal.style.display = "none"; // Hide the modal
}

// Update the wallet info based on the selected crypto
function updateCryptoInfo() {
  const crypto = document.getElementById("crypto-select").value;
  const address = walletAddresses[crypto];

  // Display the wallet address
  document.getElementById(
    "wallet-address"
  ).textContent = `Wallet Address: ${address}`;
}
function copyAddress() {
  const walletAddress = document
    .getElementById("wallet-address")
    .textContent.replace("Wallet Address: ", "");

  // Copy the address to the clipboard
  navigator.clipboard
    .writeText(walletAddress)
    .then(() => {
      alert("Wallet address copied to clipboard!");
    })
    .catch((err) => {
      console.error("Failed to copy address: ", err);
    });
}
