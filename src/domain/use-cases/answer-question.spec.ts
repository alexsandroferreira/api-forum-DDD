import { expect, test } from 'vitest'
import { AnswerQuestionUseCase } from './answer-question'

test('create an answer', () => {
    const answerQuestion = new AnswerQuestionUseCase()

    const answer = answerQuestion.execute({
        insturctorId: '01',
        questionId:"01-01",
        content: 'Resposta test',
    })

    expect(answer.content).toEqual('Resposta test')
})