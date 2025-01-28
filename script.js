// Dynamically update the PayPal amount field with the donation amount
document.getElementById("amount").addEventListener("input", function () {
  document.getElementById("paypal-amount").value = this.value;
});

// Wallet addresses for crypto donations
const walletAddresses = {
 btc: "bc1qqjwe0wdenwmnj25frxv3wedffkyuu4z08l7tvj",
  eth: "0x10E1CdeC53B5B4B218CCc3db9Ea490be4A5d7BD6",
  usdt: "TYJZC75sRV62DNi596ckJivcHAGrw6wa5D",
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
