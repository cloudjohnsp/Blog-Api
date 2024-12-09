import {
  connect,
  closeDatabase,
  clearDatabase,
} from './tests/Utils/mongo-memory-server';

beforeAll(async () => {
  await connect();
});

afterEach(async () => {
  await clearDatabase();
});

afterAll(async () => {
  await closeDatabase();
});
