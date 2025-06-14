// Тип користувача
interface IUser {
  id: number;
  name: string;
  email?: string;
}

export function createUserService(baseUrl: string) {
  let users: IUser[] = [];

  // Приватна функція
  function log(message: string) {
    console.log(`[UserService]: ${message}`);
  }

  // Ініціалізація (наприклад, завантаження користувачів)
  async function init(): Promise<void> {
    try {
      const response = await fetch(`${baseUrl}/users`);
      const data: IUser[] = await response.json();
      users = data;
      log(`Users loaded: ${users.length}`);
    } catch (error) {
      console.error('Failed to fetch users', error);
    }
  }

  // API-сервісу
  return {
    init,
    addUser(user: IUser): void {
      users.push(user);
    },
    getUserById(id: number): IUser | undefined {
      return users.find((u) => u.id === id);
    },
    getCount(): number {
      return users.length;
    },
  };
}

const userService = createUserService('https://jsonplaceholder.typicode.com');

export async function runUserService() {
  await userService.init();
  console.log('Кількість юзерів:', userService.getCount());

  userService.addUser({ id: 999, name: 'Test User' });
  console.log('User 999:', userService.getUserById(999));
}
