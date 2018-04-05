const buttonSave = document.querySelector('#buttonSave');
const buttonLoad = document.querySelector('#buttonLoad');
let inputText = document.querySelector('#inputText');
let select = document.querySelector('#select');
let inputCheckbox = document.querySelector('#inputCheckbox');


function handleSave() {
    const content = `${inputText.value};${select.value};${inputCheckbox.checked}`;//Concatenated the strings with ; between them

    let element = document.createElement('a');
    element.setAttribute('href', 'data:plain/text; charset=utf8,' + content);
    element.setAttribute('download', 'myNewFile.txt');
    element.click();
}
function handleLoad() {
    let file = buttonLoad.files[0];
    let reader = new FileReader();
    reader.readAsText(file);

    reader.onload = function(){
        let content = reader.result;
        let filesLoaded = content.split(';');

        inputText.value = filesLoaded[0];
        select.value = filesLoaded[1];
        inputCheckbox.checked = filesLoaded[2];
    }
}

buttonSave.addEventListener('click', handleSave);
buttonLoad.addEventListener('change', handleLoad);

// To improve this code, we can also save the content in an object;