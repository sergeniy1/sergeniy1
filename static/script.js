function calculate() {
    const expression = document.getElementById('expression').value;

    fetch('/calculate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ expression }),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Ошибка: ' + response.status);
        }
        return response.json();
    })
    .then(data => {
        if (data.result !== undefined) {
            document.getElementById('result').innerText = 'Результат: ' + data.result;
        } else {
            document.getElementById('result').innerText = 'Ошибка: ' + data.error;
        }
    })
    .catch(error => {
        document.getElementById('result').innerText = 'Ошибка: ' + error.message;
    });
}
