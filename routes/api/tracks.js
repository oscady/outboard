const express = require('express');
const router = express.Router();
router.use(express.urlencoded({ extended: false }));
router.use(express.json());
// track model
const Track = require('../../models/Track');
import { multerUploads } from '../../middleware/multerUpload';
const { check, validationResult } = require('express-validator');

module.exports = router;

// @route GET api/tracks
// @desc Get All Items
// @access Public

router.get('/', (req, res) => {
	Track.find()
		.sort({ date: -1 })
		.then((tracks) => res.json(tracks))
		.catch((err) => res.status(404).json({ success: false }));
});

// @route GET api/tracks
// @desc get SINGLE Track
// @access Public
router.get('/:id', (req, res) => {
	Track.findById(req.params.id)
		.then((track) => res.json(track))
		.catch((err) => res.status(404).json({ success: false }));
});

// @route POST api/tracks
// @desc Post To Items
// @access Public

router.post('/', multerUploads.none(), async (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({
			errors: errors.array()
		});
	}

	const { artistName, url, artwork, date, trackName } = req.body;

	try {
		const newItem = new Track({
			artistName,
			trackName,
			url,
			artwork,
			date
		});

		const track = await newItem.save();

		res.json(track);
	} catch (err) {
		console.error(err.message);
		req.status(500).send('server error');
	}
});

// @route DELETE api/tracks:id
// @desc Delete An Track
// @access Public

router.delete('/:id', (req, res) => {
	Track.findById(req.params.id)
		.then((track) => track.remove().then(() => res.json({ success: true })))
		.catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
