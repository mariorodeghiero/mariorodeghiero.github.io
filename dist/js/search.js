var openSearch = document.getElementById('search-btn');
openSearch.addEventListener('click', openNav);

var closeSearch = document.getElementById('close-btn');
closeSearch.addEventListener('click', closeNav);

function openNav() {
    document.getElementById("container-search").style.display = "block";
    document.getElementById("search-btn").style.display = "none";
}

function closeNav() {
    document.getElementById("container-search").style.display = "none";
    document.getElementById("search-btn").style.display = "block";
}