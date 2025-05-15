# E-commerce App: Alice Assignment

#Demo:


https://github.com/user-attachments/assets/112fc1f7-adf4-43ff-9d7f-4dd61b8918ad



## Project Overview

This project is a mobile e-commerce application built with React Native and Expo. The app connects to the Fake Store API to display products, allows users to view product details, add items to a cart, and manage their shopping experience.

## Development Approach

When I started this assignment, I focused on building an app that not only meets the requirements but also provides a great user experience. Here's how I approached the development:

### Initial Setup

I used Expo for rapid development and easy testing across devices. The project structure was set up with TypeScript for type safety, which helped prevent many potential runtime errors during development.

### Technical Decisions

1. **Navigation Strategy**: 
   - I chose to use stack-based navigation rather than tab navigation for a more intuitive shopping flow
   - Custom headers were implemented for each screen to maintain consistent UX
   - Back buttons were added for easier navigation between screens

2. **State Management**:
   - Used React Context API for global cart state management
   - Implemented persistent storage with SecureStore to preserve the cart between app sessions
   - Created a centralized cart service with well-defined operations (add, remove, update quantity)

3. **API Integration**:
   - Created a service layer for API calls to separate concerns
   - Added proper error handling and loading states
   - Implemented efficient data fetching with minimal API calls

4. **UI/UX Enhancements**:
   - Used SafeAreaView to handle device notches and status bars properly
   - Added visual feedback during interactions (loading states, animations)
   - Consistent styling across all screens with shared components
   - Responsive design that works well on different screen sizes

5. **Performance Considerations**:
   - Optimized list rendering with FlatList
   - Minimized re-renders with proper state management
   - Image optimization for faster loading

## Key Features

- **Product List**: Grid view of products with essential information
- **Product Details**: Comprehensive view with image, description, price, and ratings
- **Shopping Cart**: Full cart functionality with quantity adjustments and total calculation
- **Persistent Storage**: Cart data is preserved between app sessions
- **Error Handling**: Graceful error handling with user feedback
- **Responsive Design**: Adapts to different screen sizes and orientations

## Design Decisions for UX Improvement

For the shopping experience, I made several design decisions to enhance usability:

1. **Custom Headers**: Added custom headers with cart icons that show the current number of items
2. **Visual Hierarchy**: Used clear visual hierarchy to emphasize important information
3. **Immediate Feedback**: Added loading indicators and animations for user actions
4. **Streamlined Navigation**: Simplified the navigation flow to make shopping intuitive
5. **Cart Management**: Made it easy to adjust quantities or remove items from the cart
6. **Error Recovery**: Provided clear error messages and recovery options

## Technical Implementation

The app was built using:

- React Native with Expo SDK 53
- TypeScript for type safety
- React Context API for state management
- Expo Router for navigation
- Expo SecureStore for persistent storage
- React Native's core components with custom styling

## Future Enhancements

If I had more time, I would add:

- User authentication
- Product filtering and search
- Checkout process
- Order history
- Product recommendations
- Unit and integration tests

## How to Run the Project

1. Clone the repository
2. Install dependencies with `npm install`
3. Start the development server with `npx expo start`
4. Scan the QR code with the Expo Go app or run on an emulator

## Conclusion

This project demonstrates my approach to building a production-ready mobile application with React Native. I focused on creating a clean, maintainable codebase with a great user experience, while meeting all the requirements of the assignment.
