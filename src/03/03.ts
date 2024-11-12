import {student, StudentType} from "../02/02";

export const sum = (a: number, b: number) => a + b;

const res = sum(sum(2,3), sum(4,5));

export const addSkill = (student: StudentType, skill: string) => {
student.technologies.push({
    id: new Date().getTime(),
    title: skill
})
}

export function makeStudentActive(student: StudentType) {
    student.isActive = true
}

export const doesStudentLiveIn  = (s: StudentType, cityName: string) => {
    return s.address.city.cityTitle === cityName
}