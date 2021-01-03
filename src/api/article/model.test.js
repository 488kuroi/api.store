import { Article } from '.'
import { User } from '../user'

let user, article

beforeEach(async () => {
  user = await User.create({ email: 'a@a.com', password: '123456' })
  article = await Article.create({ user, name: 'test', price: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = article.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(article.id)
    expect(typeof view.user).toBe('object')
    expect(view.user.id).toBe(user.id)
    expect(view.name).toBe(article.name)
    expect(view.price).toBe(article.price)
    expect(view.description).toBe(article.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = article.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(article.id)
    expect(typeof view.user).toBe('object')
    expect(view.user.id).toBe(user.id)
    expect(view.name).toBe(article.name)
    expect(view.price).toBe(article.price)
    expect(view.description).toBe(article.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
