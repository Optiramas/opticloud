<script>
    import { onMount, onDestroy  } from 'svelte';


    let show = false;

	// @ts-ignore
	function setCookie(name, value, days = 365) {
		const expires = new Date(Date.now() + days * 864e5).toUTCString();
		document.cookie = `${name}=${value}; expires=${expires}; path=/; SameSite=Lax`;
	}

	// @ts-ignore
	function getCookie(name) {
		return document.cookie
			.split('; ')
			.find(row => row.startsWith(name + '='))
			?.split('=')[1];
	}

	function acceptCookies() {
		setCookie('cookie_consent', 'accepted');
		show = false;
	}

	onMount(() => {
		if (!getCookie('cookie_consent')) {
			show = true;
		}
	});




    let topbildes = [              
        /* { id: 1, image: '/topbilde.JPG' }    */
        { id: 1, image: '/topbilde.png' }    
    ];   

    let robots = [              
        { id: 1, image: 'IMG_5991.JPG' }    
    ];    

    let automations = [              
        { id: 1, image: 'automationVer1.jpg' }    
    ];

    let iots = [              
        { id: 1, image: 'OpticloudVer1.png' }    
    ];

    let konsulents = [              
        { id: 1, image: 'konsulentVer1.jpg' }    
    ];




    const items = [
        { text: "OPTIMALISERING", color: "#FFFFFF" }, // blå
        { text: "AUTOMASJON", color: "#FFFFFF" },     // grønn
        { text: "ROBOTIKK", color: "#FFFFFF" }        // oransje
        //{ text: "ROBOTIKK", color: "#FFC000" }        // oransje
    ];

    let index = 0;
    let current = items[index];
    // @ts-ignore
    let timer;

    onMount(() => {
        timer = setInterval(() => {
        index = (index + 1) % items.length;
        current = items[index];
        }, 5000);
    });

    // @ts-ignore
    onDestroy(() => clearInterval(timer));


</script>


