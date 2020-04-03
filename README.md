# `Movie List` 

Hacktiv8 Grup Project Phase 2

Developer: 
- Titanio Yudista
- Jessica Sugianto
- Hamzah Abdullah Mubarak

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
{
    "id": 2,
    "title": "Jalan dulu keluar Kostan",
    "description": "Tukang Mie ayamnya ga di dalem kamar, butuh effort dikit jalan laa",
    "status": false,
    "due_date": "2020-03-30"
}
```

_Response (200)_
```
{
    "todo": {
        "id": 2,
        "title": "Jalan dulu keluar Kostan",
        "description": "Tukang Mie ayamnya ga di dalem kamar, butuh effort dikit jalan laa",
        "status": false,
        "due_date": "2020-03-30",
        "updatedAt": "2020-03-30T09:51:22.676Z",
        "createdAt": "2020-03-30T09:51:22.676Z"
    }
}
```

_Response (400) | Bad Request_
```
{
    "messege": "Invalid Input, Please try again"
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
{
    "id": 2,
    "title": "Jalan dulu keluar Kostan",
    "description": "Tukang Mie ayamnya ga di dalem kamar, butuh effort dikit jalan laa",
    "status": false,
    "due_date": "2020-03-30"
}
```

_Response (200)_
```
{
    "todo": {
        "id": 2,
        "title": "Jalan dulu keluar Kostan",
        "description": "Tukang Mie ayamnya ga di dalem kamar, butuh effort dikit jalan laa",
        "status": false,
        "due_date": "2020-03-30",
        "updatedAt": "2020-03-30T09:51:22.676Z",
        "createdAt": "2020-03-30T09:51:22.676Z"
    }
}
```

_Response (400) | Bad Request_
```
{
    "messege": "Invalid Input, Please try again"
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

_Response (200)_
```
{
    "todo": {
        "id": 2,
        "title": "Jalan dulu keluar Kostan",
        "description": "Tukang Mie ayamnya ga di dalem kamar, butuh effort dikit jalan laa",
        "status": false,
        "due_date": "2020-03-30",
        "updatedAt": "2020-03-30T09:51:22.676Z",
        "createdAt": "2020-03-30T09:51:22.676Z"
    }
}
```

_Response (400) | Bad Request_
```
{
    "messege": "Invalid Input, Please try again"
}
```
-----

### **`GET Search Cinema`**

`Search Cinema using Google Search API`

Routes: http://localhost:3000/api//holidays/:ISOcountry/:year

_Request Header_
```
Empty
```

_Request Body_
```
{
    "id": 2,
    "title": "Jalan dulu keluar Kostan",
    "description": "Tukang Mie ayamnya ga di dalem kamar, butuh effort dikit jalan laa",
    "status": false,
    "due_date": "2020-03-30"
}
```

_Response (200)_
```
{
    "todo": {
        "id": 2,
        "title": "Jalan dulu keluar Kostan",
        "description": "Tukang Mie ayamnya ga di dalem kamar, butuh effort dikit jalan laa",
        "status": false,
        "due_date": "2020-03-30",
        "updatedAt": "2020-03-30T09:51:22.676Z",
        "createdAt": "2020-03-30T09:51:22.676Z"
    }
}
```

_Response (400) | Bad Request_
```
{
    "messege": "Invalid Input, Please try again"
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
    "id": 2,
    "title": "Jalan dulu keluar Kostan",
    "description": "Tukang Mie ayamnya ga di dalem kamar, butuh effort dikit jalan laa",
    "status": false,
    "due_date": "2020-03-30"
}
```

_Response (200)_
```
{
    "todo": {
        "id": 2,
        "title": "Jalan dulu keluar Kostan",
        "description": "Tukang Mie ayamnya ga di dalem kamar, butuh effort dikit jalan laa",
        "status": false,
        "due_date": "2020-03-30",
        "updatedAt": "2020-03-30T09:51:22.676Z",
        "createdAt": "2020-03-30T09:51:22.676Z"
    }
}
```

_Response (400) | Bad Request_
```
{
    "messege": "Invalid Input, Please try again"
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
    "id": 2,
    "title": "Jalan dulu keluar Kostan",
    "description": "Tukang Mie ayamnya ga di dalem kamar, butuh effort dikit jalan laa",
    "status": false,
    "due_date": "2020-03-30"
}
```

_Response (200)_
```
{
    "todo": {
        "id": 2,
        "title": "Jalan dulu keluar Kostan",
        "description": "Tukang Mie ayamnya ga di dalem kamar, butuh effort dikit jalan laa",
        "status": false,
        "due_date": "2020-03-30",
        "updatedAt": "2020-03-30T09:51:22.676Z",
        "createdAt": "2020-03-30T09:51:22.676Z"
    }
}
```

_Response (400) | Bad Request_
```
{
    "messege": "Invalid Input, Please try again"
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
    "id": 2,
    "title": "Jalan dulu keluar Kostan",
    "description": "Tukang Mie ayamnya ga di dalem kamar, butuh effort dikit jalan laa",
    "status": false,
    "due_date": "2020-03-30"
}
```

_Response (200)_
```
{
    "todo": {
        "id": 2,
        "title": "Jalan dulu keluar Kostan",
        "description": "Tukang Mie ayamnya ga di dalem kamar, butuh effort dikit jalan laa",
        "status": false,
        "due_date": "2020-03-30",
        "updatedAt": "2020-03-30T09:51:22.676Z",
        "createdAt": "2020-03-30T09:51:22.676Z"
    }
}
```

_Response (400) | Bad Request_
```
{
    "messege": "Invalid Input, Please try again"
}
```
-----