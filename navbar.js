
function navbar(){
    return (
        `
        <div class="navbar-wrapper">
            <div class="navbar">
                <div class="navbarpad">
                    <div class="navbar-logo-spacing">
                        <button onClick="window.location.href='home.html'" class="navbar-logo">NIR1</button>
                    </div>
                    <div class="navbar-spacing"><a class="homebtn" href="home.html">Home</a></div>

                    <div class="navbar-spacing">
                        <div class="dropdown">
                            <button class="dropbtn">Tutorials &nbsp<i class="arrow-down"></i> </button>
                            <div class="dropdown-content-spacing">
                            
                                <div class="dropdown-content">
                                    <a href="oop.html"> OOP </a>
                                    <a href="arrays.html"> Arrays </a>
                                    <a href="arraylists.html"> Arraylists </a>
                                    <a href="searchingsorting.html"> Searching & Sorting </a>
                                    <a href="recursion.html"> Recursion </a>
                                </div>
                            </div>
                        </div> 
                    </div>

                    <div class="navbar-spacing"><a href="addtionallearning.html">Projects</a></div>
                    <div class="navbar-spacing"><a href="bibliography.html">Bibliography</a></div>
                </div>
            </div>
        </div>
        `
    );
}

function createLink(href){

    const link = document.createElement('link');

    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = href;

    return link;
}
 
document.getElementsByTagName('HEAD')[0].appendChild(createLink("navbar.css"));
document.write(navbar());