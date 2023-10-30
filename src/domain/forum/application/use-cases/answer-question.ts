import { AnswersRepository } from '@/domain/forum/application/repositories/answers-repository'
import { Answer } from '@/domain/forum/enterprise/entities/answer'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

interface AnswerQuestionUseCaseRequest {
  insturctorId: string
  questionId: string
  content: string
}
interface AnswerQuestionUseCaseResponse {
  answer: Answer
}
export class AnswerQuestionUseCase {
  constructor(private answersRepository: AnswersRepository) {}

  async execute({
    insturctorId,
    questionId,
    content,
  }: AnswerQuestionUseCaseRequest): Promise<AnswerQuestionUseCaseResponse> {
    const answer = Answer.create({
      content,
      authorId: new UniqueEntityID(insturctorId),
      questionId: new UniqueEntityID(questionId),
    })

    await this.answersRepository.create(answer)

    return {
      answer,
    }
  }
}
