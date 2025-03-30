<script>
    import { onMount } from 'svelte';


    let topvidoes = [              
        { id: 1, image: 'Video2.mp4' }
    ];

    let robots = [              
        
    ];

    let automations = [              
        
    ];

    let iots = [              
        { id: 1, image: 'Opti_iot1.jpeg' }    
    ];

    onMount(() => {
        const videoPlayer = document.getElementById('video-player');

        // Når videoen er ferdig, legg til en pause før den starter på nytt
        // @ts-ignore
        videoPlayer.addEventListener('ended', () => {
            setTimeout(() => {
                // @ts-ignore
                videoPlayer.play(); // Start videoen på nytt etter 10 sekunder
            }, 10000);              // 10 sekunder pause
        });
    });

</script>


<style>
.container1 {
    display: flex;                  /* Bruker flexbox for posisjonering */            
    justify-content: center;        /* Plasserer elementer til center */
    align-items: center;            /* Plasserer elementer til center */                
    width: 100%;                    /* Containeren tar opp hele bredden */
}

.video-image {
    width: 100%;                    /* Sett width til 100% av skjerm størrelse */
    height: 600px;                  /* sett høyde på image */
}

.iot-image {
    width: 100%;                    /* Sett width til 100% av skjerm størrelse */
    height: 400px;                  /* sett høyde på image */
}

.video-video {
    width: 100%;                    /* Videoen tar opp hele bredden av containeren */
    height: auto;                   /* Høyden justeres automatisk for å opprettholde proporsjonene */
    max-height: 600px;              /* Valgfritt: Sett en maksimal høyde for videoen */
    object-fit: cover;              /* Sørger for at videoen fyller containeren uten å forvrenge */
    border-radius: 10px;            /* Valgfritt: Legg til avrundede hjørner */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Valgfritt: Legg til en skygge */
}

</style>


<main>
    <br>
    <br>
    <br>

    <container class="container1"> 	        
        {#each topvidoes as video (video.id)}
            {#if (video.id === 1)}
                <video id="video-player" class="video-video" autoplay muted>
                    <source src="{video.image}" type="video/mp4">
                    Din nettleser støtter ikke video.
                </video>
            {/if}        
        {/each}
    </container>


    <div class="container-fluid p-5 text-black text-center">        
            <h1>Optimalisering</h1>
            <p>Velkommen til Optiram – Din partnar for neste generasjons produksjons- og automasjonsløysingar </p>                    
    </div>
        

    <div class="container mt-5">
        <div class="row">
            <div class="col-sm-4">
                <h3>Robotikk og automasjon</h3>
                <p>Vår lidenskap er å drive innovasjon, auke kvaliteten og skape varige verdiar for deg og di verksemd. Samarbeid med oss i dag – så sikrar me at framtidas produksjon er både bærekraftig og lønnsam!</p>            
                <br>
            </div>        
            <div class="col-sm-4">
                <h3>Opti IoT</h3>        
                <p>Fangar opp og analyserer data i sanntid for å ta systemet ditt til neste nivå. Algoritmar identifiserer mulige forbetringar og foreslår presise tiltak. Slik hjelper me deg å optimalisere ressursbruken, auke kvaliteten og skape varige resultat. Ta kontakt i dag, og la Opti IoT føre verksemda di inn i ei ny tid for dataorientert innovasjon!</p>            
                {#each iots as iot (iot.id)}
                    {#if (iot.id === 1)}
                        <img src="{iot.image}" class="iot-image">
                    {/if}        
                {/each}
                <br>
            </div>
            <div class="col-sm-4">
                <h3>Konsulent</h3>
                <p>Me tilbyd konsulent tjenester. Me er dedikerte til eit profesjonelt og tett samarbeid som sikrar løysingar tilpassa nettopp dine</p>            
                <br>
            </div>
        </div>
    </div>



</main>
