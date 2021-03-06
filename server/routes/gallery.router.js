const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');

// DO NOT MODIFY THIS FILE FOR BASE MODE
// GET Route
router.get('/', (req, res) => {
    res.send(galleryItems);
}); // END GET Route

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;
    console.log('this is a specific log', galleryId);
    console.log('this is a differet log', galleryItems);
    for(const galleryItem of galleryItems) {
        if(galleryItem.id == galleryId) {
            
            galleryItem.likes += 1;
        }
    }
    res.sendStatus(200);
}); // END PUT Route


module.exports = router;