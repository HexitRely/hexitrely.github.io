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

// Dodaj dane użytkowników
const users = [
    {
        "email": "user1@example.com",
        "password": "password1",
        "content": "<h3>Welcome User 1!</h3><p>This is your personalized content.</p>"
    },
    {
        "email": "user2@example.com",
        "password": "password2",
        "content": "<h3>Welcome User 2!</h3><p>This is your personalized content.</p><button id='buttonClick'>Click me</button>"
    }
    // Możesz dodać więcej użytkowników według tego samego wzoru
];
