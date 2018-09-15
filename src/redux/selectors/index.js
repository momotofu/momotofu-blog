import { createSelector } from 'reselect'

const getWorksVisibilityFilters = state => state.worksVisibilityFilters.filters
const getWorks = state => state.works

export const getVisibleWorks = createSelector(
  [getWorksVisibilityFilters, getWorks],
  (filters, works) => {
    return works.filter((work) => {
      return work.tags.some(tag => filters.indexOf(tag) !== -1)
    })
  }
)
