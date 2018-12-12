const user = jest.genMockFromModule('@/user');

user.authentication = () => ({
  data: [{ user: 'user' }]
});

export default user;
