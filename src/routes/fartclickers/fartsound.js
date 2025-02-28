export function playSound(data) {
	return playAudio(new Audio(makeSoundURL(data)));
}

export function playAudio(audio) {
	audio.play();

	return new Promise((resolve, reject) => {
		audio.onended = () => resolve();
		audio.onerror = (e) => reject(e);
	});
}

export const SOUNDS_URL = makeURL('sounds.json');

export function makeSoundURL(data) {
	return makeURL(`sounds/${data.sound}`);
}

export function makeURL(path) {
	return `https://github.com/gddmadoss/movies/raw/main/${path}`;
}