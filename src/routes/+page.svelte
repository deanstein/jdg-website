<script>
	import { JDGContentBoxFloating, JDGContentContainer, JDGGridLayout, JDGImageTile } from 'jdg-ui-svelte';
</script>

<JDGContentContainer>
	<JDGContentBoxFloating>
        <div class="intro-content-1">
            Hi! 👋 I'm Josh.
        </div>
        <div class="intro-content-2">
            I'm a 3D creator and developer
        </div>
        <div class="intro-content-1">
             with experience in:
        </div>
        <JDGGridLayout >
            <JDGImageTile label={"ARCHITECTURE"}/>
            <JDGImageTile label={"PRODUCTS"}/>
            <JDGImageTile label={"SOFTWARE"}/>
        </JDGGridLayout>    
    </JDGContentBoxFloating>
</JDGContentContainer>

<style>
    .intro-content-1 {
        display: flex;
        justify-content: center;
        font-size: 1.5rem;
    }
    .intro-content-2 {
        display: flex;
        justify-content: center;
        font-size: 2rem;
    }
</style>