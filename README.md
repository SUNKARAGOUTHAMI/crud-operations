2. Core Tasks & API Endpoints
You will use the JSONPlaceholder API, a free fake online REST API for testing and prototyping.
API Base URL: https://jsonplaceholder.typicode.com
2.1. Fetch Users (READ)
Task: Fetch a list of users and display them in a table or a list.
Endpoint: GET /users
Display: Each user entry must show at least their Name, Email, and Phone Number.
2.2. Create User (CREATE)
Task: Implement a form to add a new user. Submitting the form should send the new user's data to the API.
Endpoint: POST /users
Note: The API will simulate the creation and return the object you sent, but it won't be permanently stored on the server. You should add the newly "created" user to your application's state to make it appear in the user list.
2.3. Update User (UPDATE)
Task: Add an "Edit" button to each user. Clicking it should lead to a form pre-filled with that user's data. After editing, submitting the form should update the user's information.
Endpoint: PUT /users/:id (e.g., /users/1)
Note: The API will simulate the update. You should update the user's data in your application's state to reflect the changes immediately.
2.4. Delete User (DELETE)
Task: Add a "Delete" button to each user. Clicking it should remove the user.
Endpoint: DELETE /users/:id (e.g., /users/1)
Note: The API will simulate the deletion. You should remove the user from your application's state so they no longer appear in the list.
3. Technical Requirements
3.1. Framework and Core Concepts
React: Your application must be built with React.
Functional Components & Hooks: You must use functional components and React Hooks (useState, useEffect, useParams, etc.). Class components are not allowed.
3.2. Routing
react-router-dom: Use this library to manage navigation. You should have distinct routes for:
The main user list (e.g., /).
Creating a new user (e.g., /add-user).
Editing an existing user (e.g., /edit-user/:id).
3.3. Styling and Responsiveness
CSS: The application must be well-styled and visually appealing. You can use plain CSS, CSS Modules, a preprocessor like SASS, or a framework like Tailwind CSS or Material-UI.
Responsiveness: The layout must be fully responsive and function seamlessly on both desktop and mobile devices.
3.4. Error Handling & User Feedback
API Errors: If an API call fails, the user must be notified with a clear error message (e.g., "Failed to fetch users. Please try again.").
User Feedback: Provide feedback for actions. For example, show a confirmation message after a user is successfully created, updated, or deleted.
3.5. Code Quality
Comments: Your code should be well-commented to explain complex logic.
Structure: Maintain a clean and organized project structure. A suggested structure is provided below.
4. Advanced Feature (Bonus)
Loading States: Implement a loading indicator, such as a spinner or a skeleton screen, that displays while data is being fetched from the API. This significantly improves the user experience.
TypeScript: Convert your project to TypeScript to add static typing, improve code quality, and reduce runtime errors.
5. Example Project Structure
/src
|-- /api
|   |-- userService.js      # Functions for all API calls (e.g., getUsers, createUser)
|-- /components
|   |-- /common             # Reusable components
|   |   |-- Spinner.jsx
|   |   |-- ErrorMessage.jsx
|   |-- /users
|   |   |-- UserList.jsx
|   |   |-- UserItem.jsx
|   |   |-- UserForm.jsx
|-- /pages
|   |-- HomePage.jsx        # Displays the main user list
|   |-- AddUserPage.jsx     # Contains the form for creating a user
|   |-- EditUserPage.jsx    # Contains the form for editing a user
|-- /hooks
|   |-- useUsers.js         # (Optional) Custom hook to manage user state and API calls
|-- App.jsx                 # Main component with react-router setup
|-- index.js                # Application entry point
|-- index.css               # Global styles


​
6. Getting Started & Tooling
Initialize Project:
# For JavaScript
npx create-react-app user-management-app

# For TypeScript (Bonus)
npx create-react-app user-management-app --template typescript
​
Navigate to Directory:
cd user-management-app
​
Install Dependencies:
Axios: A promise-based HTTP client for making API requests.
React Router: For handling routing.
npm install axios react-router-dom# Getting Started with Create React App

