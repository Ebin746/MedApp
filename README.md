
# 💊 MedTrack API

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://img.shields.io/badge/version-1.0.0-blue.svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)](https://img.shields.io/badge/build-passing-brightgreen.svg)

A REST API for managing user authentication and medicine tracking.

## Features

*   🔧 **User Authentication**: Secure signup and login functionality using JWT.
*   💊 **Medicine Management**: Add, update, and delete medicine entries for users.
*   ⏰ **Event Scheduling**: Set dosage, time, and frequency for medication reminders.
*   🔒 **Data Security**: Password hashing with bcryptjs for secure user data storage.
*   🗄️ **Data Persistence**: Utilizes MongoDB for persistent data storage.
*   🚀 **Easy Setup**: Straightforward installation and configuration process.
*   ⚙️ **Customizable**: Easy update dosage ,time,frequency

## Tech Stack

| Category     | Technologies                                       | Documentation                                                                                               |
|--------------|----------------------------------------------------|-------------------------------------------------------------------------------------------------------------|
| Backend      | [Node.js][nodejs-url]                             | [https://nodejs.org/en/docs/](https://nodejs.org/en/docs/)                                                  |
| Framework    | [Express][express-url]                            | [https://expressjs.com/](https://expressjs.com/)                                                              |
| Database     | [MongoDB][mongodb-url]                            | [https://www.mongodb.com/docs/](https://www.mongodb.com/docs/)                                                |
| ORM          | [Mongoose][mongoose-url]                           | [https://mongoosejs.com/docs/](https://mongoosejs.com/docs/)                                                |
| Authentication| [jsonwebtoken][jsonwebtoken-url]                   | [https://www.npmjs.com/package/jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)                 |
| Password Hashing | [bcryptjs][bcryptjs-url]                           | [https://www.npmjs.com/package/bcryptjs](https://www.npmjs.com/package/bcryptjs)                         |
| Development  | [nodemon][nodemon-url]                            | [https://www.npmjs.com/package/nodemon](https://www.npmjs.com/package/nodemon)                             |
| Environment  | [dotenv][dotenv-url]                              | [https://www.npmjs.com/package/dotenv](https://www.npmjs.com/package/dotenv)                               |

## Quick Start

### Prerequisites

*   Node.js (v18 or higher)
*   MongoDB (running locally or accessible via a connection string)

### Installation

```bash
git clone [repo-url]
cd project/server
npm install # or yarn install
```

### Environment

Create a `.env` file in the `server/` directory with the following variables:

```env
PORT=3001
JWT_SECRET="exampleKeyforToken"
```

> [!NOTE]
>  The `JWT_SECRET` should be a long, random string for security.  Do not use the example provided in a production environment.

## Development

### Commands

```bash
npm start # Start development server
```

### Testing

The project does not contain explicit testing setup. To implement testing:

1.  Install testing libraries such as Jest and Supertest:

    ```bash
    npm install --save-dev jest supertest
    # or
    yarn add --dev jest supertest
    ```
2.  Create test files (e.g., `*.test.js`) to test API endpoints and functionality.

## API Reference

| Method | Endpoint             | Body                                      | Response                                                                         |
|--------|----------------------|-------------------------------------------|----------------------------------------------------------------------------------|
| POST   | /auth/signUp         | { phoneNumber: "string", password: "string" }      | 201 Created, { token: "string", user: { _id: "string", phoneNumber: "string" }} |
| POST   | /auth/login          | { phoneNumber: "string", password: "string" }      | 200 OK, { token: "string", user: { _id: "string", phoneNumber: "string" }}    |
| GET    | /medicine/:userid    | None                                        | 200 OK, { medicines: [ { _id: "string", medicineName: "string" } ] }          |
| POST   | /medicine/:userid    | { medicineName: "string", description: "string", image: "string" } | 201 Created, { message: "Medicine added", medicine: { _id: "string", medicineName: "string" } }|
| PUT    | /medicine/:id/:userid | { medicineName: "string", dosage: "string", time: ["string"], frequency: "string", description: "string", image: "string" } | 200 OK, { message: "Medicine updated", medicine: { _id: "string", medicineName: "string" } } |
| DELETE | /medicine/:id/:userid | None                                        | 200 OK, { message: "Medicine deleted" }                                        |
| PUT    | /medicine/event/:id/:userid | { dosage: "string", time: ["string"], frequency: "string" } | 200 OK, { message: "Medicine updated", medicine: { _id: "string"} }                                        |

## Deployment

A Dockerfile is not provided. A sample Dockerfile is shown below.

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --omit=dev
COPY . .
EXPOSE 3001
CMD ["node", "app.js"]
```

To build and run the Docker container:

```bash
docker build -t medtrack-api .
docker run -p 3001:3001 medtrack-api
```

## Contributing

1.  Create a new branch with a descriptive name: `feat/new-feature` or `bugfix/issue-123`.
2.  Follow conventional commit message standards.  For example: `feat: Add user authentication`.
3.  Submit a pull request with a clear description of the changes.

[nodejs-url]: https://nodejs.org/en/docs/
[express-url]: https://expressjs.com/
[mongodb-url]: https://www.mongodb.com/docs/
[mongoose-url]: https://mongoosejs.com/docs/
[jsonwebtoken-url]: https://www.npmjs.com/package/jsonwebtoken
[bcryptjs-url]: https://www.npmjs.com/package/bcryptjs
[nodemon-url]: https://www.npmjs.com/package/nodemon
[dotenv-url]: https://www.npmjs.com/package/dotenv
```
