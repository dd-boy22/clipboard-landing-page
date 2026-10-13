# Insure Landing Page — Frontend Mentor

A responsive landing page for an insurance company, built with React and Tailwind CSS. This project recreates the Insure landing page design from Frontend Mentor, with a focus on responsive layouts, reusable components, and interactive navigation.

## Table of Contents

- [Overview](#overview)
  - [About the Project](#about-the-project)
  - [Features](#features)
  - [Screenshots](#screenshots)
  - [Links](#links)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Implementation Highlights](#implementation-highlights)
- [What I Learned](#what-i-learned)
- [Challenges and Solutions](#challenges-and-solutions)
- [AI Collaboration](#ai-collaboration)
- [Future Improvements](#future-improvements)
- [Getting Started](#getting-started)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### About the Project

This project is my implementation of the [Insure Landing Page challenge](https://www.frontendmentor.io/challenges/insure-landing-page-uTU68JV8) on Frontend Mentor.

The goal was to translate a provided design into a functional, responsive React application. Rather than relying on a static page, I built the interface using reusable React components and Tailwind CSS utility classes, while adapting the layout to different screen sizes.

The project provided practical experience with component composition, responsive styling, positioning, layering, and interactive UI behaviour.

### Features

- Responsive layout for mobile and desktop screens.
- Mobile navigation menu with hamburger and close icons.
- Desktop navigation displayed at larger screen sizes.
- Reusable button component with customizable styling.
- Responsive hero section with decorative SVG patterns.
- Feature section highlighting the company's benefits.
- Call-to-action section with responsive background patterns.
- Footer containing company navigation links and social media icons.
- Hover states for interactive elements.
- Mobile-first styling using Tailwind CSS.

### Screenshots

Add screenshots of the completed application here.

**Desktop**

![Desktop screenshot](./screenshots/desktop-preview.png)

**Mobile**

![Mobile screenshot](./screenshots/mobile-preview.png)

> Replace these image paths with your actual screenshot filenames, or remove this section until the screenshots are available.

### Links

- **Frontend Mentor Challenge:** [Insure Landing Page](https://www.frontendmentor.io/challenges/insure-landing-page-uTU68JV8)
- **Live Demo:** [Add your deployed site URL]
- **Solution Repository:** [Add your GitHub repository URL]
- **Frontend Mentor Solution:** [Add your Frontend Mentor solution URL]

## Tech Stack

- **React** — Component-based UI development.
- **Vite** — Development server and build tooling.
- **Tailwind CSS** — Responsive styling and utility-first CSS.
- **JavaScript (ES6+)** — Component logic and interactive navigation.
- **HTML5** — Semantic page structure.
- **SVG assets** — Icons, logos, and decorative background patterns.
- **Git and GitHub** — Version control and project hosting.

## Project Structure

The application is organized into React components, allowing individual sections of the landing page to be developed and maintained separately.

The main interface includes:

- **Navbar** — Handles desktop navigation and the mobile menu.
- **Hero** — Introduces the insurance service with the main heading, supporting text, and imagery.
- **Feature section** — Presents the key benefits of the service.
- **Call-to-action section** — Encourages visitors to learn more about the company.
- **Footer** — Contains company links, informational links, and social media icons.
- **Button component** — Provides reusable button markup with customizable Tailwind CSS classes.

The exact file structure may vary depending on the final organization of the project.

## Implementation Highlights

### Component-Based Architecture

I divided the interface into reusable React components instead of placing the entire page in one component. This keeps the page easier to navigate and allows individual sections to be developed and adjusted independently.

The reusable button component also allows different sections to apply their own styling without duplicating the underlying button markup.

### Responsive Navigation

The navigation adapts to the available screen width:

- On smaller screens, a hamburger button toggles the mobile navigation.
- When the menu is open, the hamburger icon changes to a close icon.
- On larger screens, the desktop navigation is displayed and the mobile controls are hidden.

React's `useState` hook manages the open and closed states of the mobile menu.

### Mobile-First Responsive Design

I used Tailwind CSS responsive utilities to establish the mobile layout first and progressively adjust the design for larger screens.

Classes such as `lg:hidden`, `hidden lg:flex`, and `lg:grid-cols-2` help control the visibility and arrangement of elements at different breakpoints.

### Positioning and Layering

The design includes decorative SVG patterns that overlap or sit behind other elements. I used CSS positioning utilities such as `relative` and `absolute`, along with stacking order utilities, to control their placement.

I also used `pointer-events-none` on decorative images where necessary so that background artwork would not interfere with interactive elements.

### Reusable Styling

Tailwind CSS utility classes provide consistent spacing, typography, colors, borders, and responsive behaviour throughout the application. The reusable button component accepts custom classes to accommodate different visual treatments across the page.

## What I Learned

### 1. Building Reusable React Components

I gained more practical experience breaking a page into components with clear responsibilities. I also learned how reusable components can accept props to support different styling requirements.

### 2. Managing UI State with `useState`

The mobile navigation gave me practical experience managing interactive UI state in React. I used `useState` to toggle the menu between open and closed states and conditionally render the appropriate icon.

### 3. Working with Tailwind CSS Breakpoints

I developed a better understanding of mobile-first styling and how responsive prefixes can change an element's layout or visibility at specific screen widths.

### 4. Understanding CSS Positioning

Working with the decorative patterns and navigation menu strengthened my understanding of how `relative`, `absolute`, and `fixed` positioning affect an element's placement.

I also learned to distinguish between elements that should remain in normal document flow and those that need to be positioned independently.

### 5. Managing Stacking Contexts and Pointer Events

Layering decorative images over content introduced practical challenges involving stacking order and click interactions. I learned how `z-index` and `pointer-events-none` can help control the relationship between decorative elements and interactive components.

### 6. Debugging Layout Issues

Rather than treating unexpected layouts as purely styling problems, I learned to investigate the surrounding DOM structure, positioning context, responsive classes, and element layering to identify the underlying cause.

## Challenges and Solutions

### Mobile Navigation Behaviour

One challenge was separating the mobile menu's visibility from the hamburger button's visibility. When both were placed inside the same container, hiding the menu also hid the hamburger.

I addressed this by keeping the mobile toggle outside the off-screen menu container, allowing the button to control the menu independently.

### Decorative Background Patterns

Some SVG patterns overlapped other elements and interfered with their appearance or interaction.

I adjusted their positioning, stacking order, and pointer-event behaviour so the decorative artwork could remain in place without blocking buttons or navigation controls.

### Responsive Layout Adjustments

Elements that looked balanced on mobile did not always maintain the same proportions on larger screens. I used responsive Tailwind classes to adjust alignment, spacing, typography, and layout at larger breakpoints.

These adjustments helped maintain the intended design across different viewport sizes.

## AI Collaboration

I used ChatGPT as a development assistant during this project, primarily to help investigate bugs, understand React and Tailwind CSS behaviour, and evaluate possible solutions to layout and positioning issues.

My workflow involved implementing the interface, testing it in the browser, identifying unexpected behaviour, and using targeted explanations to understand and resolve the underlying problems.

AI assistance supported the debugging and learning process, while the project implementation remained part of my hands-on development practice.

## Future Improvements

- Refine accessibility by reviewing keyboard navigation, focus states, and semantic HTML.
- Add appropriate navigation links and ensure all interactive elements behave as expected.
- Test the layout across additional viewport sizes and browsers.
- Review image sizing and production build performance.
- Deploy the project and include a live demo.
- Continue improving component organization and maintainability as I build more complex React applications.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- npm, which is included with Node.js
- Git (optional, for version control)

### Installation

1. Clone the repository:

   ```bash
   git clone YOUR_REPOSITORY_URL
   ```

2. Navigate into the project directory:

   ```bash
   cd YOUR_PROJECT_DIRECTORY
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL displayed in your terminal to view the application.

### Production Build

To create an optimized production build, run:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Author

- **GitHub:** [Add your GitHub profile](YOUR_GITHUB_PROFILE_URL)
- **Frontend Mentor:** [Add your Frontend Mentor profile](YOUR_FRONTEND_MENTOR_PROFILE_URL)

## Acknowledgments

- [Frontend Mentor](https://www.frontendmentor.io/) for providing the design challenge and an opportunity to practise building realistic user interfaces.
- [React](https://react.dev/) for the component-based UI library.
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first styling framework.
- [Vite](https://vite.dev/) for the development tooling.