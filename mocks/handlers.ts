import { rest } from 'msw';
const runtimeConfig = useRuntimeConfig()
const { apiBase } = runtimeConfig.public

export const handlers = [
  rest.get(apiBase, (req, res, ctx) => {
    const users = [];
    for (let i = 1; i <= 10; i++) {
      users.push({ id: i, username: `User ${i}` });
    }
    return res(ctx.json(users));
  }),
];
