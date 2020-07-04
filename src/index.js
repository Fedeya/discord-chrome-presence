const express = require('express');
const client = require('./config/client');

const { convert } = require('./helpers');

const app = express();

app.use(express.json());

app.post('/', (req, res) => {
	const { hostname, title } = req.body;

	let presence = {
		details: hostname,
		largeImageKey: 'chrome',
		largeImageText: 'Google Chrome',
		state: title
	};

	switch (hostname) {
		case 'www.youtube.com':
			presence = convert('YouTube', 'youtube', 'Watching', presence);
			break;
		case 'github.com':
			presence = convert('GitHub', 'github', 'Reading Code', presence);
			break;
	}

	client.updatePresence(presence);

	res.json({ message: 'success' });
});

app.listen(38018, () => console.log('Discord Presence Started!'));
