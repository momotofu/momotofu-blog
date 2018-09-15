import { createSelector } from 'reselect'

const getWorksVisibilityFilters = state => state.worksVisibilityFilters.filters
const getWorks = state => state.works

export const getVisibleWorks = createSelector(
  [getWorksVisibilityFilters, getWorks],
  (filters, works) => {
    if (filters.length === 0) return works

    return works.filter((work) => {
      return filters.every((filter) => work.tags.indexOf(filter) !== -1)
    })
  }
)
