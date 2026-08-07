<script>

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
        padding: 0px 50px;       /* 0px topp/bunn, 50px venstre/høyre */
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
        /*background-color: #caedfb39;
        background-color: #EBEBEB;
        border-radius: 12px;
        padding: 20px;             /* inside spacing */
        height: 100%;              /* equal height if you use h-100 on column */
        width: 100%;
    }

    /* Ensure both sections have the same height and appearance */
    .frame5 {
        background-color: #F2F2F2;    /* Optional: Add a background color */        
        border-left: 10px solid #ffffff;
        border-right: 10px solid #ffffff;
        padding: 0px;                   /* Add padding for better spacing */
        display: flex;                  /* Use flexbox for alignment */
        flex-direction: column;         /* Stack content vertically */
        justify-content: center;        /* Center content vertically */
        align-items: center;            /* Center content horizontally */
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.0); /* Optional: Add a shadow for a frame effect */
        height: auto;                   /* Allow the height to adjust dynamically */
    }

    /* Image inside the card */
    .nyhetbilde-image{
        width: 100%;             /* never exceed card width */        
        height: auto;         /* keep aspect ratio */
        object-fit: cover;       /* crop instead of stretch */
        display: block;
        border-radius: 16px 16px 0 0; /* top-rounded only */
    }


    /* Desktop */
    @media (max-width: 992px) {
        .nyhetbilde-image {
            width: 80%;             
            max-height: 220px;
        }
    }

    /* Tablet */
    @media (max-width: 576px) {
        .nyhetbilde-image {
            width: 60%;             
            max-height: 100px;
            
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
                <h3>Alle nyheter</h3>
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
                    <p>
                        Desember 2025 blei Optiram <strong>system integrator</strong> for Kameleon Robotics.
                        Kameleon Robotics er distributør av Universal Robots i Norge.
                        <br>
                        <a href="https://www.kameleonrobotics.no/" target="_blank" rel="noopener noreferrer">
                            www.kameleonrobotics.no
                        </a>
                    </p>            
               </div>
            </div>
            

            <!-- Text Section 2 -->
            <div class="col-12 col-md-6 col-xl-3 p-3 d-flex flex-column justify-content-start align-items-center text-container frame5">
                <div class="frame4-card h-100 d-flex flex-column justify-content-start align-items-center">
                    <!-- Image -->
                    <img src={optirambildes.find(i => i.id === 1)?.image}
                         class="nyhetbilde-image">                    
                    <p>
                        Optiram har <strong>ansatt Stian</strong> som ny teknisk leder.
                        Han tiltrer stillingen i Oktober 2025 og har lang og solid erfaring innen automasjon.
                    </p> 
                </div>
            </div>
            
            <!-- Text Section 3 -->
            <div class="col-12 col-md-6 col-xl-3 p-3 d-flex flex-column justify-content-start align-items-center text-container frame5">
                <div class="frame4-card h-100 d-flex flex-column justify-content-start align-items-center">
                    <!-- Image -->
                    <img src={optirambildes.find(i => i.id === 1)?.image}
                         class="nyhetbilde-image">                     
                    <p>
                        Optriam flytter inn i <strong>nye lokaler</strong> i Rubbestadneset Oktober 2025.
                        Dette gir oss bedre fasiliteter for å betjene våre kunder og utvikle våre løsninger.
                    </p>
                </div>
            </div>


             <!-- Text Section 4 -->
            <div class="col-12 col-md-6 col-xl-3 p-3 d-flex flex-column justify-content-start align-items-center text-container frame5">
               <div class="frame4-card h-100 d-flex flex-column justify-content-start align-items-center">
                    <!-- Image -->
                    <img src={i4factorys.find(i => i.id === 1)?.image}
                         class="nyhetbilde-image">                    
                    <p>
                        Optiram & i4Factory har inngått ein <strong>sammarbeidsavtale</strong>.
                        i4Factory utvikler og leverer autonome maskineringsfabrikker.            
                        Me gleder oss til videre sammerarbeid!
                        <br>    
                    <a href="https://www.i4factory.no/nb/" target="_blank" rel="noopener noreferrer">
                        www.i4factory.no
                    </a>
                    </p> 
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
                    <p>
                        Optiram har <strong>ansatt Sveinung</strong> som ny daglig leder.
                        Han tiltrer stillingen i Juni 2025 og har lang og solid erfaring innen automasjon.                        
                    </p> 
               </div>
            </div>

            <!-- Text Section 2 -->
            <div class="col-12 col-md-6 col-xl-3 p-3 d-flex flex-column justify-content-start align-items-center text-container frame5">
               <div class="frame4-card h-100 d-flex flex-column justify-content-start align-items-center">
                    <!-- Image -->
                    <img src={optirambildes.find(i => i.id === 1)?.image}
                         class="nyhetbilde-image">                    
                    <p>
                        Optiram har fått <strong>nye eigere</strong> Januar 2025.
                        Dei nye eigarane har lang erfaring innan automasjon.                        
                    </p> 
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
