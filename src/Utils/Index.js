const formattedName = name => {
  const nameArray = name.split("(")
  if (nameArray.length === 0) {
    return []
  }
  const parserName = nameArray.map(obj => {
    const realData = obj.replace(/[^a-zA-Z ]/g, "")
    return {
      cleanName: realData,
    }
  })
  return parserName
}

const subString = text => {
  return text.substring(0, 128)
}

export default { formattedName, subString }
