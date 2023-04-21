import { setupServer } from "msw/node";
import { rest } from "msw";

const server = setupServer(
  rest.get("/authentication/verify", (req, res, ctx) => {
    return res(ctx.json({ status: 200, verification: true }));
  }),
  rest.post("/authentication/login", (req, res, ctx) => {
    return res(ctx.json({jwtToken: 'test_token', role: 'mentor'}))
  })
);

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

export { server, rest };
