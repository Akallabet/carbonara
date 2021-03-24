const register = async data => {
  try {
    const result = await fetch(process.env.GATSBY_API_URL as string, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      mode: 'no-cors',
    })
    return result.json()
  } catch (error) {
    return {
      error,
    }
  }
}

export default register
