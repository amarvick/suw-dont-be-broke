This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Dont Be Broke SWEDU Team Frontend

ReactJS Front-End of the "Don't be Broke" web application which helps young adults retrieve a financial education

## Setup

1) Clone source with ```git clone https://github.com/josephkniest/suw-dont-be-broke-backend.git```
2) Grab dependencies with ```npm install```

3) Start with ```npm start```

## Web Service Spec

#### Authorization POST http://172.17.5.252/api/authorize

###### Send {"username": "user1@gmail.com", "password": "user1 password"}

###### Get back
- 200 {"message": "authorized"}
- 403 {"message": "There is no user with username user0@gmail.com"}
- 403 {"message": "user1@gmail.com password was entered incorrectly"}
