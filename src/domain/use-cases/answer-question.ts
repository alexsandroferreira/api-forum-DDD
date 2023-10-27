import { Answer } from "../entities/answer"

interface AnswerQuestionUseCaseRequest {
    insturctorId: string
    questionId: string
    content: string
}
export class AnswerQuestionUseCase {
    execute({insturctorId, questionId, content}: AnswerQuestionUseCaseRequest) {
        const answser = new Answer(content)

        return answser
    }
}