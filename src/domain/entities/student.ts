import { Entity } from "../../core/entities/entity"

interface StudentPros {
    name: string
}
export class Student extends Entity<StudentPros> {

}