import worksVisibilityFilters from '../worksVisibilityFilters'
import * as types from '../../constants/actionTypes'

describe('worksVisibilitiesFilters', () => {
  it('should handle initial state', () => {
    expect(
      worksVisibilityFilters(undefined, {})
    ).toEqual(
      {
        filters: [],
        showFilters: false
      }
    )
  })
})


