	const fetchData = async (searchTerm) => {

	let pokeUrl  = 'https://pokeapi.co/api/v2/pokemon/' + searchTerm;
	let pokeUrl2 = 'https://pokeapi.co/api/v2/pokemon-species/' + searchTerm;

	try {
		const [response, response2] = await Promise.all ([
			axios.get(pokeUrl),
			axios.get(pokeUrl2)
		])

		return [response.data, response2.data];

	} catch (error) {
		// Error
		if (error) {

			if (searchBar.value !== '') {
				document.querySelector('.error').innerHTML = 'Invalid Text'
				document.querySelector('#image').innerHTML = '';
				setTimeout(() =>{
					return 		document.querySelector('.error').innerHTML = '';
			    },2000)
			}; 
			
			if (searchBar2.value !== '') {
				document.querySelector('.error1').innerHTML = 'Invalid Text'
				document.querySelector('#image2').innerHTML = '';
				setTimeout(() =>{
					return 		document.querySelector('.error1').innerHTML = '';
			    },2000)
			};

			console.log(error)
			console.log(error.response.data);
            console.log(error.response.status);
			console.log(error.response.headers);
			console.log(error.toJSON());

		} else if (error.request) {
		
			console.log(error.request);

		} else {
			console.log('Error', error.message);
		}
		console.log(error);
	}
};

const searchBar = document.querySelector('.search');
const searchBar2 = document.querySelector('.search2');

const onInput = async event => {
	const pokemons = await fetchData(event.target.value);

if (searchBar.value !== '') {
	
	if (pokemons[0].sprites.other.dream_world.front_default === null) {
	document.querySelector('#image').innerHTML = `
	<img src = "../../img/no_image.png" />
	<h1>${pokemons[0].name}</h1>
	<h3 id='species'>${pokemons[0].species.url}</h3>
	<h3 id='color'></h3>
	<h3 id='type'>Type: ${(pokemons[0].types).map(x => x.type.name)}</h3>
	<h3 id='egg'></h3>
	<h3 id='habitat'></h3>
	<div id='evolution1'>
	<h4 id='evoTo1'>${pokemons[1].evolution_chain.url}</h4>
	<h3 id='evo1'><span id='toEvo1'></span></h3>
	</div>
	<h3 id='exp1'>${pokemons[0].base_experience}</h3>
	<h3 id='win1'></h3>
	<h3 id='lose1'></h3>
	`;
	} else if (pokemons[1].evolves_from_species === null) {
		document.querySelector('#image').innerHTML = `
		<img src = "${pokemons[0].sprites.other.dream_world.front_default}" />
		<h1>${pokemons[0].name}</h1>
		<h3 id='species'>${pokemons[0].species.url}</h3>
		<h3 id='color'></h3>
		<h3 id='type'>Type: ${(pokemons[0].types).map(x => x.type.name)}</h3>
		<h3 id='egg'></h3>
		<h3 id='habitat'></h3>
		<div id='evolution1'>
		<h4 id='evoTo1'>${pokemons[1].evolution_chain.url}</h4>
		<h3 id='evo1'><span id='toEvo1'></span></h3>
		</div>
		<h3 id='exp1'>${pokemons[0].base_experience}</h3>
		<h3 id='win1'></h3>
		<h3 id='lose1'></h3>
		`;	
	}else {
	document.querySelector('#image').innerHTML = `
	<img src = "${pokemons[0].sprites.other.dream_world.front_default}" />
	<h1>${pokemons[0].name}</h1>
	<h3 id='species'>${pokemons[0].species.url}</h3>
	<h3 id='color'></h3>
	<h3 id='type'>Type: ${(pokemons[0].types).map(x => x.type.name)}</h3>
	<h3 id='egg'></h3>
	<h3 id='habitat'></h3>
	<div id='evolution1'>
	<h4 id='evoTo1'>${pokemons[1].evolution_chain.url}</h4>
	<h3 id='evo1'><span id='toEvo1'></span></h3>
	</div>
	<h3 id='exp1'>${pokemons[0].base_experience}</h3>
	<h3 id='win1'></h3>
	<h3 id='lose1'></h3>
	`;
	}
}

// Details
function details() {
	if (searchBar.value === '')  {  
		return false;
	}
	move();
};
details();

// Comparison
if (searchBar2.value !== '') {
	function compare() {
		let a = document.querySelector('#exp1').innerHTML;
		let b = document.querySelector('#exp2').innerHTML;
	if (parseInt(a) > parseInt(b)) {
		document.querySelector('#exp1').style.backgroundColor = 'green';
		document.querySelector('#win1').innerHTML = 'WIN'
		document.querySelector('#exp2').style.backgroundColor = 'red';
		document.querySelector('#lose2').innerHTML = 'LOSE'
	} else if(parseInt(a) === parseInt(b)) {
		document.querySelector('#win2').innerHTML = 'DRAW'
		document.querySelector('#lose1').innerHTML = 'DRAW'
	} else {
		document.querySelector('#exp1').style.backgroundColor = 'red';
		document.querySelector('#win2').innerHTML = 'WIN'
		document.querySelector('#exp2').style.backgroundColor = 'green';
		document.querySelector('#lose1').innerHTML = 'LOSE'
	} 
	};
	compare();
	}
};

