export const useTimeToReadFormatter = (timeToRead: number): string => {
  const buckets = Math.round(timeToRead / 3)
  const emojis = new Array(buckets || 1).fill('🍿')

  return `${emojis.join('')} ${timeToRead} min`
}
