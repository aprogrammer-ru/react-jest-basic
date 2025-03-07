import { render, screen } from "@testing-library/react";
import Users from "@/components/User/Users";

describe("User", () => {
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
});