const onInput2 = async event => {
	const pokemons = await fetchData(event.target.value);

	if (searchBar2.value !== '') {
		
	if (pokemons[0].sprites.other.dream_world.front_default === null) {
		document.querySelector('#image2').innerHTML = `
		<img src = "../../img/no_image.png" />
		<h1>${pokemons[0].name}</h1>
		<h3 id='species2'>${pokemons[0].species.url}</h3>
		<h3 id='color2'></h3>
		<h3 id='type2'>Type: ${(pokemons[0].types).map(x => x.type.name)}</h3>
		<h3 id='egg2'></h3>
		<h3 id='habitat2'></h3>
		<div id='evolution2'>
			<h4 id='evoTo2'>${pokemons[1].evolution_chain.url}</h4>
			<h3 id='evo2'><span id='toEvo2'></span></h3>
		</div>
		<h3 id='exp2'>${pokemons[0].base_experience}</h3>
		<h3 id='win2'></h3>
		<h3 id='lose2'></h3>
		`;
		}else if (pokemons[1].evolves_from_species === null) {
			document.querySelector('#image2').innerHTML = `
			<img src = "${pokemons[0].sprites.other.dream_world.front_default}" />
			<h1>${pokemons[0].name}</h1>
			<h3 id='species2'>${pokemons[0].species.url}</h3>
			<h3 id='color2'></h3>
			<h3 id='type2'>Type: ${(pokemons[0].types).map(x => x.type.name)}</h3>
			<h3 id='egg2'></h3>
			<h3 id='habitat2'></h3>
			<div id='evolution2'>
				<h4 id='evoTo2'>${pokemons[1].evolution_chain.url}</h4>
				<h3 id='evo2'><span id='toEvo2'></span></h3>
			</div>
			<h3 id='exp2'>${pokemons[0].base_experience}</h3>
			<h3 id='win2'></h3>
			<h3 id='lose2'></h3>
			`;	
		} else {
		document.querySelector('#image2').innerHTML = `
		<img src = "${pokemons[0].sprites.other.dream_world.front_default}" />
		<h1>${pokemons[0].name}</h1>
		<h3 id='species2'>${pokemons[0].species.url}</h3>
		<h3 id='color2'></h3>
		<h3 id='type2'>Type: ${(pokemons[0].types).map(x => x.type.name)}</h3>
		<h3 id='egg2'></h3>
		<h3 id='habitat2'></h3>
		<div id='evolution2'>
			<h4 id='evoTo2'>${pokemons[1].evolution_chain.url}</h4>
			<h3 id='evo2'><span id='toEvo2'></span></h3>
		</div>
		<h3 id='exp2'>${pokemons[0].base_experience}</h3>
		<h3 id='win2'></h3>
		<h3 id='lose2'></h3>
		`;
		}
	}
	
	// Details
	function details2() {
		if (searchBar2.value === '')  {  
			return false;
		}
		move2();
	};
	details2();

// Comparison
if (searchBar.value !== '') {
	function compare2() {
		let c = document.querySelector('#exp1').innerHTML;
		let d = document.querySelector('#exp2').innerHTML;
	if (parseInt(c) > parseInt(d)) {
		document.querySelector('#exp1').style.backgroundColor = 'green';
		document.querySelector('#win1').innerHTML = 'WIN'
		document.querySelector('#exp2').style.backgroundColor = 'red';
		document.querySelector('#lose2').innerHTML = 'LOSE'
	} else if(parseInt(c) === parseInt(d)) {
		document.querySelector('#win2').innerHTML = 'DRAW'
		document.querySelector('#lose1').innerHTML = 'DRAW'
	} else {
		document.querySelector('#exp1').style.backgroundColor = 'red';
		document.querySelector('#win2').innerHTML = 'WIN'
		document.querySelector('#exp2').style.backgroundColor = 'green';
		document.querySelector('#lose1').innerHTML = 'LOSE'
	} 
	};
	compare2();
	}
	
};

