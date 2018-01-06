
const searchInput = document.getElementById('search-btn');
searchInput.addEventListener('click', getPosts);

const findPost = document.getElementById('search-input');
findPost.addEventListener('keyup', findMatches);

function getPosts() {
    // fetch('https://mariorodeghiero.herokuapp.com/')
    fetch("./db/posts.json")
        .then((res) => res.json())
        .then((data) => {
            let output = '';
            data.forEach(function (post) {
                output +=
                    `
                    <li class=" animated fadeInLeft"><a href="${post.url}">${post.title}</a></li><hr class="hr-search animated fadeInLeft">
                    `;
            });
            document.getElementById('output').innerHTML = output;
        });
}

function findMatches() {
    var filter = findPost.value.toUpperCase();
    let ul = document.getElementById('output');
    let li = ul.getElementsByTagName('li');
    let hr = document.getElementsByTagName('hr');
    let i;
    let a;
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
            hr[i].style.display = "";
        } else {
            li[i].style.display = "none";
            hr[i].style.display = "none";
        }
    }
}