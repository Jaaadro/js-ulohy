// Uprav funkci, aby dokázala sečíst správně číslo typu string a číslu typi int (number)

function sum(a, b) {
    //#region Prostor pro tvůj kód
    // Tady musis vypocitat soucet promenne a b. Pak tahle funkce vrati vysledek. Pokud to spocita spravne, testy projdou.
    // Aktuálně vidíš, že všechny testy hlásí chybu, protože očekávaj třeba výsledek 22, ale funkce jim vráci 0. Tvím úkolem je z téhle nuly udělat právě tenhle součet.
    // Pokud chceš otestovat tvůj program, tak ulož tenhle soubor a klikni vlevo na "test"

    // Tohleto je proměnná. Do ní můžeš dát ledacos. Třeba čísla.
    // Toto je proměnná result, které dáváme hodnotu 0.
    let result = parseInt(a) + b;

    // Zde tuto proměnnou vracíme z funkce. Když nějakej program zavolá tuto funkci,
    // tak se mu vrátí hodnota proměnné result.
    // Já tuto funkci volám v testech abych ověřil, zda tvá funkce správně počítá.
    return result;

    //#endregion Prostor pro tvůj kód
}

// Takhle voláme naší funkci sum a její výsledek uložíme do proměnné x.
// Podle zadání by tato funkce měla správně vrátit v tuto chvíli 3,
// protože jí zadáváme čísla 1 a 2, které chceme sečíst.
// V tento moment nám ale funkce vrátí 0, jak jsem psal nahoře.
// Co proto potřebuješ udělat je nějak změnit kód ve funkci sum, aby nevracela
// 0, ale součet a b. 
let x = sum(1,2);

exports.sum = sum;
