const register = async data => {
  try {
    const result = await fetch('http://www.test.com/register', {
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
