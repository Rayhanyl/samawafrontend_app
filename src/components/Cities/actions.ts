export async function getData() {
  try {
    const res = await fetch(`${process.env.HOST_API}/api/cities`, {
      method: 'GET',
      cache: 'no-cache',
    })

    return res.json()
  } catch (error) {
    console.log(error)
  }
}
