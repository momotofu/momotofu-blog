// Takes a DOM element and toggles the isActive class
export const toggleIsActiveOn = (el) => {
    const classes = el.className.split(' ')

    if (classes.includes('isActive')) {
      el.className = classes.filter(item => item !== 'isActive')
    } else {
      el.className = classes.concat('isActive').join(' ')
    }
}

export const generateRandomIDHash = (el) => {
  return `${Math.random().toString(36).substring(7)}`
}

export const getParameterByName = (name, url) => {
    if (!url) url = window.location.href

    name = name.replace(/[[\]]/g, '\\$&')
    const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url)

    if (!results) return ''
    if (!results[2]) return ''

    return decodeURIComponent(results[2].replace(/\+/g, ' '))
}
