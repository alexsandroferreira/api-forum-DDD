import { AnswerQuestionUseCase } from './answer-question'
import { AnswersRepository } from '../repositories/answers-repository'
import { Answer } from '@/domain/forum/enterprise/entities/answer'

const fakeAnswersRepository: AnswersRepository = {
  create: async function (answer: Answer) {
    console.log(answer)
  },
}
test('create an answer', async () => {
  const answerQuestion = new AnswerQuestionUseCase(fakeAnswersRepository)

  const answer = await answerQuestion.execute({
    insturctorId: '01',
    questionId: '01-01',
    content: 'Resposta test',
  })

  expect(answer.content).toEqual('Resposta test')
})
