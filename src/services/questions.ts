export const getAllQuestions = async () => {
  const res = await fetch(`${location.origin}/data.json`)
  const data = await res.json()

  return data
}
