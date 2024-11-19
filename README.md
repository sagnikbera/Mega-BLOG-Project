# Appwrite Blog Project

This project is a blogging platform built using modern web development technologies. It leverages **Appwrite** for backend services, providing user authentication, database management, and file storage. The platform is designed for simplicity and scalability, allowing users to sign up, log in, and manage blog posts effortlessly.

---

## 🚀 Features

### User Features
- **User Authentication**:
  - Register with an email and password.
  - Secure login and logout functionality.
- **Blog Management**:
  - Create and publish new blog posts.
  - Edit existing blog posts.
  - View published blog posts in a clean and responsive UI.

### Admin Features
- Manage all blog posts created by users.
- Delete or edit inappropriate or invalid blog posts.

---

## 🛠️ Tech Stack

### Frontend
- **React.js**: Component-based UI framework for building dynamic interfaces.
- **Tailwind CSS**: Utility-first CSS framework for responsive design.
- **React Router**: For seamless navigation and routing.

### Backend
- **Appwrite**:
  - **Authentication**: Handles user signup, login, and session management.
  - **Database**: Stores and retrieves blog post data using Appwrite's Document Database.
  - **Storage**: Manages file uploads (e.g., images for blogs).

### State Management
- **Redux**: Manages global application state, including user authentication and blog data.

---

## 📂 Project Structure


---

## 🛠️ Setup and Installation

Follow these steps to set up and run the project locally.

### Prerequisites
Before you begin, ensure you have the following installed and set up:
1. **Node.js**: Version 16 or higher is recommended. Download it from [Node.js Official Site](https://nodejs.org).
2. **Appwrite Server**: Install and configure an Appwrite instance. Refer to the [Appwrite Documentation](https://appwrite.io/docs) for setup details.
3. **Appwrite Project**:
   - Create a new project in your Appwrite console.
   - Set up the required services:
     - **Authentication**: Enable email/password-based authentication.
     - **Database**: Create a database and a collection for storing blog data.
     - **Storage**: Set up a bucket to store files like blog images.
4. **TinyMCE API Key**: Obtain an API key from [TinyMCE](https://www.tiny.cloud) to enable rich text editing.

### Installation Steps
1. **Clone the Repository**:  
   Clone this repository to your local machine using the following command:
   ```bash
   git clone https://github.com/void-57/Appwrite-Blog-Project.git
   cd Appwrite-Blog-Project

``` bash 
npm i
 ```

``` makefile
VITE_APPWRITE_URL="<Your Appwrite Endpoint>"
VITE_APPWRITE_PROJECT_ID="<Your Appwrite Project ID>"
VITE_APPWRITE_DATABASE_ID="<Your Appwrite Database ID>"
VITE_APPWRITE_COLLECTION_ID="<Your Appwrite Collection ID>"
VITE_APPWRITE_BUCKET_ID="<Your Appwrite Bucket ID>"
VITE_TINYMCE="<Your TinyMCE API Key>"
```

``` bash
npm run dev
```

