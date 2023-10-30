import { InMemoryAnswersRepository } from 'test/repositories/in-memory-answer-repository'
import { AnswerQuestionUseCase } from './answer-question'
import { CreateQuestionUseCase } from './create-question'
import { InMemoryQuestionsRepository } from 'test/repositories/in-memory-questions-repositories'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

let inMemoryAnswersRepository: InMemoryAnswersRepository
let sut: AnswerQuestionUseCase
describe('Create Answer', async () => {
  beforeEach(() => {
    inMemoryAnswersRepository = new InMemoryAnswersRepository()
    sut = new AnswerQuestionUseCase(inMemoryAnswersRepository)
  })

  it('shold be able to create an answer', async () => {
    const { answer } = await sut.execute({
      insturctorId: '01',
      questionId: '0202',
      content: 'contente answer',
    })

    expect(answer.id).toBeTruthy()
  })
})
