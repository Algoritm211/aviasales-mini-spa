import add from 'date-fns/add'
import differenceInMinutes from 'date-fns/differenceInMinutes'

function timeConvert(n: number) {
  let num = n;
  let hours = (num / 60);
  let rhours = Math.floor(hours);
  let minutes = (hours - rhours) * 60;
  let rminutes = Math.round(minutes).toString();
  if (rminutes.length === 1) {
    rminutes = `0${rminutes}`
  }
  return {
    hours: rhours,
    minutes: rminutes
  }
}

export const getTimeDuration = (time: string, toDestinationMinutes: number) => {
  const diff = differenceInMinutes(
    add(new Date(time), {
      minutes: toDestinationMinutes
    }),
    new Date(time)
  )
  const diffHoursMinutes = timeConvert(diff)

  return `${diffHoursMinutes.hours}ч ${diffHoursMinutes.minutes}м`
}

export const getTimeFlight = (time: string, toDestinationMinutes: number) => {

  const startHHMM = new Date(time)
  const endHHMM = add(new Date(startHHMM), {
    minutes: toDestinationMinutes
  })
  return {
    startHHMM: startHHMM.toISOString().substr(11, 5),
    endHHMM: endHHMM.toISOString().substr(11, 5)
  }

}
