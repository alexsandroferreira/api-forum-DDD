import { AnswersRepository } from '@/domain/forum/application/repositories/answers-repository'
import { Answer } from '@/domain/forum/enterprise/entities/answer'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

interface AnswerQuestionUseCaseRequest {
  insturctorId: string
  questionId: string
  content: string
}
export class AnswerQuestionUseCase {
  constructor(private answersRepository: AnswersRepository) {}

  async execute({
    insturctorId,
    questionId,
    content,
  }: AnswerQuestionUseCaseRequest) {
    const answser = Answer.create({
      content,
      authorId: new UniqueEntityID(insturctorId),
      questionId: new UniqueEntityID(questionId),
    })

    await this.answersRepository.create(answser)

    return answser
  }
}
