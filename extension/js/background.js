async function updatePresence(tab) {
	tab = {
		...tab,
		hostname: new URL(tab.url).hostname
	};

	if (tab) {
		await fetch('http://localhost:38018/', {
			body: JSON.stringify(tab),
			method: 'POST',
			headers: {
				'Content-type': 'application/json'
			}
		});
	}
}

let tabId;

setInterval(() => {
	chrome.windows.getLastFocused({ populate: true }, window => {
		if (!window.tabs) return;
		const tab = window.tabs.find(tab => tab.highlighted);
		if (tab.id !== tabId) {
			updatePresence(tab);
			tabId = tab.id;
		}
	});
}, 1000);
