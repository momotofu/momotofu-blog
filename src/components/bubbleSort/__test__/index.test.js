
import { bubbleSortIndex } from '../index.js'

it('Should produce nested index sequence', () => {
    const arrLength = 4
    const bsi = bubbleSortIndex(arrLength) 

    expect(bsi.next().value).toEqual(0)
    expect(bsi.next().value).toEqual(1)
    expect(bsi.next().value).toEqual(2)
    expect(bsi.next().value).toEqual(0)
    expect(bsi.next().value).toEqual(1)
    expect(bsi.next().value).toEqual(0)
    expect(bsi.next().done).toBe(true)
})