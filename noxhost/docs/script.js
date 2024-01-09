function login() {
    // Pobierz dane z formularza
    const emailInput = document.getElementById('email').value;
    const passwordInput = document.getElementById('password').value;

    // Sprawdź, czy istnieje użytkownik o podanym adresie e-mail
    const user = users.find(u => u.email === emailInput);

    if (user && user.password === passwordInput) {
        // Zalogowano poprawnie

        // Ukryj formularz logowania
        document.getElementById('loginForm').style.display = 'none';

        // Pobierz ścieżkę do pliku HTML użytkownika
        const contentFile = user.contentFile;

        // Wyświetl zawartość związaną z zalogowanym użytkownikiem
        loadUserContent(contentFile);
    } else {
        alert('Incorrect email or password. Please try again.');
    }
}

function loadUserContent(contentFile) {
    // Sprawdź, czy plik HTML istnieje
    fetch(`users/${contentFile}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('User content not found.');
            }
            return response.text();
        })
        .then(html => {
            const contentDiv = document.getElementById('content');
            contentDiv.style.display = 'block';
            contentDiv.innerHTML = html;
        })
        .catch(error => {
            console.error(error);
            alert('Error loading user content.');
        });
}

// Dodaj dane użytkowników
const users = [
    {
        "email": "user1@example.com",
        "password": "password1",
        "contentFile": "user1.html"
    },
    {
        "email": "user2@example.com",
        "password": "password2",
        "contentFile": "user2.html"
    }
    // Możesz dodać więcej użytkowników według tego samego wzoru
];
