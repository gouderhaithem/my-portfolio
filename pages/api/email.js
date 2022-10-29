const apiKey = process.env.apiKey;
export default function handler(req, res) {
  let name = req.body.name;
  let email = req.body.email;
  let message = req.body.message;
  let text = `my name is: ${name} and my email is: ${email} and this is my message: ${message}`;
  let url = `https://api.callmebot.com/whatsapp.php?phone=+213776935088&text=${text}&apikey=${apiKey}`;
  fetch(url)
    .then((response) => res.json({ message: response }))
    .catch((err) => res.json({ message: err }));
}