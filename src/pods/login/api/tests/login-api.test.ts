import { validateCredentials } from '../login.api';

describe('login API tests', () => {
  test('should resolve promise if username and password match', async () => {
    const data = {
      user: 'admin',
      password: 'test',
    };
    const response = await validateCredentials(data.user, data.password);
    expect(response).toBe(true);
  });
  test('should not resolve promise if username and password do not match', async () => {
    const data = {
      user: 'a',
      password: 't',
    };
    const response = await validateCredentials(data.user, data.password);
    expect(response).toBe(false);
  });
  test('should not resolve promise if password does not match', async () => {
    const data = {
      user: 'admin',
      password: 'test1',
    };
    const response = await validateCredentials(data.user, data.password);
    expect(response).toBe(false);
  });
  test('should return false if data is empty', async () => {
    const data = {
      user: '',
      password: '',
    };
    const response = await validateCredentials(data.user, data.password);
    expect(response).toBe(false);
  });
});
