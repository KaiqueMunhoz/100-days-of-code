//Received the date with the format day/month/year and returned the date with the format year/month/day;

function formatDate(date) {

    let myRegex = /(\d{2})\/(\d{2})\/(\d{4})/;
    return date.replace(myRegex, '$3/$2/$1');
}