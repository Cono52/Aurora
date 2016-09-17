import { InMemoryDbService } from 'angular2-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let cakes = [
      [
        {
            "_id": "57d7237a1fdd46dd08820b21",
            "guid": "d53ea988-536c-4b41-85fb-028da4c39625",
            "price": "$60.49",
            "rating": 2,
            "picture": "../../assets/mockpics/IMG_9510.jpg",
            "age": 30,
            "username": "girly52"
        },
        {
            "_id": "57d7237a91602e05730186e5",
            "guid": "20c50b70-64e7-483c-8c0a-622d57f10f46",
            "price": "$78.13",
            "rating": 0,
            "picture": "../../assets/mockpics/IMG_9511.jpg",
            "age": 33,
            "username": "lady21"
        },
        {
            "_id": "57d7237a3a512c3c25da2a3a",
            "guid": "fceddadb-5c56-498c-b175-06451af36601",
            "price": "$89.52",
            "rating": 2,
            "picture": "../../assets/mockpics/IMG_9512.jpg",
            "age": 31,
            "username": "christiloma"
        },
        {
            "_id": "57d7237abc67be9b53b407e0",
            "guid": "b584f792-416c-4bfa-b125-9669b52fe031",
            "price": "$66.14",
            "rating": 2,
            "picture": "../../assets/mockpics/IMG_9513.jpg",
            "age": 16,
            "username": "bountybar"
        },
        {
            "_id": "57d7237a862fb27656a9472a",
            "guid": "9a236f3b-fe81-42a5-90f3-df5efd2dbf21",
            "price": "$77.55",
            "rating": 5,
            "picture": "../../assets/mockpics/IMG_9514.jpg",
            "age": 17,
            "username": "jessq"
        },
        {
            "_id": "57d7237a0bfff145a4bd3414",
            "guid": "d146ca27-fd5f-489d-ab0e-7f4efa7c43ca",
            "price": "$99.58",
            "rating": 3,
            "picture": "../../assets/mockpics/IMG_9515.jpg",
            "age": 29,
            "username": "zalgaso"
        },
        {
            "_id": "57d7237aad5002712c02adc8",
            "guid": "b335fa34-3e26-480f-94df-7340a13b5f81",
            "price": "$33.21",
            "rating": 5,
            "picture": "../../assets/mockpics/IMG_9517.jpg",
            "age": 35,
            "username": "kirbya"
        },
        {
            "_id": "57d7237a1280bb688e352101",
            "guid": "701f71fb-d05e-4e97-8d64-2c53ee160057",
            "price": "$67.88",
            "rating": 2,
            "picture": "../../assets/mockpics/IMG_9519.jpg",
            "age": 30,
            "username": "masonh"
        },
        {
            "_id": "57d7237a666558f95b4a9a51",
            "guid": "7db871a7-bfce-4a80-aa13-75594a969204",
            "price": "$82.72",
            "rating": 0,
            "picture": "../../assets/mockpics/IMG_9523.jpg",
            "age": 19,
            "username": "chenxiu"
        },
        {
            "_id": "57d7237aa8d216f413bc33fd",
            "guid": "d50a03e1-1271-4587-baad-ebe0f8dddcf7",
            "price": "$56.75",
            "rating": 3,
            "picture": "../../assets/mockpics/IMG_9524.jpg",
            "age": 27,
            "username": "moemamoe"
        }
]
    ];
    return {cakes};
  }
}
