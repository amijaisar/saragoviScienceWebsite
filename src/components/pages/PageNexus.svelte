<script lang="ts">
    import { pageViews } from '🍎/configs/page-views';
    export let page;
  
    const Component = pageViews[page.type];
    console.log("✅ PageNexus: page.type:", page.type);
	console.log("✅ PageNexus: component found:", Component);
  </script>
  
  {#if Component}
    <Component {...page} />
  {:else}
    <p style="color:red">⚠ Unknown page type: {page.type}</p>
  {/if}
  