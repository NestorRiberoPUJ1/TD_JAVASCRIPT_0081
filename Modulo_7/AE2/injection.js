
usuario = "admin"
password = "1234"
query = `SELECT * FROM users WHERE username = '${usuario}' AND password = '${password}';`
console.log(query)

userInjection = "admin OR ( 1=1 "
password = "1234 )"    
query = `SELECT * FROM users WHERE username = '${userInjection}' AND password = '${password}';`
console.log(query)
