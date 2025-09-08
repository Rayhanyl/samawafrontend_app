import { Tshow } from "./types"

export async function getData(show: Tshow) {
    try {
      let url = `${process.env.HOST_API}/api/wedding-packages`
      if (show === 'popular') {
        url = `${process.env.HOST_API}/api/wedding-packages/popular`
      }
  
      const res = await fetch(url, {
        method: 'GET',
        cache: 'no-cache',
      })
  
      return res.json()
    } catch (error) {
      console.log(error)
    }
  }