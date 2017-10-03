import works from '../data/portfolio-items.json'

const sortDesc = (a, b) => b.order - a.order

export default class PortfolioAPI {
    static all = () => works.sort(sortDesc)

    static get = (id) => works.filter(work => work.id === id)[0]
}