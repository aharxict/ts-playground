interface IUser {
  id: number;
  name: string;
  email?: string;
}

// Базовий клас
class UserService {
  protected users: IUser[] = [];

  constructor(protected readonly baseUrl: string) {}

  public async init(): Promise<void> {
    await this.fetchUsers();
  }

  public async fetchUsers(): Promise<void> {
    const response = await fetch(`${this.baseUrl}/users`);
    const data: IUser[] = await response.json();
    this.users = data;
  }

  public getUserById(id: number): IUser | undefined {
    return this.users.find((u) => u.id === id);
  }
}

// Клас-нащадок, який розширює базовий
class AdminUserService extends UserService {
  constructor(baseUrl: string) {
    super(baseUrl); // Виклик конструктора батьківського класу
  }

  // Новий метод, якого немає в базовому класі
  public getAllUsers(): IUser[] {
    return this.users; // Доступ через protected
  }
}

const adminService = new AdminUserService(
  'https://jsonplaceholder.typicode.com',
);

export async function runAdminService() {
  await adminService.init();
  const all = adminService.getAllUsers();
  console.log('All users:', all);
}
