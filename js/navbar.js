function navbar() {
  return `<div class="logo">
        <a href="../html/homepage.html"><img src="https://storage.googleapis.com/lumen5-site-images/L5-logo/L5-logo-header.png" /></a>
    </div>
    <ul class="nav-links" id="menu">
        <li id="dropdown" style="margin-top: 43px !important;" ><a href="#">Create
        <i class="material-icons align-center">expand_more</i>
        <div class="drop-down-menu" id="sub-menu">
            <ul>
                <li><a href="#">Photo Video Maker</a></li>
                <li><a href="#">Facebook Video Maker</a></li>
                <li><a href="#">Youtube Intro Maker</a></li>
                <li><a href="#">Instagram Video Maker</a></li>
                <li><a href="#">Instagram Story Maker</a></li>
                <li><a href="#">Promo Video Maker</a></li>
                <li><a href="#">Video Ad Maker</a></li>
                <li><a href="#">Marketing Video Maker</a></li>
                <li><a href="#">Linkdin Video Maker</a></li>
                <li><a href="#">Business Video Maker</a></li>
                <li><a href="#">Ecommerce Video Maker</a></li>
                <li><a href="#">Explainer video Maker</a></li>
                <li><a href="#">Slideshow video Maker</a></li>
                <li><a href="#">Education video Maker</a></li>
                <li><a href="#">Infography Video maker</a></li>
                <li><a href="#">Video Editor</a></li>
                <li><a href="#">Voice Over</a></li>
            
            </ul>
        
        
        </div>
        </a>
        </li>

        <li><a href="../html/pricing.html">Pricing</a></li>
        <li><a href="../html/index.html">Enterprise</a></li>
        <li><a href="../html/casestudies.html">Case studies</a></li>
        <li id="dropdown" style="margin-top: 43px !important;"><a href="#">Learn
        <i class="material-icons align-center">expand_more</i>
        <div class="drop-down-menu" id="sub-menu">
            <ul>
                <li><a href="#">Photo Video Maker</a></li>
                <li><a href="#">Facebook Video Maker</a></li>
               </ul>
        
        </div>
        </a>
        </li>
        <li><button type="button" class="btn btn-outline-primary " style="border-radius: 16px" id="btn1" >Login</button></li>
        <li><a href="../html/signup.html"><button type="button" class="btn btn-primary" style="border-radius: 16px; margin-bottom:40px;" id="btn2">Sign up</button></a></li>
    </ul>
    <span id ="spanclick">&#9776</span>`;
}

export default navbar;
