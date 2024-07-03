# Sprint 7 project

    1. Description:
This is a series of tests for the Urban Grocers API. Tests implemented are getHandlers.test.js, postHandlers.test.js, putHandlers.test.js, and deleteHandlers.test.js. All tests were created in VS Studio Code connected to the repository HM07-QA-US on GitHub.

    2. The documentation source used:
`${config.API_URL}/docs/

    3. Description of the technologies and techniques used:


            3.A Methods:

3.A.1 - GET - requests data from a server

3.A.2 - POST - submits data to be processed by a server

3.A.3 - PUT - requests that a resource be updated on the server

3.A.4 - DELETE - requests that a resource be removed from the server

             3.B Matchers:

3.B.1 - toBe - checks for strict equality between the actual and expected value.

3.B.2 - toBeGreaterThan - checks that a value is greater than the expected value.

3.B.3 - toHaveProperty - checks if an object has a specific property or a nested property path. 
 
            3.C Test Descriptions:

3.C.1 - getHandlers.test.js - is requesting data on warehouses and couriers, checking if there are more than zero (0) listed and that they have a 'name' and 'workingHours'. This test uses toBe, toBeGreaterThan, and toHaveProperty matchers. The expected status is 200.

3.C.2 - postHandlers.test.js - is submitting data to be processed; a courier delivery and adding items to the cart. An authorization token is needed for these to run succesfully. The id of the kit in the product_model table is passed in the URL. The Request Body contains productList of the kit, an array containing the items', IDs and their quantities. The expected status is 200.

3.C.3 - putHandlers.test.js - is requesting a change to a kit and a change in the price of a grocery item. The id of the kit in the product_model table is passed in the URL and the price of the grocery item is passed in the request body. The expected status is 200.

3.C.4 - deleteHandlers.test.js - is requesting that a kit be deleted. The kit requested is passed in the URL (/api/v1/kits/:id).

    4. How to run the tests:
To run all tests, use the "npx jest" command in Terminal. To run the individual tests, use the command "npx jest test/(input desired test name here).test.js" in Terminal. As mentioned above, the tests were created in 

Version: 1.90.2
Commit: 5437499feb04f7a586f677b155b039bc2b3669eb
Date: 2024-06-18T22:54:35.075Z
Electron: 29.4.0
ElectronBuildId: 9728852
Chromium: 122.0.6261.156
Node.js: 20.9.0
V8: 12.2.281.27-electron.0
OS: Darwin arm64 23.5.0

and connected to the repository HM07-QA-US_v2.1.0 on GitHub.

    Graham Mason 
    QA Engineer
    gTechMason@gmail.com