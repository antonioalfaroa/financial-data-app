
Using the Financial Modeling Prep API, this app fetches and displays financial data for Apple Inc. Users can filter data by date range, sort it by specific fields, and view the data on both desktop and mobile devices. The app is fully responsive and features a scrollable table for smaller screens.

The link to the deployed app:

https://financial-data-app-self.vercel.app/

How to Run the Project
Clone the repository to your local machine.
Navigate to the project directory:

cd financial-data-app

Install the dependencies:

npm install

Start the development server:

npm start

This will run the app in development mode and open it in your default browser at http://localhost:3000.

If any issues are found compiling the project, such as missing dependencies, try installing the required package for web-vitals:

npm install web-vitals

How It Works

Fetching Data: The app fetches financial data from the Financial Modeling Prep API and displays it in a table.
Filtering by Date Range: You can filter the table by entering a start year and end year.
Sorting: A dropdown menu allows you to sort the data by: Date, Revenue or Net income.

The table updates in real time based on the selected sorting option.
The app is fully responsive, adapting to mobile and desktop devices. The table becomes scrollable on mobile devices, ensuring all data is shown.

