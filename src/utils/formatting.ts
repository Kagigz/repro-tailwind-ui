export const getCurrencySymbol = (value: string) => {
  switch (value) {
    case 'usd':
      return '$'
    case 'eur':
      return '€'
  }
}

export const formatNumberExpanded = (value: any) => {
  value = value.toString()
  const parts = value.split('.')
  let decimals = ''
  if (parts.length > 1)
    decimals = `.${parts[1].substring(0, 2)}`
  const wholeNumber = parts[0]
  // Adding commas every 3 digit
  let count = 1
  const formattedNumberArray = []
  for (let i = wholeNumber.length - 1; i >= 0; i--) {
    formattedNumberArray.unshift(wholeNumber[i])
    if (count === 3) {
      formattedNumberArray.unshift(',')
      count = 0
    }
    count++
  }
  let formattedNumber = formattedNumberArray.reduce((s, a) => s + a, '')
  if (formattedNumber[0] === ',')
    formattedNumber = formattedNumber.substring(1, formattedNumber.length)
  formattedNumber += decimals
  return formattedNumber
}

export const formatNumber = (value: any) => {
  value = value.toString()
  const parts = value.split('.')
  let decimals = ''
  if (parts.length > 1)
    decimals = `.${parts[1].substring(0, 2)}`
  const wholeNumber = parts[0]
  const digits = wholeNumber.length
  // Showing complete value until 999,99
  if (digits <= 3) { return wholeNumber + decimals }
  // Not showing decimals until 9999
  else if (digits == 4) { return wholeNumber }
  // Showing result as x,y K until 999.999
  else if (digits <= 6) {
    const firstDigits = Math.round(wholeNumber / 100)
    // edge case when the number is rounded up to 1M
    if (firstDigits.toString().length > 4)
      return `${(firstDigits / 10000).toString()}M`
    return `${(firstDigits / 10.0).toString()}K`
  }
  // Showing result as x,y M until 999.999.999
  else if (digits <= 9) {
    const firstDigits = Math.round(wholeNumber / 100000)
    // edge case when the number is rounded up to 1B
    if (firstDigits.toString().length > 4)
      return `${(firstDigits / 10000).toString()}B`
    return `${(firstDigits / 10.0).toString()}M`
  }
  // Showing result as x,y B for values > 999,9M
  else {
    const firstDigits = Math.round(wholeNumber / 100000000)
    return `${(firstDigits / 10.0).toString()}B`
  }
}
