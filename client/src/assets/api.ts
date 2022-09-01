import axios from './axios.ts'

// let isAuth = false 
// Як робити перевірку авторизації? Є якийсь токен і тоді його зберігати у локал сторедж, чи як?

const login = async (username: string, password: string) => {
  try {
    await axios.post('/login', {
      username,
      password
    })
  } catch (error) {
    return error;
  }
}

const register = async (username: string, password: string) => {
  try {
    return await axios.post('/register', {
      username,
      password
    })
  } catch (error) {
    return error;
  }
}

export default login
export default register
// export default isAuth