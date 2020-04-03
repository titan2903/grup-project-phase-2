# `Movie List` 

Hacktiv8 Grup Project Phase 2

Developer: 
- Titanio Yudista
- Jessica Sugianto
- Hamzah Abdullah Mubarak

3rd Party we used in this Project:
- Google Search
- OMDb
- Calenderific

An Simple Movie List Application with some features:
1. Search Movie by Title
2. Search Detail Movie by ID
3. Preview List Movie
4. Preview List Holiday Date
5. Search Cinema
6. Sign Up
7. Sign In
6. Sign in with Google



# Server

### **`GET Movie by Title`**

`Find Movies by Title using OMDb API`

Routes: http://localhost:3000/api/movies/:title

_Request Header_
```
Empty
```

_Request Body_
```
Empty
```
_Request Params_
```
{
    title: < Movie Title here >
}
```

_Response (200)_
```
{
    "Title": "Batman Forever",
    "Year": "1995",
    "imdbID": "tt0112462",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNDdjYmFiYWEtYzBhZS00YTZkLWFlODgtY2I5MDE0NzZmMDljXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
}
```

_Response (500) | Server Error_
```
{
    "messege": "Server failed to response"
}
```
-----

### **`GET Detail Movie by ID`**

`Find Detail Movies by ID using OMDb API`

Routes: http://localhost:3000/imdbid/movies/:id

_Request Header_
```
Empty
```

_Request Body_
```
Empty
```

_Request Params_
```
{
    id: < ID Title here >
}
```

_Response (200)_
```
{
    "Title": "Batman Forever",
    "Year": "1995",
    "Rated": "PG-13",
    "Released": "16 Jun 1995",
    "Runtime": "121 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "Joel Schumacher",
    "Writer": "Bob Kane (characters), Lee Batchler (story), Janet Scott Batchler (story), Lee Batchler (screenplay), Janet Scott Batchler (screenplay), Akiva Goldsman (screenplay)",
    "Actors": "Val Kilmer, Tommy Lee Jones, Jim Carrey, Nicole Kidman",
    "Plot": "Batman must battle former district attorney Harvey Dent, who is now Two-Face and Edward Nygma, The Riddler with help from an amorous psychologist and a young circus acrobat who becomes his sidekick, Robin.",
    "Language": "English",
    "Country": "USA, UK",
    "Awards": "Nominated for 3 Oscars. Another 10 wins & 22 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNDdjYmFiYWEtYzBhZS00YTZkLWFlODgtY2I5MDE0NzZmMDljXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "5.4/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "39%"
        },
        {
            "Source": "Metacritic",
            "Value": "51/100"
        }
    ],
    "Metascore": "51",
    "imdbRating": "5.4",
    "imdbVotes": "227,405",
    "imdbID": "tt0112462",
    "Type": "movie",
    "DVD": "27 Aug 1997",
    "BoxOffice": "N/A",
    "Production": "Warner Bros. Pictures",
    "Website": "N/A",
    "Response": "True"
}

```

_Response (500) | Server Error_
```
{
    "messege": "Server failed to response"
}
```
-----

### **`GET List Holiday Date`**

`Preview List Holiday Date using Calendarific API`

Routes: http://localhost:3000/api//holidays/:ISOcountry/:year

_Request Header_
```
{
    token: < User token is here >
}
```

_Request Body_
```
empty
```

_Request Params_
```
{
    ISOcountry: < ISO Country here >,
    year: < Year Here >
}
```

_Response (200)_
```
{
        "name": "Cuti Bersama",
        "description": "Cuti Bersama is a joint holiday in Indonesia",
        "country": {
            "id": "id",
            "name": "Indonesia"
        },
        "date": {
            "iso": "2020-05-26",
            "datetime": {
                "year": 2020,
                "month": 5,
                "day": 26
            }
        },
        "type": [
            "National holiday"
        ],
        "locations": "All",
        "states": "All"
    }
```

_Response (500) | Server Error_
```
{
    "messege": "Server failed to response"
}
```
-----

### **`GET Search Cinema`**

`Search Cinema using Google Search API`

Routes: http://localhost:3000/api/search_google/:search

_Request Header_
```
{
    token: < User token is here >
}
```

_Request Body_
```
Empty
```

_Request Params_
```
{
    search: < Search Input here >
}
```

_Response (200)_
```
{
    "title": "Disney Plus: Everything to know about Disney streaming amid ...",
    "snippet": "Mar 26, 2020 ... Disney Plus launched Tuesday in Western Europe with lowered bandwidth, and \nbig-screen movies are streaming early, including Frozen 2 and ...",
}
```

_Response (500) | Server Error_
```
{
    "messege": "Server failed to response"
}
```
-----

### **`POST Sign Up`**

`Sign Up using Localhost API`

Routes: http://localhost:3000/users/register

_Request Header_
```
Empty
```

_Request Body_
```
{
    "email": < Email user here >
    "username": < Username User here >
    "password": < Password User here >
}
```

_Response (200)_
```

{
    "id": 7,
    "email": "seven@mail.com"
    "username": "seven",
    "password": "$2a$10$zkS/tuLSqfZ3Wwpw5GAf7OhnCnb5JyVgFCEb3RptkbNyk/DIALQHG",
    "role": "user",
    "updatedAt": "2020-04-03T07:50:43.325Z",
    "createdAt": "2020-04-03T07:50:43.325Z"
}
```

_Response (400) | Bad Request_
```
{
    "messege": "Validation error: Username tidak boleh kosong"
}
```

_Response (500) | Server Error_
```
{
    "messege": "Server failed to response"
}
```
-----

### **`POST Sign In`**

`Sign In using Localhost API`

Routes: http://localhost:3000/users/login

_Request Header_
```
Empty
```

_Request Body_
```
{
    "username": < Username User here >,
    "password": < Password User here >
}
```

_Response (200)_
```
{
    "token": < Token User here >
}
```

_Response (400) | Bad Request_
```
{
    "message": "Username / Password salah"
}
```

_Response (500) | Server Error_
```
{
    "messege": "Server failed to response"
}
```
-----

### **`POST Sign In with Google`**

`Sign In / Sign Up using Google Sign In OAuth`

Routes: http://localhost:3000/users/google-login

_Request Header_
```
Empty
```

_Request Body_
```
{
    "token": < Token User here >
}
```

_Response (200)_
```
{
    "token": < Token User here >
}
```

_Response (500) | Server Error_
```
{
    "messege": "Server failed to response"
}
```
-----