# CloudQuill

CloudQuill is a web application that allows users to create, manage, and store notes on the cloud. It is built using the MERN stack (MongoDB, Express.js, React.js, Node.js) and provides a seamless user experience for note-taking.

## Features

- **User Authentication**: Secure user registration and login using JWT (JSON Web Tokens).
- **Create Notes**: Users can create new notes with a title, description, and tags.
- **View Notes**: Users can view all their notes in a structured format.
- **Edit Notes**: Users can edit existing notes.
- **Delete Notes**: Users can delete notes they no longer need.
- **Responsive Design**: The application is fully responsive and works on all devices.

## Installation

### Prerequisites

- Node.js
- MongoDB

### Backend Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/cloudquill.git
    cd cloudquill/backend
    ```

2. Install backend dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the `backend` directory and add your environment variables:
    ```env
    JWT_SECRET=your_jwt_secret
    ```

4. Start the backend server:
    ```bash
    npm run start
    ```

### Frontend Setup

1. Navigate to the frontend directory:
    ```bash
    cd ../
    ```

2. Install frontend dependencies:
    ```bash
    npm install
    ```

3. Start the frontend development server:
    ```bash
    npm run start
    ```

### Running Both Frontend and Backend

To run both the frontend and backend concurrently, use the following command:
```bash
npm run both
```

## Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. Register a new user or log in with existing credentials.
3. Start creating, viewing, editing, and deleting notes.

## API Endpoints

### Authentication

- **Create a new user**: `POST /api/auth/cruser`
- **User login**: `POST /api/auth/login`
- **Get user data**: `POST /api/auth/guser`

### Notes

- **Fetch all notes**: `GET /api/notes/fnotes`
- **Add a note**: `POST /api/notes/anote`
- **Update a note**: `PUT /api/notes/unote/:id`
- **Delete a note**: `DELETE /api/notes/dnote/:id`

## Technologies Used

- **Frontend**: React.js, Bootstrap, React-Bootstrap, React-Router-Dom, React-Icons
- **Backend**: Node.js, Express.js, MongoDB, Mongoose, JWT, Bcrypt.js
- **Development Tools**: Concurrently, Nodemon

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.

## Acknowledgements

- [Create React App](https://create-react-app.dev/)
- [Bootstrap](https://getbootstrap.com/)
- [React-Bootstrap](https://react-bootstrap.github.io/)
- [MongoDB](https://www.mongodb.com/)
- [Express.js](https://expressjs.com/)
- [Node.js](https://nodejs.org/)
