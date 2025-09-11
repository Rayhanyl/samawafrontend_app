export async function getData(slug: string) {
  try {
    const res = await fetch(
      `${process.env.HOST_API}/api/wedding-package/${slug}`,
      {
        method: 'GET',
        cache: 'no-cache',
      }
    )

    if (!res.ok) throw new Error('Failed to fetch city')

    return res.json()
  } catch (error) {
    console.error(error)
    return { data: null }
  }
}
