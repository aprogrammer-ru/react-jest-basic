import { toUpperCaseFields } from "../utils/userMapper";

// Тест проверяет, что поля объекта пользователя преобразуются в верхний регистр
test('converts fields to uppercase', () => {
  // Исходный объект пользователя
  const user = {
    name: 'Andrey',
    age: 30,
    email: 'test@test.tt'
  };

  // Преобразованный объект пользователя
  const updatedUser = toUpperCaseFields(user);

  // Ожидаемый результат после преобразования
  expect(updatedUser).toEqual({
    name: 'ANDREY',
    age: 30,
    email: 'TEST@TEST.TT'
  });
});