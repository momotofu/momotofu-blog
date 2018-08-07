// Takes a DOM element and toggles the isActive class
export const toggleIsActiveOn = (el) => {
    const classes = el.className.split(' ')

    if (classes.includes('isActive')) {
      el.className = classes.filter(item => item !== 'isActive')
    } else {
      el.className = classes.concat('isActive').join(' ')
    }
}
