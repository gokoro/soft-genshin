const URL =
  'https://hk4e-api-os.hoyoverse.com/event/sol/sign?act_id=e202102251931481&lang=ko-kr'
const UA =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.128 Safari/537.36'

const ID = HOYOVERSE_ID
const TOKEN = HOYOVERSE_TOKEN

export async function sendAttendance() {
  const sentData: RequestInit = {
    method: 'POST',
    headers: {
      'User-Agent': UA,
      cookie: `ltuid=${ID};ltoken=${TOKEN}`,
    },
  }

  const response = await fetch(URL, sentData)
  const data = await response.json()
  console.log(data)

  return data
}

declare const HOYOVERSE_ID: string
declare const HOYOVERSE_TOKEN: string
