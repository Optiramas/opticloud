<script>
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
		"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2265.210944828763!2d5.2728393!3d59.8162208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x463c80d9df0d5573:0x9cac4120e3bb051e!2sAustb%C3%B8vegen%2044%2C%205420%20Rubbestadneset!5e0!3m2!1sen!2sno!4v1735740000000";

</script>




<style>

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

    /* Style for the konsulent image */
    .sveinung-image {
        width: 300px;               /* Ensure the image fills the width of the frame */
        height: 90%;              /* Maintain aspect ratio */
        max-height: 90%;          /* Optional: Set a maximum height */
        object-fit: cover;         /* Ensure the image covers the frame without distortion */
        margin: 0;                 /* Remove any default margin */
        display: block;            /* Ensure the image behaves as a block element */
    }

    /* Style for the konsulent image */
    .stian-image {
        width: 300px;               /* Ensure the image fills the width of the frame */
        height: 90%;              /* Maintain aspect ratio */
        max-height: 90%;          /* Optional: Set a maximum height */
        object-fit: cover;         /* Ensure the image covers the frame without distortion */
        margin: 0;                 /* Remove any default margin */
        display: block;            /* Ensure the image behaves as a block element */
    }

    /* Ensure both sections have the same height and appearance */
    .frame3 {
        background-color: #CAEDFB;    /* Optional: Add a background color */
        border: 0px solid #CAEDFB;    /* Add a border to create a frame effect */
        padding: 0px;                   /* Add padding for better spacing */
        display: flex;                  /* Use flexbox for alignment */
        flex-direction: column;         /* Stack content vertically */
        justify-content: center;        /* Center content vertically */
        align-items: center;            /* Center content horizontally */
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.0); /* Optional: Add a shadow for a frame effect */
        height: auto;                   /* Allow the height to adjust dynamically */
        border-radius: 12px;            /* 👈 avrunda hjørne */
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
                <h3>Om oss</h3>          
                <p>
                    Optiram ble etablert i 2019, og tidlig i 2025 overtok vi selskapet fra de tidligere eierne. 
                    Til sammen har vi nærmere 50 års erfaring innen automasjonsfaget. 
                    Vi har bred erfaring fra industri, marine og offshore, og har arbeidet som montører, serviceteknikere, prosjektledere og produktutviklere. 
                    De siste årene har hovedfokuset vært på produktutvikling, men vi tar gjerne på oss vernesko og er ute på oppdrag når det er behov.</p>
                <p>Vår visjon er å levere smarte, effektive og pålitelige automasjonsløsninger som hjelper bedrifter med å optimalisere sine prosesser og øke produktiviteten.                    
            </div>            
        </div>
    </div>


    



    <div class="container mt-4">
        <div class="row justify-content-center align-items-lef">        
            <div class="col-sm-12 d-flex flex-column justify-content-center align-items-left">            
                <h2>Hvor finner du oss?</h2>
                <p1> 5420 Rubbestadneset </p1>                
                <p1> Austbøvegen 44 </p1>                                                   
                <p1> Norge </p1>   
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
                <h3>Ansatte</h3>
            </div>
        </div>
    </div>


    <div class="container mt-5 d-flex justify-content-center align-items-center width-100 frame3">
        <div class="row">
            <!-- Text Section -->
            <div class="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center text-container">
                <h3>Sveinung Mæland</h3>
                <p>CEO – Daglig leder</p>
                <p>+47 909 46 768</p>
                <p>sm@optiram.no</p>
            </div>

            <!-- Image Section -->
            <div class="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center align-items-md-start">
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
                <p>CTO – Teknisk leder</p>
                <p>+47 905 72 687</p>
                <p>ssa@optiram.no</p>
            </div>

            <!-- Image Section -->
            <div class="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center align-items-md-start">
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
