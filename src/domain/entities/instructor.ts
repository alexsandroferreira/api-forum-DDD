import { randomUUID } from "crypto"
import { Entity } from "../../core/entities/entity"
import { UniqueEntityID } from "../../core/entities/unique-entity-id"
interface InstructorPros {
    name:string
}
export class Instructor extends Entity<InstructorPros> {


    get name() {
        return this.props.name
    }

    static create (
        props: InstructorPros,
         id?: UniqueEntityID
         ) {
            const instructor = new Instructor({
                ...props,
            }, id)

            return instructor
        }

}