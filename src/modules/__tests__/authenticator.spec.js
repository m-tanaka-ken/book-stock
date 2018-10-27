import auth from '@/authenticator.ts';
import localStorageMockHelper from '@/utils/localStorageMockHelper';

jest.mock('@/apis/user');

describe('認証', () => {
  beforeEach(() => {
    localStorageMockHelper.install();
  });
  afterEach(() => {
    localStorageMockHelper.uninstall();
  });
  it('loggedIn', () => {
    expect(auth.loggedIn()).toEqual(false);
  });
  describe('login', () => {
    it('ログイン成功', async () => {
      expect(await auth.login('a@a.a', 'pa')).toEqual(true);
    });
  });
});
