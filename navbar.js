
function navbar(){
    return (
        `
        <div class="navbar-wrapper">
        <div class="navbar">
            <div class="navbarpad">
                <button onClick="window.location.href='home.html'" class="navbar-logo">NIR1</button>
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

const head = document.getElementsByTagName('HEAD')[0];
const link = document.createElement('link');
 
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'navbar.css';
 
head.appendChild(link);
document.write(navbar());