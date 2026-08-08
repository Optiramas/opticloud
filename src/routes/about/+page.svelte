<script>
    import { t } from '$lib/i18n';

    let locations = [              
        { id: 1, image: 'Kai.JPG' }    
    ];

    let sveinungs = [              
        { id: 1, image: 'Sveinung_ver1.png' }    
    ];

    let stians = [              
        { id: 1, image: 'Stian_ver1.png' }    
    ];

    // Coordinates for Austbøvegen 44, Rubbestadneset
	const mapEmbedUrl =
		"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2265.210944828763!2d5.2728393!3d59.8162208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x463c80d9df0d5573:0x9cac4120e3bb051e!2sAustb%C3%B8vegen%2044%2C%205420%20Rubbestadneset!5e1!3m2!1sen!2sno!4v1735740000000";

</script>




<style>

    .contact-line {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        margin: 0.3rem 0;
        color: inherit;
        text-decoration: none;
        transition: color 0.2s ease;
    }

    .contact-line:hover {
        color: var(--accent);
    }

    .contact-icon {
        flex-shrink: 0;
        opacity: 0.75;
    }

    /* Style for the robot image */
    .location-image {
        width: 100%;               /* Ensure the image fills the width of the frame */
        height: 100%;              /* Maintain aspect ratio */
        max-height: 100%;          /* Optional: Set a maximum height */        
        object-fit: cover;         /* Ensure the image covers the frame without distortion */
        margin: 0;                 /* Remove any default margin */
        display: block;            /* Ensure the image behaves as a block element */
        opacity: 0.9;              /* 0.0 = usynlig, 1.0 = original */
    }

    /* Employee portrait – constrained and centered */
    .sveinung-image,
    .stian-image {
        width: 100%;
        max-width: 230px;
        height: auto;
        object-fit: cover;
        border-radius: 16px;
        box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12);
        margin: 0 auto;
        display: block;
    }

    /* Employee split-panel card */
    .frame3 {
        background-color: #ffffff;
        border: 1px solid rgba(0, 0, 0, 0.06);
        padding: 0;
        display: block;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.07);
        height: auto;
        border-radius: 22px;
        overflow: hidden;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .frame3:hover {
        transform: translateY(-6px);
        box-shadow: 0 22px 46px rgba(0, 0, 0, 0.13);
    }

    .frame3 .row {
        width: 100%;
        margin: 0;
        --bs-gutter-x: 0;
        align-items: stretch;
    }

    .frame3 .photo-col {
        padding: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    /* Text side */
    .frame3 .text-container {
        align-items: flex-start !important;
        justify-content: center;
        text-align: left;
        padding: 2.75rem 2.5rem;
    }

    .frame3 .text-container h3 {
        font-size: clamp(1.55rem, 2.4vw, 2rem);
        font-weight: 800;
        letter-spacing: -0.02em;
        margin: 0 0 0.4rem 0;
    }

    .frame3 .role {
        display: inline-block;
        color: var(--accent);
        font-size: 0.78rem;
        font-weight: 700;
        letter-spacing: 0.14em;
        text-transform: uppercase;
        margin: 0 0 1.4rem 0;
        padding-bottom: 1.1rem;
        border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    }

    /* Contact pills */
    .frame3 .contact-line {
        background: #f4f7fb;
        color: #1a1a1a;
        padding: 0.55rem 1rem;
        border-radius: 999px;
        font-size: 0.95rem;
        margin: 0.35rem 0;
        transition: background 0.2s ease, color 0.2s ease, transform 0.2s ease;
    }

    .frame3 .contact-line:hover {
        background: var(--accent);
        color: #ffffff;
        transform: translateX(3px);
    }

    .frame3 .contact-line:hover .contact-icon {
        opacity: 1;
    }

    @media (max-width: 767px) {
        .sveinung-image,
        .stian-image {
            max-width: 200px;
        }

        .frame3 .text-container {
            padding: 2rem 1.75rem;
            align-items: center !important;
            text-align: center;
        }

        .frame3 .role {
            align-self: center;
        }
    }

    .map-wrapper {
		display: flex;
		justify-content: center;
	}

    .map-container {
		position: relative;
		width: 100%;     
        max-width: 1330px;        
		padding-bottom: 56.25%; /* 16:9 ratio */
		height: 0;        
		margin: 0rem 0;
		border-radius: 12px;
		overflow: hidden;
	}

	.map-container iframe {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border: 0;
	}

</style>


<main>
    <br>
    <br>
    <br>

    <div class="container mt-5">
        <div class="row justify-content-center align-items-center">        
            <div class="col-sm-12 d-flex flex-column justify-content-center align-items-center">      
                <h3>{$t.about.title}</h3>          
                <p>{$t.about.intro1}</p>
                <p>{$t.about.intro2}</p>                    
            </div>            
        </div>
    </div>


    



    <div class="container mt-4">
        <div class="row justify-content-center align-items-lef">        
            <div class="col-sm-12 d-flex flex-column justify-content-center align-items-left">            
                <h2>{$t.about.whereTitle}</h2>
                <p1> 5420 Rubbestadneset </p1>                
                <p1> Austbøvegen 44 </p1>                                                   
                <p1> {$t.about.country} </p1>   
                <br>                             
            </div>            
        </div>
    </div>
   

    <div class="container mt-5">
        <div class="map-wrapper">
            <div class="map-container">
                <iframe
                    src={mapEmbedUrl}
                    loading="lazy"
                    allowfullscreen
                ></iframe>
            </div>
        </div>
    </div>

    <br>
    <br>
    

    <div class="container mt-4">
        <div class="row justify-content-center align-items-lef">
            <div class="col-sm-12 d-flex flex-column justify-content-center align-items-left">
                <h3>{$t.about.employees}</h3>
            </div>
        </div>
    </div>


    <div class="container mt-5 d-flex justify-content-center align-items-center width-100 frame3">
        <div class="row">
            <!-- Text Section -->
            <div class="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center text-container">
                <h3>Sveinung Mæland</h3>
                <p class="role">{$t.about.ceoRole}</p>
                <a class="contact-line" href="tel:+4790946768">
                    <svg class="contact-icon" role="img" aria-label={$t.footer.phone} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    +47 909 46 768
                </a>
                <a class="contact-line" href="mailto:sm@optiram.no">
                    <svg class="contact-icon" role="img" aria-label={$t.footer.email} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>
                    sm@optiram.no
                </a>
            </div>

            <!-- Image Section -->
            <div class="col-12 col-md-6 photo-col d-flex flex-column justify-content-center align-items-center align-items-md-start">
                {#each sveinungs as sveinung (sveinung.id)}
                    {#if sveinung.id === 1}
                        <img src="{sveinung.image}" class="sveinung-image">
                    {/if}
                {/each}
            </div>
        </div>
    </div>

    <div class="container mt-5 d-flex justify-content-center align-items-center width-100 frame3">
        <div class="row">
            <!-- Text Section -->
            <div class="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center text-container">
                <h3>Stian S. Alvsvåg</h3>
                <p class="role">{$t.about.ctoRole}</p>
                <a class="contact-line" href="tel:+4790572687">
                    <svg class="contact-icon" role="img" aria-label={$t.footer.phone} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    +47 905 72 687
                </a>
                <a class="contact-line" href="mailto:ssa@optiram.no">
                    <svg class="contact-icon" role="img" aria-label={$t.footer.email} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>
                    ssa@optiram.no
                </a>
            </div>

            <!-- Image Section -->
            <div class="col-12 col-md-6 photo-col d-flex flex-column justify-content-center align-items-center align-items-md-start">
                {#each stians as stian (stian.id)}
                    {#if stian.id === 1}
                        <img src="{stian.image}" class="stian-image">
                    {/if}
                {/each}
            </div>
        </div>
    </div>

    <br>
    <br>
    <br>
    <br>

</main>
