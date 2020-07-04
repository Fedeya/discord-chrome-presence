function convert(text, image, details, presence) {
	return {
		...presence,
		largeImageKey: image,
		largeImageText: text,
		details
	};
}

module.exports = {
	convert
};
