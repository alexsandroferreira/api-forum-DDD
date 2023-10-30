import { CreateQuestionUseCase } from './create-question'
import { InMemoryQuestionsRepository } from 'test/repositories/in-memory-questions-repositories'

let inMemoryQuestionsRepository: InMemoryQuestionsRepository
let sut: CreateQuestionUseCase
describe('Create Question', async () => {
  beforeEach(() => {
    inMemoryQuestionsRepository = new InMemoryQuestionsRepository()
    sut = new CreateQuestionUseCase(inMemoryQuestionsRepository)
  })

  it('shold be able to create a question', async () => {
    const { question } = await sut.execute({
      authorId: '01',
      title: 'Test question title',
      content: 'Resposta test',
    })

    expect(question.id).toBeTruthy()
    expect(inMemoryQuestionsRepository.items[0].id).toEqual(question.id)
  })
})
