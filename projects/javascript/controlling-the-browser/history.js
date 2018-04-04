// history.back() //Get Back to the previous page
// history.forward() //Formard to the next page
// history.go(1) //Equal the method 'forward'
// history.go(-1) //Equal the method 'back'
// history.length //Numbers of pages in the history

function getValues() {
    const a = document.querySelector('#a').checked;
    const b = document.querySelector('#b').checked;
    const c = document.querySelector('#c').checked;
    return {a,b,c};
}

function setState() {
    let values = getValues();
    history.pushState({values}, 'checkboxes')
}

window.onpopstate = function() {
    var values = history.state.values;

    document.querySelector('#a').checked = values.a;
    document.querySelector('#b').checked = values.b;
    document.querySelector('#c').checked = values.c;
}