import { mockCompanies, mockCommunicationMethods } from './mockData';

describe('Mock Data Integrity', () => {
  it('mockCompanies: should contain valid mock companies', () => {
    expect(Array.isArray(mockCompanies)).toBe(true);
    expect(mockCompanies).toHaveLength(3); // Adjust based on actual data
    mockCompanies.forEach(company => {
      expect(company).toHaveProperty('id');
      expect(company).toHaveProperty('name');
      expect(typeof company.id).toBe('string');
      expect(typeof company.name).toBe('string');
    });
  });

  it('mockCommunicationMethods: should contain valid communication methods', () => {
    expect(Array.isArray(mockCommunicationMethods)).toBe(true);
    mockCommunicationMethods.forEach(method => {
      expect(method).toHaveProperty('id');
      expect(method).toHaveProperty('type');
      expect(typeof method.id).toBe('string');
      expect(typeof method.type).toBe('string');
    });
  });

  it('mockCompanies: should have unique IDs', () => {
    const ids = mockCompanies.map(company => company.id);
    const uniqueIds = new Set(ids);
    expect(ids.length).toBe(uniqueIds.size);
  });
});
