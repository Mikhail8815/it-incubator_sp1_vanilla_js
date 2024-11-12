import {CityType, GovernmentBuildingType, HouseType} from "../02/02_02";

export const getStreetsTitlesOfGovernmentBuildings = (buildings: Array<GovernmentBuildingType>) => {
    return buildings.map((build) => build.address.street.title)
}
export const getStreetsTitlesOfHouses = (houses: Array<HouseType>) => {
    return houses.map((house) => house.address.street.title)
}