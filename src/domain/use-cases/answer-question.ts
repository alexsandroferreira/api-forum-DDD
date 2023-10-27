import { AnswersRepository } from './../repositories/answers-repository';
import { Answer } from "../entities/answer"

interface AnswerQuestionUseCaseRequest {
    insturctorId: string
    questionId: string
    content: string
}
export class AnswerQuestionUseCase {
    constructor(private answersRepository: AnswersRepository,){}

    async execute({insturctorId, questionId, content}: AnswerQuestionUseCaseRequest) {
        const answser = new Answer({
            authorId: insturctorId,
            content,
            questionId
        })
        await this.answersRepository.create(answser)
        return answser
    }
}