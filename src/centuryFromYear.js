// Funkce, která podle roku zjistí jeho století
function centuryFromYear(year) {
    var century = Math.floor(year / 100);
    if (year % 100 == 0) {
        return century;
    } else {
        return century + 1;
    }
}

exports.centuryFromYear = centuryFromYear;
