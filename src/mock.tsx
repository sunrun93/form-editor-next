import Mock from "mockjs"

const domain_client = '/api_client/'

Mock.mock(domain_client+'login', () => {
  return {
    code: 200,
    message: 'OK',
    data: {
      loginUid: 888888,
      userName: 'Reina',
      token: 'goodluck2025'
    }
  }

})