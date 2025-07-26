<script lang="ts">
	export let on_close_page: () => void;
	export let on_minimize_page: () => void = () => {};
	export let on_maximize_page: () => void = () => {};
</script>

<div class="traffic-lights">
	<button class="close-light" on:click={on_close_page}></button>
	<button class="minimize-light" on:click={on_minimize_page}></button>
	<button class="maximize-light" on:click={on_maximize_page}></button>
</div>

<style>
.traffic-lights {
	display: flex;
	gap: 0.4rem;
	align-items: center;
}
.traffic-lights button {
	width: 12px;
	height: 12px;
	border-radius: 50%;
	border: none;
	cursor: pointer;
}
.close-light { background-color: #ff5f56; }
.minimize-light { background-color: #ffbd2e; }
.maximize-light { background-color: #27c93f; }
</style>
