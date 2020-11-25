const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth')
import {multerUploads} from '../../middleware/multerUpload';
const {check, validationResult} = require('express-validator');
// image model
const Image = require('../../models/Image');

module.exports = router;

// @route GET api/images
// @desc Get All images
// @access Public

router.get('/', (req, res) => {
  Image.find()
    .sort({ date: -1 })
    .then(image => res.json(image))
});

// @route GET api/images
// @desc Post To images
// @access Public

router.post('/', multerUploads.none(), async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(400)
      .json({
        errors: errors.array()
      })
  }

  const { cloudName, fileType, publicId, thumbnail, tags, date, active } = req.body;

  try {
    const newImage = new Image({
      cloudName,
      fileType,
      publicId,
      thumbnail,
      tags,
      date,
      active
    });
  
    const image = await newImage.save();

    res.json(image)
  } catch (err) {
    console.error(err.message);
    req.status(500).send('server error');
  }
});

// @route DELETE api/images:id
// @desc Delete An Image
// @access Public

router.delete('/:id', (req,res ) => {
  Image.findById(req.params.id)
    .then(image => image.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
