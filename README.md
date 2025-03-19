# E-commerce React Application

An online shop application built with React, TypeScript, and Tailwind CSS. This project focuses on performance, design quality, and responsiveness.

## Features

- User details display
- Product listing with search and filter functionality
- Add to cart feature
- Shopping cart page
- Increase/decrease and remove products from cart

## Tech Stack

- React (Create React App)
- TypeScript
- Tailwind CSS
- Fake Store API

## Performance Optimization

This project implements several performance optimizations including:

- Minimized component re-renders using React's memoization techniques (useMemo, useCallback, memo)
- Efficient state management with Context API
- Optimized build configuration

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/sepehrSharafi/e-commerce-app.git
   cd e-commerce-app
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode with Tailwind in watch mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run lint`

Checks for ESLint errors throughout the project.

### `npm run build`

Builds the app for production to the `build` folder, including Tailwind CSS optimization.

## API Reference

This project uses the [Fake Store API](https://fakestoreapi.com/docs) for product and user data.

Primary endpoints:

- `GET /products` - Fetch all products
- `GET /users/1` - Fetch user details

Note: You may need a VPN to access the API.

## Project Structure

```
.
├── .eslintrc.js
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
├── tailwind.config.js
├── tsconfig.json
├── public/
│   ├── favicon.png
│   ├── index.html
│   └── manifest.json
└── src/
    ├── App.css
    ├── App.tsx
    ├── index.css
    ├── index.tsx
    ├── output.css
    ├── react-app-env.d.ts
    ├── api/
    │   └── index.ts
    ├── components/
    │   └── common/
    │       ├── CartItem/
    │       │   └── CartItem.tsx
    │       ├── Layout/
    │       │   └── Layout.tsx
    │       ├── Navbar/
    │       │   └── Navbar.tsx
    │       ├── ProductCard/
    │       │   └── ProductCard.tsx
    │       ├── UserModal/
    │       │   └── UserModal.tsx
    ├── Images/
    │   └── Logo.webp
    ├── pages/
    │   ├── Cart/
    │   │   └── Cart.tsx
    │   └── Products/
    │       └── Product.tsx
    └── store/
        ├── CartContext.tsx
        └── UserContext.tsx
```

## Architecture

The application follows a clean architecture approach:

- **API**: Handles all external API calls to the Fake Store API
- **Components**: Contains reusable UI components
  - **Common**: Shared components used across multiple pages
    - **CartItem**: Individual cart item component
    - **Layout**: Main application layout
    - **Navbar**: Top navigation bar
    - **ProductCard**: Individual product display card
    - **UserModal**: User details modal
- **Pages**: Contains the main page components
  - **Cart**: Shopping cart page
  - **Products**: Product listing page
- **Store**: Manages application state using React Context API
  - **CartContext**: Manages cart state and operations
  - **UserContext**: Manages user state and authentication

## Development Workflow

This project follows a structured Git workflow:

1. Create feature branches with descriptive names
2. Make commits with proper messages
3. Create pull requests with detailed comments
4. Merge pull requests to the main branch

## Responsive Design

The application is fully responsive and optimized for all device sizes using Tailwind CSS.

## Author

Sepehr Sharafi

## License

This project is licensed under the MIT License.
