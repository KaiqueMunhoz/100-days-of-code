//const file = document.querySelector('#myFile').files; //Show all selected files



function handleFileSelect(){
    let file = document.querySelector('#myFile').files[0];
    const textarea = document.querySelector('#fileContent');

    let reader = new FileReader();

    reader.onload = function(){
        let content = reader.result;
        textarea.value = content;
    }

    reader.readAsText(file);
}

function saveFile(){
    let element = document.createElement('a');
    let content = document.querySelector('#fileContent').value;

    element.setAttribute('href', 'data:plain/text; charset-utf-8,' + content);
    element.setAttribute('download', 'myNewFile.txt');
    element.click();
}

// document.querySelector('#myFile').addEventListener('onchange', handleFileSelect);