import { Question } from './../../enterprise/entities/question'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { QuestionsRepository } from '../repositories/question-repository'

interface GetQuestionBySlugRequest {
  slug: string
}

interface GetQuestionBySlugResponse {
  question: Question
}

export class GetQuestionBySlugUseCase {
  constructor(private quetionsRepository: QuestionsRepository) {}

  async execute({
    slug,
  }: GetQuestionBySlugRequest): Promise<GetQuestionBySlugResponse> {
    const question = await this.quetionsRepository.findBySlug(slug)

    if (!question) {
      throw new Error('Question not foind.')
    }

    return {
      question,
    }
  }
}
