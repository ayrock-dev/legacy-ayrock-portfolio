import works from '../data/portfolio-items.json'

export default class PortfolioAPI {
    static all = () => works

    static get = (id) => works.filter(work => work.id === id)[0]
}