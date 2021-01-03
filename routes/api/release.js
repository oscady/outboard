const express = require('express');
const router = express.Router();
router.use(express.urlencoded({ extended: false }));
router.use(express.json());
// item model
const Release = require('../../models/Release');
import { multerUploads } from '../../middleware/multerUpload';
const { check, validationResult } = require('express-validator');

module.exports = router;

// @route GET api/items
// @desc Get All Items
// @access Public

router.get('/', (req, res) => {
	Release.find()
		.sort({ date: -1 })
		.then((items) => res.json(items))
		.catch((err) => res.status(404).json({ success: false }));
});

// @route GET api/items
// @desc get SINGLE Release
// @access Public
router.get('/:id', (req, res) => {
	Release.findById(req.params.id)
		.then((item) => res.json(item))
		.catch((err) => res.status(404).json({ success: false }));
});

// @route POST api/items
// @desc Post To Items
// @access Public

router.post('/', multerUploads.none(), async (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({
			errors: errors.array()
		});
	}

	const { name, tracks, artwork, date, artists } = req.body;

	try {
		const newItem = new Release({
			name,
			artists,
			tracks,
			artwork,
			date
		});

		const item = await newItem.save();

		res.json(item);
	} catch (err) {
		console.error(err.message);
		req.status(500).send('server error');
	}
});

// @route DELETE api/items:id
// @desc Delete An Release
// @access Public

router.delete('/:id', (req, res) => {
	Release.findById(req.params.id)
		.then((item) => item.remove().then(() => res.json({ success: true })))
		.catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
