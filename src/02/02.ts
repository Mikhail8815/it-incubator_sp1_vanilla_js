export type StudentType = {
    id: number
    name: string,
    age: number,
    isActive: boolean,
    address: AdressType,
    technologies: TechnologiesType,
}

type AdressType = {
    street: string,
    city: CityType
}

type CityType = {
    cityTitle: string,
    country: string,
}

type TechnologiesType = Array<TechType>

type TechType = {
    id: number,
    title: string
}

export const student: StudentType = {
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


console.log(student.age)
console.log(student.name)
console.log(student.address.city.cityTitle)
console.log(student.technologies[2].title)