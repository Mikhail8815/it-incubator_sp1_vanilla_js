import {StudentType} from "../02/02";
import {addSkill, doesStudentLiveIn, makeStudentActive} from "./03";

let student: StudentType

beforeEach(() => {
    student = {
        id: 1,
        name: 'Misha',
        age: 36,
        isActive: false,
        address: {
            street: 'Surganova 2',
            city: {
                cityTitle: 'Minsk',
                country: 'Belarus',
            }
        },
        technologies: [
            {
                id: 1,
                title: 'HTML'
            },
            {
                id: 2,
                title: 'CSS'
            },
            {
                id: 3,
                title: 'React'
            },
        ]
    }
})


test('new tech skill should be added to student', ()=> {
    expect(student.technologies.length).toBe(3)
    addSkill(student, 'JS')
    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].title).toBe('JS')
})

test('student should be made active', () => {
    expect(student.isActive).toBe(false)
    makeStudentActive(student)
    expect(student.isActive).toBe(true)
})

test('does student live in city', () => {
    // expect(student.address.city.cityTitle).toBe('Minsk')
    let result1 = doesStudentLiveIn(student, 'Minsk')
    let result2 = doesStudentLiveIn(student, 'Minsk')
    expect(result1).toBe(true)
    expect(result2).toBe(true)
})