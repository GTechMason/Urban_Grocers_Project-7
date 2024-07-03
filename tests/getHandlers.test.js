// eslint-disable-next-line no-undef
const config = require('../config');

test('warehouse status should be 200', async () => {
  let actualStatus;
  try {
    const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
    actualStatus = response.status;
  } catch (error) {
    console.error(error);
  }
  expect(actualStatus).toBe(200);
});

test('warehouse count should be greater than 0', async () => {
  let response;
  try {
    response = await fetch(`${config.API_URL}/api/v1/warehouses`);
    const data = await response.json();
    const countStores = data.length;
    expect(countStores).toBeGreaterThan(0);
  } catch (error) {
    console.error(error);
    throw error;
  }
});

test('warehouse should have name and workingHours', async () => {
  let response;
  try {
    response = await fetch(`${config.API_URL}/api/v1/warehouses`);
    const data = await response.json();
    data.forEach(warehouse => {
      expect(warehouse).toHaveProperty('name');
      expect(warehouse).toHaveProperty('workingHours');
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
});

test('courier status should be 200', async () => {
  let actualStatus;
  try {
    const response = await fetch(`${config.API_URL}/api/v1/couriers`);
    actualStatus = response.status;
  } catch (error) {
    console.error(error);
  }
  expect(actualStatus).toBe(200);
});

test('courier count should be greater than 0', async () => {
  let response;
  try {
    response = await fetch(`${config.API_URL}/api/v1/couriers`);
    const data = await response.json();
    const countStores = data.length;
    expect(countStores).toBeGreaterThan(0);
  } catch (error) {
    console.error(error);
    throw error;
  }
});

test('courier should have name and workingHours', async () => {
  let response;
  try {
    response = await fetch(`${config.API_URL}/api/v1/couriers`);
    const data = await response.json();
    data.forEach(courier => {
      expect(courier).toHaveProperty('name');
      expect(courier).toHaveProperty('workingHours');
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
});
