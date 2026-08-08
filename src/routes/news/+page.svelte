<script>
    import { t } from '$lib/i18n';

    let optirambildes = [                      
        { id: 1, image: '/Black logo.png' }    
    ];   

    let kameleonrobotics = [                      
        { id: 1, image: '/kameleonrobots.svg' }    
    ]; 

    let i4factorys = [                      
        { id: 1, image: '/i4FACTORY.png' }    
    ]; 

</script>


<style>

    /* Style for the text container */
    .text-container {        
        padding: 0;
    }

    /* Ensure both sections have the same height and appearance */
    .frame4 {
        background-color: #daebf239;    /* Optional: Add a background color */        
        padding: 0px;          /* space INSIDE the frame */
        margin: 0px;          /* 👈 space AROUND the frame */
        display: flex;                  /* Use flexbox for alignment */
        flex-direction: column;         /* Stack content vertically */
        justify-content: center;        /* Center content vertically */
        align-items: center;            /* Center content horizontally */
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.0); /* Optional: Add a shadow for a frame effect */
        height: auto;                   /* Allow the height to adjust dynamically */
        border-radius: 12px;            /* 👈 avrunda hjørne */
    }

    .frame4-card {
        background-color: #ffffff;
        border: 1px solid rgba(0, 0, 0, 0.05);
        border-radius: 16px;
        overflow: hidden;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.06);
        transition: transform 0.25s ease, box-shadow 0.25s ease;
    }

    .frame4-card:hover {
        transform: translateY(-6px);
        box-shadow: 0 14px 32px rgba(0, 0, 0, 0.12);
    }

    /* Text area grows so every card matches height */
    .frame4-card p {
        margin: 0;
        padding: 20px 22px 24px;
        width: 100%;
        flex: 1 1 auto;
        text-align: left;
        font-size: 0.98rem;
        line-height: 1.55;
    }

    .frame4-card a {
        word-break: break-word;
    }

    /* Ensure both sections have the same height and appearance */
    .frame5 {
        background-color: transparent;
        border: none;
        padding: 0;
        display: flex;
        flex-direction: column;
        height: auto;
    }

    /* Logo area inside the card – fixed height so all cards align */
    .nyhetbilde-image{
        width: 100%;
        height: 170px;
        object-fit: contain;
        padding: 26px;
        background-color: #f7f9fb;
        display: block;
        box-sizing: border-box;
        border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    }


    @media (max-width: 992px) {
        .nyhetbilde-image {
            height: 160px;
        }
    }

    @media (max-width: 576px) {
        .nyhetbilde-image {
            height: 150px;
        }
    }

    



</style>


<main>
    <br>
    <br>
    <br>
    <div class="container mt-4">
        <div class="row justify-content-center align-items-lef">
            <div class="col-sm-12 d-flex flex-column justify-content-center align-items-left">
                <h3>{$t.news.title}</h3>
            </div>
        </div>
    </div>


    <div class="container mt-5 d-flex justify-content-center align-items-center width-100">
        <div class="row g-4">
            <!-- Text Section 1 --> 
            <div class="col-12 col-md-6 col-xl-3 p-3 d-flex flex-column justify-content-start align-items-center text-container frame5">
                <div class="frame4-card h-100 d-flex flex-column justify-content-start align-items-center">
                    <!-- Image -->
                    <img src={kameleonrobotics.find(i => i.id === 1)?.image}
                         class="nyhetbilde-image">                    
                    <p>{@html $t.news.kameleon}</p>            
               </div>
            </div>
            

            <!-- Text Section 2 -->
            <div class="col-12 col-md-6 col-xl-3 p-3 d-flex flex-column justify-content-start align-items-center text-container frame5">
                <div class="frame4-card h-100 d-flex flex-column justify-content-start align-items-center">
                    <!-- Image -->
                    <img src={optirambildes.find(i => i.id === 1)?.image}
                         class="nyhetbilde-image">                    
                    <p>{@html $t.news.stian}</p> 
                </div>
            </div>
            
            <!-- Text Section 3 -->
            <div class="col-12 col-md-6 col-xl-3 p-3 d-flex flex-column justify-content-start align-items-center text-container frame5">
                <div class="frame4-card h-100 d-flex flex-column justify-content-start align-items-center">
                    <!-- Image -->
                    <img src={optirambildes.find(i => i.id === 1)?.image}
                         class="nyhetbilde-image">                     
                    <p>{@html $t.news.lokaler}</p>
                </div>
            </div>


             <!-- Text Section 4 -->
            <div class="col-12 col-md-6 col-xl-3 p-3 d-flex flex-column justify-content-start align-items-center text-container frame5">
               <div class="frame4-card h-100 d-flex flex-column justify-content-start align-items-center">
                    <!-- Image -->
                    <img src={i4factorys.find(i => i.id === 1)?.image}
                         class="nyhetbilde-image">                    
                    <p>{@html $t.news.i4factory}</p> 
               </div>
            </div>

        </div>
    </div>


    

    <div class="container mt-5 d-flex justify-content-center align-items-center width-100">
        <div class="row g-4">
           
            <!-- Text Section 1 -->
            <div class="col-12 col-md-6 col-xl-3 p-3 d-flex flex-column justify-content-start align-items-center text-container frame5">
               <div class="frame4-card h-100 d-flex flex-column justify-content-start align-items-center">
                    <!-- Image -->
                    <img src={optirambildes.find(i => i.id === 1)?.image}
                        class="nyhetbilde-image">                    
                    <p>{@html $t.news.sveinung}</p> 
               </div>
            </div>

            <!-- Text Section 2 -->
            <div class="col-12 col-md-6 col-xl-3 p-3 d-flex flex-column justify-content-start align-items-center text-container frame5">
               <div class="frame4-card h-100 d-flex flex-column justify-content-start align-items-center">
                    <!-- Image -->
                    <img src={optirambildes.find(i => i.id === 1)?.image}
                         class="nyhetbilde-image">                    
                    <p>{@html $t.news.eiere}</p> 
               </div>
            </div>
            
            

        </div>
    </div>








    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>

</main>
