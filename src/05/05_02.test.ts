import {CityType} from "../02/02_02";
import {getStreetsTitlesOfGovernmentBuildings, getStreetsTitlesOfHouses} from "./05_02";

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
        governmentBuildings: [{
            type: 'HOSPITAL',
            address: {
                street: {
                    title: 'Central Str'
                }, number: 12
            },
            budget: 20000,
            stuffCount: 200
        },
            {
            type: 'FIRE-STATION',
            address: {
                street: {
                    title: 'South Str'
                }, number: 12
            },
            budget: 50000,
            stuffCount: 1000
        }],
        citizensNumber: 1000000
    }
})

test('list of streets titles of government buildings', ()=> {
    let streetsNames = getStreetsTitlesOfGovernmentBuildings(city.governmentBuildings);

    expect(streetsNames.length).toBe(2);
    expect(streetsNames[0]).toBe("Central Str");
    expect(streetsNames[1]).toBe("South Str");
})

test("'list of streets titles", () => {
    let streetsNames = getStreetsTitlesOfHouses(city.houses);

    expect(streetsNames.length).toBe(3);
    expect(streetsNames[0]).toBe("White street");
    expect(streetsNames[1]).toBe("Happy street");
    expect(streetsNames[2]).toBe("Happy street");
});