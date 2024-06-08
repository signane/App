document.getElementById('ageForm').addEventListener('submit', function(event) {
    event.preventDefault();
    calculateAge();
});

function calculateAge() {
    const birthdate = document.getElementById('birthdate').value;
    if (birthdate) {
        const today = new Date();
        const birthDate = new Date(birthdate);
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDifference = today.getMonth() - birthDate.getMonth();
        const dayDifference = today.getDate() - birthDate.getDate();

        if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
            age--;
        }

        document.getElementById('result').textContent = `Vous avez ${age} ans.`;
    } else {
        document.getElementById('result').textContent = 'Veuillez entrer une date de naissance valide.';
    }
}
