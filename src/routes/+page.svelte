<script>
    import { onMount } from 'svelte';


    let topvidoes = [              
        { id: 1, image: 'Video2.mp4' }
    ];

    let robots = [              
        { id: 1, image: 'Opti_iot1.jpeg' }    
    ];    

    let iots = [              
        { id: 1, image: 'Opti_iot1.jpeg' }    
    ];

    let konsulents = [              
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

    .container-background {
        background-color: #f0f0f0; /* Sett ønsket bakgrunnsfarge */
        padding: 20px;            /* Valgfritt: Legg til litt padding */
        border-radius: 10px;      /* Valgfritt: Legg til avrundede hjørner */
    }

    .video-image {
        width: 100%;                    /* Sett width til 100% av skjerm størrelse */
        height: 600px;                  /* sett høyde på image */
    }

    .video-video {
        width: 100%;                    /* Videoen tar opp hele bredden av containeren */
        height: auto;                   /* Høyden justeres automatisk for å opprettholde proporsjonene */
        max-height: 600px;              /* Valgfritt: Sett en maksimal høyde for videoen */
        object-fit: cover;              /* Sørger for at videoen fyller containeren uten å forvrenge */
        border-radius: 10px;            /* Valgfritt: Legg til avrundede hjørner */
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Valgfritt: Legg til en skygge */
    }

    .robot-image {
        width: 100%;                    /* Sett width til 100% av skjerm størrelse */
        height: auto;                   /* Juster høyden automatisk for å opprettholde proporsjonene */
        max-width: 600px;               /* Valgfritt: Sett en maksimal bredde for bildet */
        max-height: 400px;              /* Valgfritt: Sett en maksimal høyde for bildet */
        min-width: 200px;               /* Sett en minimum bredde for bildet */        
        object-fit: contain;            /* Sørger for at bildet skaleres uten å bli forvrengt */
        margin: 0 auto;                 /* Sentrer bildet horisontalt */
        display: block;                 /* Sørger for at margin fungerer */
    }

    .iot-image {
        width: 100%;                    /* Sett width til 100% av skjerm størrelse */
        height: auto;                   /* Juster høyden automatisk for å opprettholde proporsjonene */
        max-width: 600px;               /* Valgfritt: Sett en maksimal bredde for bildet */
        max-height: 400px;              /* Valgfritt: Sett en maksimal høyde for bildet */
        min-width: 200px;               /* Sett en minimum bredde for bildet */        
        object-fit: contain;            /* Sørger for at bildet skaleres uten å bli forvrengt */
        margin: 0 auto;                 /* Sentrer bildet horisontalt */
        display: block;                 /* Sørger for at margin fungerer */
    }

    .konsulent-image {
        width: 100%;                    /* Sett width til 100% av skjerm størrelse */
        height: auto;                   /* Juster høyden automatisk for å opprettholde proporsjonene */
        max-width: 600px;               /* Valgfritt: Sett en maksimal bredde for bildet */
        max-height: 400px;              /* Valgfritt: Sett en maksimal høyde for bildet */
        min-width: 200px;               /* Sett en minimum bredde for bildet */        
        object-fit: contain;            /* Sørger for at bildet skaleres uten å bli forvrengt */
        margin: 0 auto;                 /* Sentrer bildet horisontalt */
        display: block;                 /* Sørger for at margin fungerer */
    }



    /*
    //iPhone 13 mini har bredde på 375px
    */
    @media (max-width: 375px) 
    {
    }

    /*
    //iPhone 14 har bredde på 390px
    */
    @media (max-width: 390px) 
    {
    }    
    
    /* Responsive adjustments */
    @media (max-width: 768px) 
    {
        .order-1 {
        order: 1; /* Teksten vises først */
        }
        .order-2 {
            order: 2; /* Bildet vises etter teksten */
        }
    }

    /* Responsive adjustments */
    @media (max-width: 576px) 
    {  
        
    }

    /* Responsive adjustments */
    @media (min-width: 1024px) 
    {
    }

    /*
    //iPhone 13 mini har bredde på 1080px når den er i landskapsmodus (90 grader)
    */
    @media (max-width: 1080px) 
    {
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
        

    <div class="container mt-5 d-flex justify-content-center align-items-center width-100"> 
        <div class="row">
            <div class="col-sm-5">
                <h3>Robotikk og automasjon</h3>
                <p>Vår lidenskap er å drive innovasjon, auke kvaliteten og skape varige verdiar for deg og di verksemd. Samarbeid med oss i dag – så sikrar me at framtidas produksjon er både bærekraftig og lønnsam!</p>            
                <br>
            </div>        
            <div class="col-sm-5">                                
                {#each robots as robot (robot.id)}
                    {#if (robot.id === 1)}
                        <img src="{robot.image}" class="robot-image">
                    {/if}        
                {/each}
                <br>
            </div>           
        </div>
    </div>


    <div class="container mt-5 d-flex justify-content-center align-items-center width-100">
        <div class="row">
            <!-- Bildet -->
            <div class="col-sm-5 order-sm-1 order-2">
                {#each iots as iot (iot.id)}
                    {#if (iot.id === 1)}
                        <img src="{iot.image}" class="iot-image">
                    {/if}
                {/each}
            </div>
            <!-- Teksten -->
            <div class="col-sm-5 order-sm-2 order-1">
                <h3>Opti IoT</h3>
                <p>Fangar opp og analyserer data i sanntid for å ta systemet ditt til neste nivå. Algoritmar identifiserer mulige forbetringar og foreslår presise tiltak. Slik hjelper me deg å optimalisere ressursbruken, auke kvaliteten og skape varige resultat. Ta kontakt i dag, og la Opti IoT føre verksemda di inn i ei ny tid for dataorientert innovasjon!</p>
                <br>
            </div>
        </div>
    </div>


    <div class="container mt-5 d-flex justify-content-center align-items-center width-100">
        <div class="row">            
            <div class="col-sm-5">
                <h3>Konsulent</h3>
                <p>Me tilbyd konsulent tjenester. Me er dedikerte til eit profesjonelt og tett samarbeid som sikrar løysingar tilpassa nettopp dine</p>            
                <br>
            </div>            
            <div class="col-sm-5">
                {#each konsulents as konsulent (konsulent.id)}
                    {#if (konsulent.id === 1)}
                        <img src="{konsulent.image}" class="konsulent-image">
                    {/if}        
                {/each}
            </div>
        </div>
    </div>

    <br>

</main>
