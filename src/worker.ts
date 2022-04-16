import * as service from './service'

// @ts-ignore
addEventListener('scheduled', (event) => {
  // @ts-ignore
  event.waitUntil(triggerEvent())
})

async function triggerEvent() {
  return await service.sendAttendance()
}
