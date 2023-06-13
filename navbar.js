
// creating the nav bar
function navbar(){
    return (
        `
        <div class="navbar-wrapper">
            <div class="navbar">
                <div class="navbarpad">
                    <div class="navbar-logo-spacing">
                        <button onClick="window.location.href='index.html'" class="navbar-logo">NIR1</button>
                    </div>
                    <div class="navbar-spacing"><a class="homebtn" href="index.html"><i class="fa fa-home"></i> Home</a></div>

                    <div class="navbar-spacing">
                        <div class="dropdown">
                            <button class="dropbtn">Tutorials &nbsp<i class="arrow-down"></i> </button>
                            <div class="dropdown-content-spacing">
                                <div class="dropdown-content">
                                    <a href="oop.html">OOP </a>
                                    <a href="arrays.html"> Arrays </a>
                                    <a href="arraylists.html"> Arraylists </a>
                                    <a href="searchingsorting.html"> Searching & Sorting </a>
                                    <a href="recursion.html"> Recursion </a>
                                </div>
                            </div>
                        </div> 
                    </div>

                    <div class="navbar-spacing"><a href="addtionallearning.html"><i class="fa fa-code"></i> Projects</a></div>
                    <div class="navbar-spacing"><a href="isp.html"><i class="fa fa-file-code-o"></i> ISP</a></div>
                    <div class="navbar-spacing"><a href="bibliography.html"><i class="fa fa-file-text-o"></i> Bibliography</a></div>
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
document.getElementsByTagName('HEAD')[0].appendChild(createLink("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"));
document.write(navbar());
