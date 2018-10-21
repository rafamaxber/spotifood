export const capitalizeFirstLetter = (value = '') => {
  if (!value) return ''
  return value[0].toUpperCase() + value.slice(1)
}

export const openWindow = ({ url, name, width, height }) => {
  const left = (window.screen.width - width) / 2
  const top = (window.screen.height - height) / 4
  window.open(
    url,
    name,
    `toolbar=no, location=no, directories=no,
      status=no, menubar=no, scrollbars=no,
      resizable=no, copyhistory=no,
      width=${width}, height=${height},
      top=${top}, left=${left}`
  )
}
