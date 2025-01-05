const express = require('express');
const { ethers } = require('ethers');

const app = express();
const PORT = process.env.PORT || 5000;



app.get('/',(req,res)=>{
    res.send('hello world')
})

// API to generate wallet address and private key
app.get('/g', (req, res) => {
  try {
    // Generate a random wallet
    const wallet = ethers.Wallet.createRandom();

    // Respond with the wallet address and private key
    res.json({
      address: wallet.address,
      privateKey: wallet.privateKey,
    });
  } catch (error) {
    console.error('Error generating wallet:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


module.exports = app;
