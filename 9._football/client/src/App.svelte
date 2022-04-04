<script>
	import {onMount} from "svelte"
	

	let players = "";

	onMount(async () => {
		const response = await fetch("/api/players");
		const { data:playersArray } = await response.json(); // the value of data is the array. pulling the key value pair out. find the key name and get the value.
		players = playersArray;
	});
</script>

<main>
	 <h1>{JSON.stringify(players)}</h1> <!--Frontend communicating with the backend -->
	
</main>

<footer>
	{new Date().getFullYear()}
	Contact
	About
</footer>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
		min-height: calc(100vh - 60px); /* Mangler noget her */
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
</style>