import { randomUUID } from "crypto"
import { Entity } from "../../core/entities/entity"
interface InstructorPros {
    name:string
}
export class Instructor extends Entity<InstructorPros> {


    get name() {
        return this.props.name
    }

}