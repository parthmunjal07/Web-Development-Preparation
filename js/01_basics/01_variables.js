const accountId = 144553
let accountEmail = "abc@xyz.com"
var accountPassword = "12345"
accountCity = "Faridabad" // do not use
let accountState

// accountId = 2 not allowed, const can't be changed
accountEmail = "pm@pm.com"
accountPassword = "112233"
accountCity = "Noida"
/*
Prefer not to use var because of issue in block scope or functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
