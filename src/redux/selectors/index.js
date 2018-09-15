import { createSelector } from 'reselect'

const getWorksVisibilityFilters = state => state.worksVisibilityFilters.filters
const getWorks = state => state.works

export const getVisibleWorks = createSelector(
  [getWorksVisibilityFilters, getWorks],
  (filters, works) => {
    if (filters.length === 0) return works

    return works.filter((work) => {
      const lowerCaseTags = work.tags.map(work => work.toLowerCase())
      return filters.every((filter) => lowerCaseTags.indexOf(filter.toLowerCase()) !== -1)
    })
  }
)
