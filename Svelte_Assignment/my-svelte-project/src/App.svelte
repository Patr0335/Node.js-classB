<script>
	import { faker } from '@faker-js/faker';
	import PeopleTable from "./components/PeopleTable.svelte";

	let Gpeople = generatePeople(10)

	function generatePeople(numberOfPeople) {
		const ArrayofPeople = []
		for (let i = 0; i < numberOfPeople; i++) {
			let firstName = faker.name.firstName()
			let lastName = faker.name.lastName()
			let musicGenre = faker.music.genre()
			let hackerPhrase = faker.hacker.phrase()
			let avatar = faker.image.avatar()
			ArrayofPeople.push({firstName, lastName, musicGenre, hackerPhrase, avatar})
		}
		return ArrayofPeople
	}

	

	export let name;
</script>

<main>
	<h1>Hello {name}!</h1>


	<h2>Table of people</h2>

	<div>
		<PeopleTable Gpeople={Gpeople}/>
	</div>

	
	
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

	div {
		display: flex;
		justify-content: center;
	}
	
</style>