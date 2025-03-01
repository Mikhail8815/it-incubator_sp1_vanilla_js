import {CityType} from "../02/02_02";

export function demolishHousesOnTheStreet (city: CityType, street: string) {
    city.houses = city.houses.filter(house=> house.address.street.title !== street)
}

export const getHousesOnTheStreet = (city: CityType, street: string) => {
    return city.houses.filter(house=> house.address.street.title === street)
}