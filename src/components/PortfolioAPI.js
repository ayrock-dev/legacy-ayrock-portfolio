import works from '../data/portfolio-items.json'

const sortAsc = (a, b) => a.order - b.order

export default class PortfolioAPI {
    static all = () => works.sort(sortAsc)
    static get = (id) => works.filter(work => work.id === id)[0]
}