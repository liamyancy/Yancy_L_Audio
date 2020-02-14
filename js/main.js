(() => {
// make a reference to each button
const playButtons = document.querySelectorAll('.playButton'),
	  pauseButtons = document.querySelectorAll('.pauseButton'),
	  rwButtons = document.querySelectorAll('.rwButton'),
	  audioElement = document.querySelector('audio');

let globalPaused = false;

//play associated song (data-trackref attribute)
function playTrack() {
	if (globalPaused) {console.log('paused');
	resumeTrack();
	return; }

	let audioSource = this.dataset.trackref;
// set the audio source
	audioElement.src = `audio/${audioSource}.mp3`;
// load and play audio
	audioElement.load();
	audioElement.play();
//	debugger;
}

function resumeTrack() {
	globalPaused = false;
	audioElement.play();
}

function pauseTrack() {
	audioElement.pause();
	globalPaused = true;
}

function rwTrack() {
	audioElement.currentTime = 0;
}

//process the playButtons and add event handling
playButtons.forEach(button => button.addEventListener("click", playTrack));
pauseButtons.forEach(button => button.addEventListener("click", pauseTrack));
rwButtons.forEach(button => button.addEventListener("click", rwTrack));
})();