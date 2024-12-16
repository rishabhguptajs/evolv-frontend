# **Habit Tracker App**

## **Overview**
The Habit Tracker App is a powerful tool designed to help users establish and maintain positive habits, achieve their goals, and visualize their progress with gamified elements. It provides an engaging and user-friendly experience through a combination of habit tracking, goal management, AI-powered insights, and gamification features.

---

## **Features**

### **Frontend Features**
- **User Authentication**
  - JWT-based sign-up, login, and password recovery.
  - Persistent user sessions with secure local storage.
  - Responsive login/register UI with form validation.

- **Habit Tracker**
  - Add, edit, update, and delete habits.
  - Track habits on a daily/weekly basis.
  - Visual indicators for completed habits and streaks.

- **Goal Management**
  - Create, update, and delete personal goals.
  - Track progress with milestones and percentage completion.
  - Goal summary view with analytics.

- **Gamification**
  - Earn badges for achievements (e.g., streaks, completed goals).
  - Points system for rewarding consistency and activity.
  - Level-up mechanism based on accumulated points.
  - Profile section showcasing badges, points, and levels.

- **Visualization & Analytics**
  - Historical data visualization using charts and graphs.
  - Habit streak trends and goal completion rates.
  - AI-driven future projections of habits and goals.

- **Notifications**
  - Habit reminders and streak alerts.
  - Milestone achievements notifications.
  - Daily motivational messages.

- **Responsive Design**
  - Fully responsive for both mobile and desktop devices.
  - Accessible and user-friendly UI with dark mode support.

---

### **Backend Features**
- **User Management**
  - User authentication using JWT.
  - Secure password hashing (bcrypt).
  - API routes for user registration, login, and profile updates.

- **Habit Management**
  - CRUD operations for habits.
  - Habit streaks tracking and auto-reset for missed days.
  - APIs to fetch and update habit data.

- **Goal Management**
  - CRUD operations for goals.
  - APIs for goal progress updates and milestone tracking.
  - Data validation for goal creation and updates.

- **Gamification System**
  - Badge system with predefined criteria.
  - Points and leveling mechanism based on user activities.
  - APIs for fetching user achievements, points, and levels.

- **Notifications**
  - Scheduled reminders using `node-cron`.
  - APIs for managing notification preferences.
  - Integration with email services for habit and milestone alerts.

- **Visualization**
  - Backend logic for analytics and AI-powered habit projections.
  - APIs serving historical and projection data for frontend visualization.

---

## **Project Structure**

### **Frontend**
- **Framework**: Next.js with TypeScript.
- **State Management**: Context API or Redux (if implemented).
- **UI Libraries**: TailwindCSS for styling and responsiveness.


### **Backend**
- **Framework**: Node.js with Express.
- **Database**: MongoDB.