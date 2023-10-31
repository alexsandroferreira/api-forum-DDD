import { QuestionsRepository } from '../repositories/question-repository'

interface DeleteQuestionUseCaseRequest {
  questionId: string
}

interface DeleteQuestionUseCaseResponse {}

export class DeleteQuestionUseCase {
  constructor(private quetionsRepository: QuestionsRepository) {}

  async execute({
    questionId,
  }: DeleteQuestionUseCaseRequest): Promise<DeleteQuestionUseCaseResponse> {
    const question = await this.quetionsRepository.findById(questionId)

    if (!question) {
      throw new Error('Question not found')
    }
    await this.quetionsRepository.delete(question)

    return {}
  }
}
