import { Entity } from '@/core/entities/entity'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

interface StudentPros {
  name: string
}
export class Student extends Entity<StudentPros> {
  static create(props: StudentPros, id?: UniqueEntityID) {
    const student = new Student(
      {
        ...props,
      },
      id,
    )

    return student
  }
}
