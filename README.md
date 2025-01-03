**Fake Store E-Commerce App**

Project Description:

This project is a mock e-commerce web application called Fake Store, built with React. It features a responsive and user-friendly interface, where users can search, filter, and view products dynamically. The app is styled with CSS for a modern and sleek design and uses the Fake Store API to fetch product data.

Features:

1. Dynamic Product Search and Filtering
* Users can search for products using the search bar, filtering results dynamically as they type.
* Filter options include sorting products by:

* Alphabetical Order (A-Z and Z-A).
* Price (Low to High and High to Low).
* Categories such as Jewelery, Electronics, Men's Clothing, and Women's Clothing.

2. Product Listing:

* Displays products in a card layout, showing:

* Product Image.
* Category.
* Title.
* Price.
* Products are dynamically fetched from the Fake Store API.

3. Reusable Components:

* Modular React components, making the app scalable and easier to maintain:

* TopOfNav: Includes the logo, search bar, and icons.
* NavBar: Navigation bar with essential links like Shop, Skills, Stories, etc.
* BottomOfNav: Highlights the store's purpose with a descriptive section.
* FilterDiv: Provides filtering and sorting options.
* ProductListing: Dynamically displays products with filtering and sorting applied.
* Footer: Contains quick links, contact information, and social media links.

4. Loading Animation:

* Implements a rotating circle animation for better UX during data fetching.

5. Responsive Design:

* Optimized for various screen sizes using flexible layouts and CSS styling.

Technologies Used:

Front-End

* React.js: For building reusable and dynamic components.
* CSS: Custom styles for a polished UI.

API

* Fake Store API: For fetching real-time product data.

External Fonts

* Google Fonts: Lilita One, Protest Strike, and Roboto for typography.

File Structure:

src/

├── components/

│   ├── TopOfNav.js          # Top navigation with logo and search bar

│   ├── NavBar.js            # Main navigation bar with categories

│   ├── BottomOfNav.js       # Informative section below the navigation

│   ├── FilterDiv.js         # Filter and sort options

│   ├── ProductListing.js    # Dynamic product listing

│   ├── Footer.js            # Footer with quick links and contact info

│   └── App.js               # Main entry point of the app

├── styles/

│   └── styles.css           # Global styles for the application

└── index.js                 # ReactDOM rendering

How to Run:

1. Clone the Repository:

* git clone https://github.com/your-repo/fake-store-app.git
* cd fake-store-app

2. Install Dependencies Ensure you have Node.js installed, then run:

* npm install

3. Start the Application Launch the development server:

* npm start

4. Access the App Open http://localhost:3000 in your browser.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
