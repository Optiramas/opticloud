<script>
    import { onMount } from 'svelte';


    let topvidoes = [              
        { id: 1, image: 'Video2.mp4' }
    ];

    let robots = [              
        { id: 1, image: 'Robot1.jpeg' }    
    ];    

    let iots = [              
        { id: 1, image: 'OptiCloud1.jpeg' }    
    ];

    let konsulents = [              
        { id: 1, image: 'Konsulent1.jpeg' }    
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


    /* Reduser størrelsen på hele seksjonen */
    .container {
        transform: scale(1.0); /* Skaler ned hele containeren til 90% av originalstørrelsen */
        transform-origin: center; /* Sørg for at skaleringen skjer fra midten */
    }

    /* Ensure both sections have the same height and appearance */
    .frame {
        background-color: #efeeee;    /* Optional: Add a background color */
        border: 0px solid #e6a5a5;    /* Add a border to create a frame effect */
        padding: 0px;                   /* Add padding for better spacing */
        display: flex;                  /* Use flexbox for alignment */
        flex-direction: column;         /* Stack content vertically */
        justify-content: center;        /* Center content vertically */
        align-items: center;            /* Center content horizontally */
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.0); /* Optional: Add a shadow for a frame effect */
        height: auto;                   /* Allow the height to adjust dynamically */
    }
    
    /* Style for the text container */
    .text-container {        
        padding: 0px 50px;       /* 0px topp/bunn, 50px venstre/høyre */
    }

    /* Style for the robot image */
    .robot-image {
        width: 100%;               /* Ensure the image fills the width of the frame */
        height: 100%;              /* Maintain aspect ratio */
        max-height: 100%;          /* Optional: Set a maximum height */
        object-fit: cover;         /* Ensure the image covers the frame without distortion */
        margin: 0;                 /* Remove any default margin */
        display: block;            /* Ensure the image behaves as a block element */
    }

    .iot-image {
        width: 100%;               /* Ensure the image fills the width of the frame */
        height: 100%;              /* Maintain aspect ratio */
        max-height: 100%;          /* Optional: Set a maximum height */
        object-fit: cover;         /* Ensure the image covers the frame without distortion */
        margin: 0;                 /* Remove any default margin */
        display: block;            /* Ensure the image behaves as a block element */
    }

    .konsulent-image {
        width: 100%;               /* Ensure the image fills the width of the frame */
        height: 100%;              /* Maintain aspect ratio */
        max-height: 100%;          /* Optional: Set a maximum height */
        object-fit: cover;         /* Ensure the image covers the frame without distortion */
        margin: 0;                 /* Remove any default margin */
        display: block;            /* Ensure the image behaves as a block element */
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
            <!-- Text Section -->
            <div class="col-sm-6 d-flex flex-column justify-content-center align-items-center text-container frame">
                <h3>Robotikk og automasjon</h3>
                <p>Vår lidenskap er å drive innovasjon, øke kvalitet og skaper varige verdier for deg og din virksomhet. Samarbeid med oss i dag – så hjelper vi deg å sikre at framtidas produksjon er både bærekraftig og lønnsom. 
                    Ved bruk av vår kompetanse innenfor automasjon, system, integrasjon og i tett samarbeid med deg, utvikler og leverer vi løsninger for å optimalisere flyt i kundens produksjon. 
                    Dette gir deg gode verktøy for en mere kostnads effektive produksjon, som kan leverer større volum, blir enklere å omstille og som kan skalerer opp og ned. 
                    Husk at en robot ikke sover, men kan ha klargjort for deg til du kommer på jobb.
                    </p>
                
            </div>
            <!-- Image Section 
            <div class="col-sm-6 order-sm-2 order-1 d-flex flex-column justify-content-center align-items-center text-container frame">
            -->
            <div class="col-sm-6 order-sm-2 order-1 d-flex flex-column justify-content-center align-items-center frame">
                {#each robots as robot (robot.id)}
                    {#if (robot.id === 1)}
                        <img src="{robot.image}" class="robot-image">
                    {/if}
                {/each}
                
            </div>
        </div>
    </div>

    

    <div class="container mt-5 d-flex justify-content-center align-items-center width-100">
        <div class="row">
            <!-- Bildet -->        
            <div class="col-sm-6 order-sm-1 order-2 d-flex flex-column justify-content-center align-items-center frame">
                {#each iots as iot (iot.id)}
                    {#if (iot.id === 1)}
                        <img src="{iot.image}" class="iot-image">
                    {/if}
                {/each}
            </div>
            <!-- Teksten -->
            <div class="col-sm-6 order-sm-2 order-1 d-flex flex-column justify-content-center align-items-center text-container frame">
                <h3>OptiCloud og OptiIoT</h3>
                <p>Fangar opp og analyserer data i sanntid for å ta systemet ditt til neste nivå. Algoritmar identifiserer mulige forbetringar og foreslår presise tiltak. Slik hjelper me deg å optimalisere ressursbruken, auke kvaliteten og skape varige resultat. Ta kontakt i dag, og la Opti IoT føre verksemda di inn i ei ny tid for dataorientert innovasjon!</p>
                <br>
            </div>
        </div>
    </div>


    <div class="container mt-5 d-flex justify-content-center align-items-center width-100">
        <div class="row">            
            <div class="col-sm-6 d-flex flex-column justify-content-center align-items-center text-container frame">
                <h3>Konsulent og programmerings tjenester</h3>
                <p>Vi tilbyr konsulent og programmeringstjenester, er dedikerte til et profesjonelt og tett samarbeid som sikrer løsninger tilpasset nettopp dine behov. 
                    Hva kan vi?
                    Vi kjører prosjekt, programmerer pls, hmi, microkontrollere, robot og kan lager web løsninger. Vi snakker flytende en del varianter av c, programmerer html. Noen kjente er Mitsubishi, Siemens, Omron, Wago, Beckhoff samt alle de som kjører på Codesys. På HMI siden, alt fra Beijer, Exor, Deif, Omron, Siemens med flere. Har og erfaring med utvikling av robot løsninger ved bruk av UR, ABB, TM. 
                    </p>            
                <br>
            </div>            
            <div class="col-sm-6 d-flex flex-column justify-content-center align-items-center frame">
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
