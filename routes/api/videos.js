const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth')
import {multerUploads, dataUri} from '../../middleware/multerUpload';
const {check, validationResult} = require('express-validator');
// video model
const Video = require('../../models/Video');

module.exports = router;

// @route GET api/videos
// @desc Get All videos
// @access Public

router.get('/', (req, res) => {
  Video.find()
    .sort({ date: -1 })
    .then(video => res.json(video))
});

// @route GET api/videos
// @desc Post To videos
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
    const newVideo = new Video({
      cloudName,
      fileType,
      publicId,
      thumbnail,
      tags,
      date,
      active
    });
  
    const video = await newVideo.save();

    res.json(video)
  } catch (err) {
    console.error(err.message);
    req.status(500).send('server error');
  }
});

// @route DELETE api/videos:id
// @desc Delete An Video
// @access Public

router.delete('/:id', (req,res ) => {
  Video.findById(req.params.id)
    .then(video => video.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
