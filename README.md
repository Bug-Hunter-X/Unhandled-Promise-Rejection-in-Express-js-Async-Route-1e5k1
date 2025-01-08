# Unhandled Promise Rejection in Express.js Async Route

This repository demonstrates a common error in Express.js applications: unhandled promise rejections in asynchronous routes.  When an asynchronous operation within a route handler throws an error and isn't properly caught, the server can crash.  This example showcases the problem and its solution.

## Bug

The `bug.js` file contains an Express.js server with a route that performs an asynchronous operation.  If this operation fails, the error is not caught, resulting in an unhandled promise rejection and server crash.

## Solution

The `bugSolution.js` file provides the corrected code.  It includes a `.catch()` block to handle potential errors gracefully, preventing the server from crashing.  The error is logged to the console, and a suitable response (e.g., an error message) is sent to the client.