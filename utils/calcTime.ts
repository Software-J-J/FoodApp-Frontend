export function calcTime(createdAt: Date) {
  const dateCreated = new Date(createdAt)

  const currentDate = new Date()

  const difference = currentDate - dateCreated

  const seconds = Math.floor(difference / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)
  const months = Math.floor(days / 30)
  const years = Math.floor(months / 12)

  // Construimos el estimated a mostrar
  let estimated = ''
  if (years > 0) {
    estimated = `${years} año${years > 1 ? 's' : ''} y ${months % 12} mes${
      months % 12 > 1 ? 'es' : ''
    }`
  } else if (months > 0) {
    estimated = `${months} mes${months > 1 ? 'es' : ''} y ${days % 30} día${
      days % 30 > 1 ? 's' : ''
    }`
  } else if (days > 0) {
    estimated = `${days} día${days > 1 ? 's' : ''}`
  } else if (hours > 0) {
    estimated = `${hours} hora${hours > 1 ? 's' : ''}`
  } else if (minutes > 0) {
    estimated = `${minutes} minuto${minutes > 1 ? 's' : ''}`
  } else {
    estimated = 'Hace unos segundos'
  }

  return estimated
}
