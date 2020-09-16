const themeSwitcher = document.getElementById('switcher');

themeSwitcher.addEventListener('click', function() {
	document.body.classList.toggle('dark');
})