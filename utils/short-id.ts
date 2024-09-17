export default function reduceUuid(uuid: string) {
  if (uuid.length !== 36) {
    return 'UUID inválido'
  }

  const start = uuid.substring(0, 4)
  const end = uuid.substring(32)

  return start + '...' + end
}
