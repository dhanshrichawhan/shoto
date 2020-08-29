const express = require('express');
const { nanoid } = require('nanoid');

const router = express.Router();
const Link = require('../models/link');

router.get('/shorten', async (req, res) => {
  const url = req.query.url;

  if (!url) {
    return res
      .status(400)
      .send({ message: 'You need to pass an url to use this service' });
  }

  const uniqueId = nanoid(6);

  const newLink = new Link({ url, uniqueId });
  await newLink.save();

  return res.send({ shortenedUrl: 'http://localhost:3000/' + uniqueId });
});

router.get('/:uniqueId', async (req, res) => {
  const uniqueId = req.params.uniqueId;

  if (!uniqueId) {
    return res
      .status(400)
      .send({ message: 'You need to pass an url to use this service' });
  }

  const link = await Link.findOne({ uniqueId });

  if (!link) {
    return res.status(404).send({ message: 'Document doesnt exist' });
  }

  res.redirect(link.url);
});

module.exports = router;
