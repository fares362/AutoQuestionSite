async function getResponse() {
    const question = document.getElementById('question').value;
    const loading = document.getElementById('loading');
    const responseDiv = document.getElementById('response');

    if (!question) {
        alert("Veuillez poser une question !");
        return;
    }

    loading.style.display = 'block';
    responseDiv.innerHTML = '';

    const apiKey = 'TA_CLE_API_OPENAI';  // Remplace par ta clé API
    const response = await fetch('https://api.openai.com/v1/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: 'text-davinci-003',  // ou un autre modèle GPT-3/4
            prompt: question,
            max_tokens: 100
        })
    });

    const data = await response.json();
    loading.style.display = 'none';
    responseDiv.innerHTML = data.choices[0].text.trim();
}