function move() {

		let URL1 = document.querySelector('#species').innerHTML;
		let URL2 = document.querySelector('#evoTo1').innerHTML;

		const promise1 = axios.get(URL1);
		const promise2 = axios.get(URL2);

		Promise.all([promise1, promise2])

		.then(function(values) {
			species = values[0].data.color.name;
			document.querySelector('#color').innerHTML = `
			Color: ${species}
			`;

			egg_group = values[0].data.egg_groups[0].name;
			document.querySelector('#egg').innerHTML = `
			Egg Group: ${egg_group}
			`;

			if (values[0].data.habitat !== null)  {  
			habitat = values[0].data.habitat.name;
			document.querySelector('#habitat').innerHTML = `
			Habitat: ${habitat}
			`;
			} else {
			document.querySelector('#habitat').innerHTML = `
			Habitat: -
			`;
			};
			
			if (values[1].data.chain.evolves_to[0] === undefined) {
			evoTo  = values[1].data.chain.species.name;
			document.querySelector('#toEvo1').innerHTML = `
			${evoTo}
			`;
			} else if(values[1].data.chain.evolves_to[0].evolves_to[0] === undefined) {
			evoTo  = values[1].data.chain.species.name;
			evoTo1 = values[1].data.chain.evolves_to[0].species.name;
			document.querySelector('#toEvo1').innerHTML = `
			${evoTo} -
			${evoTo1}
			`;
			} else {
			evoTo  = values[1].data.chain.species.name;
			evoTo1 = values[1].data.chain.evolves_to[0].species.name;
			evoTo2 = values[1].data.chain.evolves_to[0].evolves_to[0].species.name;
			document.querySelector('#toEvo1').innerHTML = `
			${evoTo} -
			${evoTo1} -
			${evoTo2}
			`;
			}
		})
};

function move2() {

			let URL2 = document.querySelector('#species2').innerHTML;
			let URL3 = document.querySelector('#evoTo2').innerHTML;
			
			const promise1 = axios.get(URL2);
			const promise2 = axios.get(URL3);
			
			Promise.all([promise1, promise2])
			
			.then(function(values) {
			
				species = values[0].data.color.name;
				document.querySelector('#color2').innerHTML = `
				Color: ${species}
				`;
			
				egg_group = values[0].data.egg_groups[0].name;
				document.querySelector('#egg2').innerHTML = `
				Egg Group: ${egg_group}
				`;
			
				if (values[0].data.habitat !== null)  {  
				habitat = values[0].data.habitat.name;
				document.querySelector('#habitat2').innerHTML = `
				Habitat: ${habitat}
				`;
				} else {
				document.querySelector('#habitat2').innerHTML = `
				Habitat: -
				`;
				};
					if (values[1].data.chain.evolves_to[0] === undefined) {
					evoTo3  = values[1].data.chain.species.name;
					document.querySelector('#toEvo2').innerHTML = `
					${evoTo3}
						`;
					} else if(values[1].data.chain.evolves_to[0].evolves_to[0] === undefined) {
					evoTo3  = values[1].data.chain.species.name;
					evoTo4 = values[1].data.chain.evolves_to[0].species.name;
					document.querySelector('#toEvo2').innerHTML = `
					${evoTo3} -
					${evoTo4}
					`;
					} else {
					evoTo3  = values[1].data.chain.species.name;
					evoTo4 = values[1].data.chain.evolves_to[0].species.name;
					evoTo5 = values[1].data.chain.evolves_to[0].evolves_to[0].species.name;
					document.querySelector('#toEvo2').innerHTML = `
					${evoTo3} -
					${evoTo4} -
					${evoTo5}
					`;
					}
			})
};

searchBar.addEventListener('input', debounce(onInput, 1000));
searchBar2.addEventListener('input', debounce(onInput2, 1000));

// Validation Input 1
		document.querySelector(".search").addEventListener("keyup", () => {
	    if (searchBar.value === "") {
		document.querySelector('.error').innerHTML = 'Pokemon Name or ID';
		document.querySelector('#image').innerHTML = '';
		// document.querySelector('#ability').innerHTML = '';
		setTimeout(() =>{
			return 		document.querySelector('.error').innerHTML = '';
		},2000);
	} 
  });
