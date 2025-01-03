import { fetchCompanies } from '../../services/api'; // Ensure the correct path
jest.mock('../../services/api'); // Ensure the mock matches the import path

test('fetchCompanies: returns data from API', async () => {
  const mockResponse = { data: [{ id: 1, name: "Test Company" }] };
  fetchCompanies.mockResolvedValue(mockResponse);

  const result = await fetchCompanies();
  expect(result).toEqual(mockResponse);
});
