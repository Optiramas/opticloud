<script>
let prizes = [              
    { id: 1, image: 'test1.webp' },
    { id: 2, image: 'test2.webp' }
];

</script>


<style>
.container1 {
    display: flex;                  /* Bruker flexbox for posisjonering */            
    justify-content: center;        /* Plasserer elementer til center */
    align-items: center;            /* Plasserer elementer til center */                
}

.prize-image {
    width: 100%;                    /* Sett width til 100% av skjerm størrelse */
    height: 400px;                  /* sett høyde på image */
}


</style>


<main>
    <container class="container1"> 	        
        {#each prizes as prize (prize.id)}
            {#if (prize.id === 1)}
                <img src="{prize.image}" class="prize-image">
            {/if}        
        {/each}
    </container>


    <div class="container-fluid p-5 text-black text-center">
        <h1>My First Bootstrap5 Page</h1>
        <p>Resize this responsive page to see the effect!</p> 
    </div>
        

    <div class="container mt-5">
        <div class="row">
        <div class="col-sm-4">
            <h3>Column 1</h3>
            <p>Resize this responsive page to see the effect!</p>
            <p>Resize this responsive page to see the effect!..........</p>
            <br>
        </div>
        <div class="col-sm-4">
            <h3>Column 2</h3>
            <p>Resize this responsive page to see the effect!</p>
            <p>Resize this responsive page to see the effect!..........</p>
            <br>
        </div>
        <div class="col-sm-4">
            <h3>Column 3</h3>        
            <p>Resize this responsive page to see the effect!</p>
            <p>Resize this responsive page to see the effect!..........</p>
            <br>
        </div>
        </div>
    </div>



</main>
