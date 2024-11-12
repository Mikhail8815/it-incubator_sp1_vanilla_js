import {CityType} from "../02/02_02";
import {demolishHousesOnTheStreet, getHousesOnTheStreet} from "./04_02";

let city: CityType

beforeEach(() => {
    city = {
        title: 'New York',
        houses: [{
            id: 1,
            buildedAt: 2012,
            repaired: false,
            address: {
                number: 100,
                street: {
                    title: 'White street',
                }
            }
        },
            {
                id: 2,
                buildedAt: 2008,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: 'Happy street',
                    }
                }
            },
            {   id: 3,
                buildedAt: 2020,
                repaired: false,
                address: {
                    number: 200,
                    street: {
                        title: 'Happy street',
                    }
                }
            },],
        governmentBuildings: [],
        citizensNumber: 1000000
    }
})

test('Houses should be destroyed', ()=> {
    demolishHousesOnTheStreet(city, "Happy street");
    expect(city.houses.length).toBe(1);
    expect(city.houses[0].id).toBe(1);
})

test("list of streets titles of houses", () => {
    let happyHouses = getHousesOnTheStreet(city, "Happy street");
    let whiteHouses = getHousesOnTheStreet(city, "White street");

    expect(happyHouses.length).toBe(2);
    expect(whiteHouses.length).toBe(1);
});