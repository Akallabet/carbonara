const prefix = process.env.GATSBY_PREFIX
const url = (prefix ? `/${prefix}` : '') + '/register'

const register = async data => {
  try {
    const result = await fetch(url, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    return result.json()
  } catch (error) {
    return {
      error,
    }
  }
}

export default register
