// eslint-disable-next-line no-undef
const config = require('../config');

test('status code should be 200', async () => {
let actualStatus;
try {
const response = await fetch(`${config.API_URL}/api/v1/products/7`);
 actualStatus = response.status;
} catch (error) {
console.error(error);
}
	expect(actualStatus).toBe(200);
});

test('changing kit', async () => {
let requestBody = {
"name": "My modified kit",
"productsList": [
{
"id": 9,
"quantity": 5
},
{
"id": 8,
"quantity": 4
},
{
"id": 7,
"quantity": 3
},
{
"id": 6,
"quantity": 2
}]
}
try {
await fetch(`${config.API_URL}/api/v1/products/7`, {
method: 'PUT',
headers: {
'Content-Type': 'application/json'
},
body: JSON.stringify(requestBody)
});
} catch (error) {
console.error(error);
throw error;
}
});

test('should change price of item', async () => {
let requestBody = {
"price": 175
}
try {
await fetch(`${config.API_URL}//api/v1/products/5`, {
method: 'PUT',
headers: {
'Content-Type': 'application/json',
'Authorization': 'Bearer jknnFApafP4awfAIFfafam2fma',
},
body: JSON.stringify(requestBody)
});
} catch (error) {
console.error(error);
throw error;
}
});