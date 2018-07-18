/**
  Filters
  */
export const LANGUAGE_VISIBILITY_FILTERS = {
  SHOW_ALL: 'SHOW_ALL',
  JAVASCRIPT: 'JAVASCRIPT',
  PYTHON: 'PYTHON',
  SCALA: 'SCALA'
}

/**
  Accordion
  */
export const TOGGLE_ACCORDION_ITEM = 'TOGGLE_ACCORDION_ITEM'
export const SET_ACCORDION_VISIBILITY_FILTER = 'SET_ACCORDION_VISIBILITY_FILTER'

export const toggleAccordionItem = (id) => {
  return {
    type: TOGGLE_ACCORDION_ITEM,
    id
  }
}

export const setAccordionVisibilityFilter = (filter) => {
  return {
    type: SET_ACCORDION_VISIBILITY_FILTER,
    filter
  }
}