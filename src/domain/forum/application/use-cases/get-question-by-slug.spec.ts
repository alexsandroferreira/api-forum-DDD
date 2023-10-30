import { InMemoryQuestionsRepository } from 'test/repositories/in-memory-questions-repositories'
import { GetQuestionBySlugUseCase } from './get-question-by-slug'
import { Slug } from '../../enterprise/entities/value-objects/slug'
import { Question } from '../../enterprise/entities/question'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

let inMemoryQuestionsRepository: InMemoryQuestionsRepository
let sut: GetQuestionBySlugUseCase
describe('Get Question By Slug', async () => {
  beforeEach(() => {
    inMemoryQuestionsRepository = new InMemoryQuestionsRepository()
    sut = new GetQuestionBySlugUseCase(inMemoryQuestionsRepository)
  })

  it('shold be able to get a question by slug', async () => {
    const newQuestion = Question.create({
      authorId: new UniqueEntityID(),
      title: 'Example question',
      slug: Slug.create('example-question'),
      content: 'Example content',
    })

    await inMemoryQuestionsRepository.create(newQuestion)
    const { question } = await sut.execute({
      slug: 'example-question',
    })

    expect(question.id).toBeTruthy()
    expect(inMemoryQuestionsRepository.items[0].id).toEqual(question.id)
    expect(question.title).toEqual('Example question')
  })
})
