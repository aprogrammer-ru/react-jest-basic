// Подключаем библиотеку для тестирования, 
// screen - объект, который содержит методы для поиска элементов на странице
// render - функция, которая рендерит компонент
import { render, screen } from "@testing-library/react"; 
import Users from "@/components/User/Users";

// describe - группировка тестов
describe("User Tests", () => {
  // Тест проверяет, что заголовок H1 "Users" отображается на странице
  test("renders heading", async () => {
    render(<Users />);
    expect(screen.getByRole("heading", { name: "Users" })).toBeInTheDocument();
  });

  // Тест проверяет, что отображается список пользователей с двумя элементами
  test("renders a list of users", async () => {
    render(<Users />);
    const users = await screen.findAllByRole("listitem");
    expect(users).toHaveLength(2);
  });

  // Тест проверяет по снимку, что компонент Users отрисовывается корректно
  test('test an inline snapshot', () => {
    const { asFragment, debug } = render(<Users />) // Возвращает объект с методом asFragment, который возвращает текущий снимок компонента
    debug(); // Выводит в консоль DOM компонента
    expect(asFragment()).toMatchInlineSnapshot(`
<DocumentFragment>
  <div>
    <h1>
      Users
    </h1>
    <ul>
      <li>
        name 1
      </li>
      <li>
        name 2
      </li>
    </ul>
  </div>
</DocumentFragment>
`) // если не передать здесь строку, то будет сгенерирована строка из предыдущего вызова
  })

  // Тест сохраняет снимок в файл и проверяет, что он соответствует фактическому снимку
  it('using a snapshot file', () => {
    const { asFragment } = render(<Users />)
    expect(asFragment()).toMatchSnapshot();
  });

});