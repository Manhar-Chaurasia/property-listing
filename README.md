# Getting Started with HomeHunt React App

## Features
- Search properties by name
- Filter properties using a price range slider
- Paginated property listings
- Mobile-friendly UI with Tailwind CSS
- Modal popup for property details

### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

##Challenges & Solutions
- Properties Showed Up Without Filtering
Issue: On first reload, some properties were appearing even before applying filters.
Fix: Set a default maxPrice = 15000 in PropertyContext.js to ensure only relevant properties are displayed.

- Pagination Wasn't Working Properly
Issue: Pagination was added, but the PropertyContext.js didn't handle currentPage updates correctly.
Fix: Introduced currentPage and totalPages in the context so the listings update when changing pages.

- Modal Wasn’t Centered
Issue: The modal wasn’t appearing at the center of the screen.
Fix: Used flexbox + absolute positioning in Tailwind to make it properly centered.

**User's data who booked are saving in local storage for further use or development**


