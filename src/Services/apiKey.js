import md5 from "js-md5"

export const apiKey = () => {
  const PRIVATE_KEY = "773b9be8bc78444cd01d04098750005abd64a04f"
  const PUBLIC_KEY = "24abfe69a202e5aa08eed288ae629754"
  const timestamp = Number(new Date())

  const hash = md5.create()
  hash.update(timestamp + PRIVATE_KEY + PUBLIC_KEY)

  const concatKeys = `ts=${timestamp}&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`

  return concatKeys
}
export default apiKey
