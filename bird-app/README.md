# Bird App

A React application that displays information about different bird species, now with a SQLite database backend.

## Project Structure

- `src/App.jsx`: The main React component that displays bird information
- `src/database.js`: Database setup and queries using better-sqlite3
- `src/server.js`: Express server that provides API endpoints for the frontend

## Database Schema

The application uses a SQLite database with the following tables:

1. **bird_groups**: Stores different categories of birds
   - `id`: Primary key
   - `name`: Group name (e.g., "Songbirds")

2. **birds**: Stores basic bird information
   - `id`: Primary key
   - `name`: Bird name
   - `scientific_name`: Scientific name
   - `family`: Bird family
   - `order_name`: Taxonomic order
   - `group_id`: Foreign key to bird_groups
   - `image_path`: Path to bird image
   - `sound_path`: Path to bird sound

3. **specific_info**: Stores specific information about birds
   - `id`: Primary key
   - `bird_id`: Foreign key to birds
   - `habitat`: Habitat description
   - `diet`: Diet description

4. **general_info**: Stores general descriptions about birds
   - `id`: Primary key
   - `bird_id`: Foreign key to birds
   - `description`: General description

## Installation

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```

## Running the Application

To start both the React frontend and Express backend concurrently:

```
npm run start
```

This will start:
- The React development server on port 5173 (default Vite port)
- The Express API server on port 3001

## API Endpoints

- `GET /api/bird-groups`: Get all bird groups
- `GET /api/birds/group/:groupId`: Get birds by group ID
- `GET /api/birds/group-name/:groupName`: Get birds by group name
- `GET /api/bird/:id`: Get bird data by ID
- `GET /api/bird/name/:name`: Get bird data by name
- `GET /api/group/:id/name`: Get group name by ID
