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

        // Wyświetl zawartość związaną z zalogowanym użytkownikiem
        const contentDiv = document.getElementById('content');
        contentDiv.style.display = 'block';
        contentDiv.innerHTML = user.content;

        // Dodaj obsługę przycisku dla użytkownika user2@example.com
        if (emailInput === 'user2@example.com') {
            document.getElementById('buttonClick').addEventListener('click', buttonClick);
        }
    } else {
        alert('Incorrect email or password. Please try again.');
    }
}

function buttonClick() {
    alert('Button Clicked!');
}

// Pobierz dane użytkowników z pliku JSON
fetch('users.json')
    .then(response => response.json())
    .then(data => {
        // Dodaj dane użytkowników
        const users = data.users;

        // Dostęp do users w tym miejscu, umożliwia sprawdzenie w konsoli
        console.log(users);
    })
    .catch(error => console.error('Error fetching users:', error));
