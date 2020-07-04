const express = require('express');
const client = require('./config/client');

const app = express();

app.use(express.json());

app.post('/', (req, res) => {
	const { hostname, title } = req.body;

	if (hostname === 'www.youtube.com') {
		client.updatePresence({
			largeImageKey: 'youtube',
			largeImageText: 'YouTube',
			details: 'Looking',
			state: title
		});
	}

	res.json({ message: 'success' });
});

app.listen(38018, () => console.log('Discord Presence Started!'));
