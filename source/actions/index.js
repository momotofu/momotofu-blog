// ACCORDION
export const TOGGLE_ACCORDION_ITEM = 'TOGGLE_ACCORDION_ITEM'

export const toggleAccordionItem = (id) => {
  return {
    type: TOGGLE_ACCORDION_ITEM,
    id
  }
}