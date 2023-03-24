const fetch = require('node-fetch');

module.exports = async (req, res) => {
  const prompt = req.query.prompt; // get the prompt from the query string
  const engine = 'davinci'; // set the OpenAI engine
  const apiKey = process.env.OPENAI_API_KEY; // get the API key from environment variables

  // make a POST request to the OpenAI API endpoint
  const response = await fetch('https://api.openai.com/v1/engines/' + engine + '/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + apiKey
    },
    body: JSON.stringify({
      prompt: prompt,
      max_tokens: 150,
      n: 1,
      stop: '\n'
    })
  });

  // parse the response from the API and send it back to the client
  const data = await response.json();
  res.json(data.choices[0].text);
};