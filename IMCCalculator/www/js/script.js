function calculateIMC() {
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);
    
    var imc = weight / (height * height);
    var result = '';

    if (imc < 18.5) {
        result = 'Insuffisance pondérale (maigreur)';
    } else if (imc >= 18.5 && imc < 25) {
        result = 'Corpulence normale';
    } else if (imc >= 25 && imc < 30) {
        result = 'Surpoids';
    } else if (imc >= 30 && imc < 35) {
        result = 'Obésité modérée';
    } else if (imc >= 35 && imc < 40) {
        result = 'Obésité sévère';
    } else {
        result = 'Obésité morbide ou massive';
    }

    document.getElementById('result').innerText = 'Votre IMC est de ' + imc.toFixed(2) + '. ' + result;
}
