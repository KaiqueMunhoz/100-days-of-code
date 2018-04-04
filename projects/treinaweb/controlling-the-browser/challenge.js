//Create an input and a button. When the was clicked, the URL inserted in the input will be open in a new window. If a new URL were inserted, the same window is going to reload the new site.

const input = document.querySelector('input');
const button = document.querySelector('button');

function goToUrl() {
    
    let urlInput = input.value;
    url = "http://" + urlInput;
    
    window.open(url, "IDontKnow",
    "width=420,height=230,resizable,scrollbars=yes" );
}

button.addEventListener('click', goToUrl);