import { rest } from 'msw';

export const handlers = [
  rest.get('https://jsonplaceholder.typicode.com/users', (req, res, ctx) => {
    const users = [];
    for (let i = 1; i <= 10; i++) {
      users.push({ id: i, username: `User ${i}` });
    }
    return res(ctx.json(users));
  }),
];