<style>
    



    /* Reduser størrelsen på hele seksjonen */
    .container {
        transform: scale(1.0); /* Skaler ned hele containeren til 90% av originalstørrelsen */
        transform-origin: center; /* Sørg for at skaleringen skjer fra midten */        
    }

    /* Style for the text container */
    .text-container {
        padding: 0px 50px;       /* 0px topp/bunn, 50px venstre/høyre */
        background-color: #F2F2F2;
    }

    .text-container2 {
        padding: 0px 50px;       /* 0px topp/bunn, 50px venstre/høyre */
        background-color: #ffffff;
    }

    /* Style for the topbilde image */
    /* Full width section */
    .topbilde-section {
        width: 100vw;
        margin-left: calc(-50vw + 50%);
    }

    /* The always-blurred background layer */
    .image-wrapper {
        position: relative;
        height: 800px;          /* set your height */
        width: 100%;            /* full width */
        display: flex;
        overflow: hidden;
        border-radius: 20px;

        background-image: var(--bg);
        background-size: cover;
        background-repeat: no-repeat;
    }

    /* The always-blurred background layer */
    .image-wrapper::before {
        content: "";
        position: absolute;
        inset: 0;
        background-image: var(--bg);
        background-size: cover;
        background-position: 50% 90%; /* X Y */
        filter: blur(2px) brightness(0.8) saturate(0.8);
        background-color: rgba(255, 255, 255, 0.484);
        background-blend-mode: multiply;
        transform: scale(1.0);
    }


    /* Text on top */
    .image-text {
        position: relative;
        z-index: 1;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: rgb(255, 255, 255);
        text-align: center;
    }

    .image-text2{
        position: absolute;
        top: 80px;
        left: 50px;
        z-index: 2;

        background-color: #DAF2D0;
        padding: 10px;
        border-radius: 6px;

        /* 👇 important */
        max-width: min(800px, 90vw); /* never wider than screen */
        box-sizing: border-box;
        word-wrap: break-word;
    }

    .image-text2 h2{
        margin: 0 0 6px 0;
        font-size: clamp(28px, 3vw, 38px); /* scales down */
        line-height: 1.15;
    }

    .image-text2 p{
        margin: 0;
        font-size: clamp(20px, 1.6vw, 24px); /* scales down */
        line-height: 1.3;
    }

    .image-text3 {
        position: absolute;
        bottom: 40px;      /* distance from bottom */
        right: 40px;       /* distance from right */
        z-index: 2;

        color: rgb(0, 0, 0);
        text-align: left;

        /* Rectangle */
        /*background-color: #CAEDFB;*/
        padding: 0px;
        border-radius: 6px;

        /* 👇 important */
        max-width: min(520px, 90vw); /* never wider than screen */
        box-sizing: border-box;
        word-wrap: break-word;
    }

    /* Label color */
    .image-text3 .label {
        /*font-size: 2.0rem;*/
        font-size: clamp(40px, 3vw, 38px); /* scales down */
        color: #000000;
        font-weight: 400;
    }

    /* Value colors */
    .image-text3 .value {
        /*font-size: 1.6rem;*/
        font-size: clamp(30px, 1.6vw, 40px); /* scales down */
        color: #08bf20;
        font-weight: 600;
    }

    /* Style for the robot image */
    .robot-image {
        width: 100%;               /* Ensure the image fills the width of the frame */
        height: 100%;              /* Maintain aspect ratio */
        max-height: 100%;          /* Optional: Set a maximum height */
        /* object-fit: contain;*/         /* Ensure the image covers the frame without distortion */
        object-fit: cover;         /* Ensure the image covers the frame without distortion */        
        margin: 0;                 /* Remove any default margin */
        display: block;            /* Ensure the image behaves as a block element */
        border-radius: 0px;       /* 👈 rounded corners */
    }

    /* Style for the automation image */
    .automation-image {
        width: 100%;               /* Ensure the image fills the width of the frame */
        height: 100%;              /* Maintain aspect ratio */
        max-height: 100%;          /* Optional: Set a maximum height */
        object-fit: cover;         /* Ensure the image covers the frame without distortion */
        object-position: left center;
        margin: 0;                 /* Remove any default margin */
        display: block;            /* Ensure the image behaves as a block element */
        border-radius: 0px;       /* 👈 rounded corners */
    }

    /* Style for the iot image */
    .iot-image {
        width: 100%;               /* Ensure the image fills the width of the frame */
        height: 100%;              /* Maintain aspect ratio */
        max-height: 100%;          /* Optional: Set a maximum height */
        object-fit: cover;         /* Ensure the image covers the frame without distortion */
        margin: 0;                 /* Remove any default margin */
        display: block;            /* Ensure the image behaves as a block element */
        border-radius: 0px;       /* 👈 rounded corners */
    }

    /* Style for the konsulent image */
    .konsulent-image {
        width: 100%;               /* Ensure the image fills the width of the frame */
        height: 100%;              /* Maintain aspect ratio */
        max-height: 100%;          /* Optional: Set a maximum height */
        object-fit: cover;         /* Ensure the image covers the frame without distortion */
        object-position: left center;
        margin: 0;                 /* Remove any default margin */
        display: block;            /* Ensure the image behaves as a block element */
        border-radius: 0px;       /* 👈 rounded corners */
    }

    .cookie-banner {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        background: #111;
        color: white;
        padding: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 9999;
    }

    .cookie-banner button {
        background: #0d6efd;
        color: white;
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 4px;
        cursor: pointer;
    }


    /*
    iPhone 13 mini har bredde på 375px
    */
    @media (max-width: 375px) 
    {
         #logo-icon {
        max-width: 120px;
        max-height: 40px;        
    }
    }

    /*
    iPhone 14 har bredde på 390px
    */
    @media (max-width: 390px) 
    {
          
    }    
    
    /*
    PCen har minste bredde på 500px
    */
    @media (max-width: 500px) 
    {
        .order-1 {
            order: 1; /* Teksten vises først */
        }
        .order-2 {
            order: 2; /* Bildet vises etter teksten */
        }
        .image-wrapper {            
            height: 400px;          /* set your height */            
        }
    }

    /* Responsive adjustments */
    @media (max-width: 576px) 
    {  
        .image-wrapper {            
            height: 450px;          /* set your height */            
        }    
    }    


    /* Responsive adjustments */
    @media (max-width: 1024px) 
    {
        .image-wrapper {            
            height: 600px;          /* set your height */            
        }        
    }

    /*
    //iPhone 13 mini har bredde på 1080px når den er i landskapsmodus (90 grader)
    */
    @media (max-width: 1080px) 
    {
        
    }


