import { factorial } from "../utils/factorial";

// Тест проверяет, что факториал числа 5 вычисляется правильно
test('calculates factorial of 5', () => {
  // Ожидаемый результат: факториал 5 равен 120
  expect(factorial(5)).toBe(120);
});