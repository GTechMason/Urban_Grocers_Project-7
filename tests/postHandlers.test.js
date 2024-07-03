// eslint-disable-next-line no-undef
const config = require('../config');

test('checking courier delivery', async () => {
    const requestBody = {
        "products": [
            {
                "id": 5,
                "quantity": 1
            },
            {
                "id": 4,
                "quantity": 5
            }
        ],
"deliveryTime": 7
    };

    let actualStatus;
    try {
        const response = await fetch(`${config.API_URL}/api/v1/couriers/check`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer jknnFApafP4awfAIFfafam2fma',
            },
            body: JSON.stringify(requestBody)
        });

        actualStatus = response.status; 

        if (response.status !== 200) {
            const errorText = await response.text();
            console.error('Response Error:', errorText);
        }
    } catch (error) {
        console.error('Error making request:', error);
    }

    expect(actualStatus).toBe(200);
});

test('adding items to cart', async () => {
    const requestBody = {
            "productsList": [
{
"id": 1,
"quantity": 2
},
{
"id": 6,
"quantity": 2
}
]
    };

    let actualStatus;
    try {
        const response = await fetch(`${config.API_URL}/api/v1/kits/2/products`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer jknnFApafP4awfAIFfafam2fma',
            },
            body: JSON.stringify(requestBody)
        });

        actualStatus = response.status; 

        if (response.status !== 200) {
            const errorText = await response.text();
            console.error('Response Error:', errorText);
        }
    } catch (error) {
        console.error('Error making request:', error);
    }

    expect(actualStatus).toBe(200);
});