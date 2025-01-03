import { formatDate, calculateOverdue } from './helpers';

describe('Helper Functions', () => {
  it('formatDate: should correctly format a given date', () => {
    const inputDate = '2025-01-01';
    const expectedOutput = 'Jan 1, 2025';
    expect(formatDate(inputDate)).toBe(expectedOutput);
  });

  it('calculateOverdue: should calculate overdue items correctly', () => {
    const tasks = [
      { dueDate: '2024-12-30', completed: false },
      { dueDate: '2025-01-01', completed: true },
      { dueDate: '2024-12-31', completed: false },
    ];
    const currentDate = '2025-01-01';
    const expectedOutput = 1; // Only one task is overdue
    expect(calculateOverdue(tasks, currentDate)).toBe(expectedOutput);
  });

  it('calculateOverdue: should return 0 for no overdue items', () => {
    const tasks = [
      { dueDate: '2025-01-02', completed: false },
      { dueDate: '2025-01-01', completed: true },
    ];
    const currentDate = '2025-01-01';
    const expectedOutput = 0;
    expect(calculateOverdue(tasks, currentDate)).toBe(expectedOutput);
  });
});
