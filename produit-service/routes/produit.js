const express = require('express');
const router = express.Router();
const Produit = require('../models/produit');

// Create a new produit
router.post('/produits', async (req, res) => {
  const { Refproduit, Nomproduit, Description, Quantite, typep, etatp } = req.body;

  try {
    const produit = new Produit({ Refproduit, Nomproduit, Description, Quantite, typep, etatp });
    await produit.save();
    res.status(201).json(produit);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all produits
router.get('/produits', async (req, res) => {
  try {
    const produits = await Produit.find();
    res.json(produits);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a specific produit by ID
router.get('/produits/:id', async (req, res) => {
  try {
    const produit = await Produit.findById(req.params.id);
    if (!produit) return res.status(404).json({ message: 'Produit not found' });
    res.json(produit);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update a produit
router.put('/produits/:id', async (req, res) => {
  try {
    const produit = await Produit.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!produit) return res.status(404).json({ message: 'Produit not found' });
    res.json(produit);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a produit
router.delete('/produits/:id', async (req, res) => {
  try {
    const produit = await Produit.findByIdAndDelete(req.params.id);
    if (!produit) return res.status(404).json({ message: 'Produit not found' });
    res.json({ message: 'Produit deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
