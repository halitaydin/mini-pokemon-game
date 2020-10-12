const themeSwitcher = document.getElementById('switcher');

themeSwitcher.addEventListener('click', function() {
	document.body.classList.toggle('dark');
})

const clickEvent = document.getElementsByClassName('pokebutton')[0];

clickEvent.addEventListener('click', function() {
	window.location.replace('Pokemon Fight/index1.html');
})