// JSON.stringify:  json to string
// JSON.parse:      string to json

var objectLiteral = {
    firstName : 'Mary',
    isAProgramer : true
};

console.log(objectLiteral);
console.log(JSON.stringify(objectLiteral));

var jsonValue = JSON.parse('{"firstName":"Mary","isAProgramer":true}');
console.log(jsonValue);