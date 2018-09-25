import { createSelector } from 'reselect'

const getWorksVisibilityFilters = state => state.worksVisibilityFilters.filters
const getWorks = state => state.works

const sort = (works) => {
  return works.sort((a, b) => { return a.sortPriority < b.sortPriority })
}

export const getVisibleWorks = createSelector(
  [getWorksVisibilityFilters, getWorks],
  (filters, works) => {
    if (filters.length === 0) return sort(works)

    return sort(works.filter((work) => {
      const lowerCaseTags = work.tags.map(work => work.toLowerCase())
      return filters.every((filter) => lowerCaseTags.indexOf(filter.toLowerCase()) !== -1)
    }))
  }
)
