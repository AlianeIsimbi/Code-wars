function validateHello(greetings) {
  res = /hello|ciao|salut|hallo|hola|ahoj|czesc/i.test(greetings)//regex here/.test(greetings) 
  return res
}