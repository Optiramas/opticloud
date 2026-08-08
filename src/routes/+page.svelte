<script>
    import { onMount, onDestroy  } from 'svelte';
    import { t } from '$lib/i18n';


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




    let index = 0;
    // @ts-ignore
    let timer;

    $: heroWords = $t.home.heroWords;
    $: current = heroWords[index % heroWords.length];

    onMount(() => {
        timer = setInterval(() => {
            index = (index + 1) % heroWords.length;
        }, 5000);
    });

    // Fade sections in as they scroll into view (progressive enhancement)
    onMount(() => {
        if (!('IntersectionObserver' in window)) return;
        const targets = document.querySelectorAll('main .container, main .container-fluid');
        const io = new IntersectionObserver((entries) => {
            for (const entry of entries) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal-visible');
                    io.unobserve(entry.target);
                }
            }
        }, { threshold: 0.12 });
        targets.forEach((el) => {
            el.classList.add('reveal');
            io.observe(el);
        });
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
        height: 100vh;          /* full-screen cinematic hero */
        min-height: 560px;
        width: 100%;            /* full width */
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        overflow: hidden;
        border-radius: 0;

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

    /* Cinematic dark gradient for text contrast */
    .image-wrapper::after {
        content: "";
        position: absolute;
        inset: 0;
        z-index: 1;
        background: linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.20) 45%, rgba(0,0,0,0.60) 100%);
    }

    .hero-content {
        position: relative;
        z-index: 2;
        max-width: 900px;
        margin: 0 auto;
        padding: 0 1.5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #fff;
    }

    .hero-eyebrow {
        margin: 0 0 1rem 0;
        font-size: clamp(0.75rem, 1.4vw, 1rem);
        letter-spacing: 0.42em;
        text-transform: uppercase;
        font-weight: 600;
        opacity: 0.85;
    }

    .hero-title {
        margin: 0;
        font-size: clamp(3rem, 9vw, 7rem);
        font-weight: 800;
        line-height: 1.02;
        letter-spacing: -0.02em;
        text-shadow: 0 2px 30px rgba(0, 0, 0, 0.35);
    }

    .hero-title strong {
        font-weight: 800;
    }

    .hero-subtitle {
        margin: 1.5rem 0 0 0;
        max-width: 640px;
        font-size: clamp(1.05rem, 2vw, 1.4rem);
        font-weight: 400;
        line-height: 1.5;
        opacity: 0.92;
        text-shadow: 0 1px 12px rgba(0, 0, 0, 0.3);
    }

    .hero-actions {
        margin-top: 2.5rem;
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
        justify-content: center;
    }

    .btn-pill {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-width: 200px;
        padding: 0.9rem 2rem;
        border-radius: 999px;
        font-size: 0.82rem;
        font-weight: 600;
        letter-spacing: 0.14em;
        text-transform: uppercase;
        text-decoration: none;
        cursor: pointer;
        -webkit-backdrop-filter: blur(6px);
        backdrop-filter: blur(6px);
        transition: transform 0.2s ease, background 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;
    }

    .btn-pill-primary {
        background: rgba(255, 255, 255, 0.92);
        color: #111;
    }

    .btn-pill-primary:hover {
        background: #fff;
        color: #111;
        transform: translateY(-2px);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
    }

    .btn-pill-secondary {
        background: rgba(30, 30, 30, 0.45);
        color: #fff;
        border: 1px solid rgba(255, 255, 255, 0.4);
    }

    .btn-pill-secondary:hover {
        background: rgba(30, 30, 30, 0.75);
        color: #fff;
        transform: translateY(-2px);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
    }

    .hero-scroll {
        margin-top: 3rem;
        width: 26px;
        height: 42px;
        border: 2px solid rgba(255, 255, 255, 0.6);
        border-radius: 999px;
        display: flex;
        justify-content: center;
        padding-top: 8px;
    }

    .hero-scroll-dot {
        width: 4px;
        height: 8px;
        border-radius: 999px;
        background: rgba(255, 255, 255, 0.9);
        animation: hero-scroll-anim 1.6s ease-in-out infinite;
    }

    @keyframes hero-scroll-anim {
        0% { transform: translateY(0); opacity: 1; }
        100% { transform: translateY(14px); opacity: 0; }
    }

    /* Scroll reveal (added at runtime) */
    :global(.reveal) {
        opacity: 0;
        transform: translateY(28px);
        transition: opacity 0.7s ease, transform 0.7s ease;
        will-change: opacity, transform;
    }

    :global(.reveal-visible) {
        opacity: 1;
        transform: none;
    }

    @media (prefers-reduced-motion: reduce) {
        :global(.reveal) {
            opacity: 1;
            transform: none;
            transition: none;
        }
        .hero-scroll-dot {
            animation: none;
        }
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
            {$t.home.cookie}
        </p>
        <button on:click={acceptCookies}>{$t.home.accept}</button>
    </div>
{/if}


<main>

    
    <div class="topbilde-section">
        {#each topbildes as topbilde (topbilde.id)}
            {#if topbilde.id === 1}
                <div class="image-wrapper" style={`--bg: url('${topbilde.image}');`}>
                    <div class="hero-content">
                        <p class="hero-eyebrow">OPTIRAM</p>
                        <h1 class="hero-title">
                            <strong style="color: #FFFFFF; transition: color 0.5s ease;">{current}</strong>
                        </h1>
                        <p class="hero-subtitle">
                            {$t.home.heroSubtitle}
                        </p>
                        <div class="hero-actions">
                            <a href="#losninger" class="btn-pill btn-pill-primary">{$t.home.solutions}</a>
                            <a href="/about" class="btn-pill btn-pill-secondary">{$t.home.aboutBtn}</a>
                        </div>
                        <div class="hero-scroll" aria-hidden="true">
                            <span class="hero-scroll-dot"></span>
                        </div>
                    </div>
                </div>
            {/if}
        {/each}
    </div>
    

     
    <div class="container-fluid p-5 text-black text-center">        
            <br>
            <h1><strong>{$t.home.welcomeTitle}</strong></h1>
            <p>{$t.home.welcomeSubtitle}</p>                    
    </div>
    
    <br>

       
    <div id="losninger" class="container mt-5 d-flex justify-content-center align-items-center ">
        <div class="row g-0 align-items-stretch">
            <div class="col-lg-6 d-flex flex-column justify-content-center align-items-center text-container2">
                <h3><strong>{$t.home.robotikk.title}</strong></h3>
                <p>{@html $t.home.robotikk.body}</p>
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
                <h3><strong>{$t.home.automation.title}</strong></h3>
                <p>{@html $t.home.automation.body}</p>
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
                <h3><strong>{$t.home.programmering.title}</strong></h3>
                <p>{@html $t.home.programmering.body}</p>
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
                <h3><strong>{$t.home.opticloud.title}</strong></h3>
                <p>{@html $t.home.opticloud.body}</p> 
                <br>
            </div>
        </div>
    </div>



    <br>
    <br>
    <br>
    <br>

</main>
