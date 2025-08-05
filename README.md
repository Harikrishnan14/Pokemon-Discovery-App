# Getting Started
# Initial Setup:

1. **Install Node.js :** Node.js is an open-source, cross-platform JavaScript runtime environment. You can download Node.js from the official website at https://nodejs.org/en/download/ or use your system's package manager.

   Check Node.js and npm Installation:
   Open a terminal ( or command prompt on Windows ) and run the following command to ensure Node.js is installed correctly:

   ![Image](https://github.com/user-attachments/assets/5b6a1362-a3a7-4997-a2ef-9d83be414541)

   [ NOTE : npm comes with Node.js by default, you don't have to install it separately ]

2. **Clone or Download the Code :**

   Clone the repository using the following command:
   ### `git clone https://github.com/Harikrishnan14/Pokemon-Discovery-App.git`

   Then, navigate into the project folder:
   ### `cd Pokemon-Discovery-App`

   Or alternatively, download the ZIP file from GitHub and extract it.

5. **Install Dependencies :**
   1. Open the terminal ( or command prompt on Windows ) ( or if you are using VS Code, you can use its terminal ) from the root folder and run the following command to install all the dependencies needed to run the application [ Don't close this terminal we will be using this later] :
      ### `npm i`
      
# Starting the Application:

1. On the terminal which you used to install the dependencies for the application, run the following command to start the application :
   ### `npm run dev`
   
2. After this, Go to 'http://localhost:5173'
3. If you want to see the hosted website, Go to 'https://pokemon-discovery-app-ruddy.vercel.app'

# Packages Used:

1. **Vite :** A fast build tool and development server for modern web projects. It provides instant server start, lightning-fast hot module replacement (HMR), and optimized production builds.
2. **Tailwind CSS :** Used for responsive design. It offers utility classes to quickly style elements without writing custom CSS from scratch. It's flexible and easy to customize.
3. **react-router-dom :** A standard library for routing in React applications. It enables navigation between different components/pages while keeping the UI in sync with the URL.
4. **TanStack Query :** A powerful data-fetching and state management library for React. It simplifies fetching, caching, syncing, and updating server state in your application.
5. **Dnd Kit :** A modern drag-and-drop toolkit for React. It provides accessible and performant drag-and-drop interactions with full control over sorting, movement, and drop behavior. Great for creating sortable lists, dashboards, or custom interactions.