</style>



{#if show}
    <div class="cookie-banner">
        <p>
            Vi bruker informasjonskapsler (cookies) for å forbedre opplevelsen.
        </p>
        <button on:click={acceptCookies}>Godta</button>
    </div>
{/if}


<main>

    
    <div class="topbilde-section">
        {#each topbildes as topbilde (topbilde.id)}
            {#if topbilde.id === 1}
                <div class="image-wrapper" style={`--bg: url('${topbilde.image}');`}>
                    <div class="image-text3">
                        <br>
                            <div class="label">
                                <strong style="color: {current.color}; transition: color 0.5s ease;">
                                    {current.text}
                                </strong>
                            </div>
                        <br>
                    </div>
                </div>
            {/if}
        {/each}
    </div>
    

     
    <div class="container-fluid p-5 text-black text-center">        
            <br>
            <h1><strong>Velkommen til Optiram</strong></h1>
            <p>Din partner for neste generasjons produksjons- og automasjonsløsninger </p>                    
    </div>
    
    <br>

       
    <div class="container mt-5 d-flex justify-content-center align-items-center ">
        <div class="row g-0 align-items-stretch">
            <div class="col-lg-6 d-flex flex-column justify-content-center align-items-center text-container2">
                <h3><strong>Robotikk og automasjon</strong></h3>
                <p>
                    Vår lidenskap er å skape innovative løsninger som øker kvalitet, effektivitet og som gir langsiktig verdiskaping for deg og din virksomhet. 
                    Gjennom tett samarbeid utvikler og leverer vi robot- og automasjonsløsninger som optimaliserer flyt, reduserer kostnader og øker kapasiteten i produksjonen.
                    <br><br>
                    Vi kombinerer teknisk innsikt med praktisk forståelse for produksjonsprosesser, og legger stor vekt på driftssikkerhet, presisjon og repeterbar kvalitet. 
                    Våre løsninger tilpasses dine behov – fra enkle robotceller til komplekse, helautomatiserte produksjonslinjer.
                    <br>
                    Husk at en robot ikke sover, men kan ha klargjort for deg når du kommer på jobb.
                </p>
                <br>
            </div>
            <div class="col-lg-6 order-sm-2 order-1 d-flex flex-column justify-content-center align-items-center">
                {#each robots as robot (robot.id)}
                    {#if (robot.id === 1)}
                        <img src="{robot.image}" class="robot-image">
                    {/if}
                {/each}
            </div>
        </div>
    </div>
    
    <br>
    <br>
    <br>
    <br>


    
     <div class="container mt-5 d-flex justify-content-center align-items-center width-100">
        <div class="row g-0 align-items-stretch">
            <!-- Bildet -->
            <div class="col-lg-6 order-lg-1 order-2 d-flex flex-column justify-content-center align-items-center">
                {#each automations as automation (automation.id)}
                    {#if (automation.id === 1)}
                        <img src="{automation.image}" class="automation-image">
                    {/if}
                {/each}
            </div>
            <!-- Teksten -->
            <div class="col-lg-6 order-lg-2 order-1 d-flex flex-column justify-content-center align-items-center text-container">
                <h3><strong>Automation system</strong></h3>
                <p>
                    Vi har lang erfaring med levering av komplette automasjonssystemer til industrien. 
                    Våre løsninger skreddersys for å møte dine tekniske og operasjonelle krav, med særlig fokus på driftssikkerhet, brukervennlighet og effektivitet.
                    <br>
                    <br>
                    Vi tar ansvar for hele leveransen – fra konsept og prosjektering til programmering, testing og idriftsettelse.
                    Gjennom tett samarbeid med kundene våre sikrer vi at løsningen er tilpasset både dagens behov og fremtidig utvikling.
                    <br>
                    <br>
                    Med solid kompetanse innen PLC-, HMI- og drivesystemer leverer vi stabile og fremtidsrettede løsninger som er enkle å drifte og vedlikeholde.
                </p>
                <br>
            </div>
        </div>
    </div>

    <br>
    <br>
    <br>
    <br>

    
     <div class="container mt-5 d-flex justify-content-center align-items-center width-100">
        <div class="row g-0 align-items-stretch">
            <div class="col-lg-6 d-flex flex-column justify-content-start align-items-center text-container2">
                <h3><strong>Programmering og prosjekteringstjenester</strong></h3>
                <p>
                    Vi tilbyr programmering og prosjekteringstjenester innen industriell automasjon, robotikk og digitale løsninger. 
                    Gjennom tett og profesjonelt samarbeid leverer vi løsninger som er tilpasset dine behov og eksisterende systemer.
                    <br><br>
                    Vi har solid erfaring med prosjektgjennomføring, PLC- og HMI-programmering samt utvikling av webbaserte løsninger.
                    <br>
                    <br>
                    Vår kompetanse omfatter blant annet systemer fra Beckhoff, Siemens, Beijer, Wago, Mitsubishi og Omron, samt plattformer basert på CODESYS.
                </p>
                <br>
            </div>
            <div class="col-lg-6 d-flex flex-column justify-content-center align-items-center">
                {#each konsulents as konsulent (konsulent.id)}
                    {#if (konsulent.id === 1)}
                        <img src="{konsulent.image}" class="konsulent-image">
                    {/if}
                {/each}
            </div>
        </div>
    </div>

    <br>
    <br>
    <br>
    <br>

    
     <div class="container mt-5 d-flex justify-content-center align-items-center width-100">
        <div class="row g-0 align-items-stretch">
            <!-- Bildet -->        
            <div class="col-lg-6 order-lg-1 order-2 d-flex flex-column justify-content-center align-items-center">
                {#each iots as iot (iot.id)}
                    {#if (iot.id === 1)}
                        <img src="{iot.image}" class="iot-image">
                    {/if}
                {/each}
            </div>
            <!-- Teksten -->
            <div class="col-lg-6 order-lg-2 order-1 d-flex flex-column justify-content-center align-items-center text-container">
                <h3><strong>OptiCloud og Opti-IoT</strong></h3>
                <p>
                Med OptiCloud og Opti-IoT samler, analyserer og visualiserer vi data i sanntid.
                Dette gir deg bedre innsikt i drift, ytelse og tilstand – og et solid grunnlag for datadrevne beslutninger.
                <br><br>
                Våre løsninger knytter sammen maskiner, sensorer og systemer på en trygg og skalerbar måte, og gjør det enkelt å overvåke prosesser både lokalt og via skybaserte løsninger. 
                Informasjonen presenteres i oversiktlige dashbord som gir operatører og ledelse rask tilgang til riktig data til riktig tid.
                <br><br>
                Avanserte algoritmer identifiserer avvik, optimaliseringspotensial og foreslår målrettede tiltak.
                Resultatet er bedre ressursutnyttelse, høyere kvalitet og mer stabil drift.
                </p> 
                <br>
            </div>
        </div>
    </div>



    <br>
    <br>
    <br>
    <br>

</main>