// Validation Input 2
		document.querySelector(".search2").addEventListener("keyup", () => {
		if (searchBar2.value === "") {
		document.querySelector('.error1').innerHTML = 'Pokemon Name or ID';
		document.querySelector('#image2').innerHTML = '';
		// document.querySelector('#ability').innerHTML = '';
		setTimeout(() =>{
			return 		document.querySelector('.error1').innerHTML = '';
		},2000);
	} 
});
// Automatic Border Color Change
	function myFunction() {
	let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
	document.getElementById('image').style.borderColor =  randomColor;
	document.getElementById('image2').style.borderColor =  randomColor;
	setTimeout(myFunction, 1000);
  }

  window.onload = myFunction;

// Generate Random Number
    	document.querySelector(".left").addEventListener("click", () =>  {
		document.querySelector('.reset').style.backgroundColor = 'Yellowgreen';  
		document.querySelector(".left").disabled = true;
		document.querySelector(".left2").disabled = true;
		document.querySelector(".search").disabled = true;
		randomNumber = Math.floor(Math.random()*800);
		element = searchBar;
		element.value = randomNumber;
		element.dispatchEvent(new Event('input'));
	});

		document.querySelector(".right").addEventListener("click", () =>  {
		document.querySelector('.reset').style.backgroundColor = 'Yellowgreen';  
		document.querySelector(".right").disabled = true;
		document.querySelector(".right2").disabled = true;
		document.querySelector(".search2").disabled = true;
		randomNumber = Math.floor(Math.random()*1000);
		if (randomNumber <= 900) {
		element = searchBar2;
		element.value = randomNumber;
		element.dispatchEvent(new Event('input'));
		}
	}); 

// Clear Button
		document.querySelector(".reset").addEventListener("click", () =>  {
		searchBar.value = '';
		searchBar2.value = '';
		document.querySelector('#image').innerHTML = '';
		document.querySelector('#image2').innerHTML = '';
		document.querySelector(".search").readOnly = false;
		document.querySelector(".search2").readOnly = false;
		document.querySelector(".left").disabled = false;
		document.querySelector(".right").disabled = false;
		document.querySelector(".left2").disabled = false;
		document.querySelector(".right2").disabled = false;
		document.querySelector(".search").disabled = false;
		document.querySelector(".search2").disabled = false;
		document.querySelector('.reset').style.backgroundColor = 'transparent';  
	});

// Name Generator
let URL1 = "https://pokeapi.co/api/v2/pokemon/?limit=1050&offset=200"
const promise1 = axios.get(URL1);
Promise.all([promise1])

.then(function(values) {

  	document.querySelector(".left2").addEventListener("click", () =>  {
	document.querySelector('.reset').style.backgroundColor = 'Yellowgreen';  
	document.querySelector(".left2").disabled = true;
	document.querySelector(".left").disabled = true;
	document.querySelector(".search").disabled = true;
	randomNumber = Math.floor(Math.random()*100);
	search = values[0].data.results[randomNumber].name;
	element = document.querySelector('.search');
	element.value = search;
	element.dispatchEvent(new Event('input'));
});

	document.querySelector(".right2").addEventListener("click", () =>  {
	document.querySelector('.reset').style.backgroundColor = 'Yellowgreen';  
	document.querySelector(".right2").disabled = true;
	document.querySelector(".right").disabled = true;
	document.querySelector(".search2").disabled = true;
	randomNumber = Math.floor(Math.random()*100);
	search = values[0].data.results[randomNumber].name;
	element = document.querySelector('.search2');
	element.value = search;
	element.dispatchEvent(new Event('input'));
});

});

// Dark mode switcher
const themeSwitcher = document.getElementById('switcher');
themeSwitcher.addEventListener('click', function() {
	document.body.classList.toggle('dark');
});

// Non-Editable
	document.querySelector('.search').addEventListener('change', () => {
		document.querySelector('.reset').style.backgroundColor = 'Yellowgreen';  
		document.querySelector(".search").readOnly = true;
		document.querySelector(".left").disabled = true;
		document.querySelector(".left2").disabled = true;
		document.querySelector(".search").disabled = true;
	});
	document.querySelector('.search2').addEventListener('change', () => {
		document.querySelector('.reset').style.backgroundColor = 'Yellowgreen';  
		document.querySelector(".search2").readOnly = true;
		document.querySelector(".right").disabled = true;
		document.querySelector(".right2").disabled = true;
		document.querySelector(".search2").disabled = true;
	});
