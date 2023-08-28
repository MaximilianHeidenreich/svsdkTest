<script lang="ts">
  import { Deta  } from "deta";
  import { onMount } from "svelte";
  import type { PageData } from "./$types";


  export let data: PageData;
</script>


<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>


<br><br>

Item: {JSON.stringify(data.item)}
