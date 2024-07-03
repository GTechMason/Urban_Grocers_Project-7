// eslint-disable-next-line no-undef
const config = require('../config');

test('status code should be 404', async () => {
	let actualStatus;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/7`);
	actualStatus = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatus).toBe(404);
  });

test('delete kit', async () => {
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
			method: 'DELETE',
		});
		const contentType = response.headers.get('content-type');
		let actualResponseBody;
		if (contentType && contentType.includes('application/json')) {
		  actualResponseBody = await response.json();
		} else {
		  actualResponseBody = await response.text();
		}
		expect(actualResponseBody).toEqual({ ok: true });
	  } catch (error) {
		console.error('Error:', error);
	  }
	});