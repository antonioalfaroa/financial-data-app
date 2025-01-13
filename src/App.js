import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [originalData, setOriginalData] = useState([]); 
  const [data, setData] = useState([]); 
  const [loading, setLoading] = useState(true);

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  
  useEffect(() => {
    const filteredData = originalData.filter((item) => {
      const year = new Date(item.date).getFullYear();
      return (!startDate || year >= startDate) && (!endDate || year <= endDate);
    });
    setData(filteredData);
  }, [startDate, endDate, originalData]); 

  const sortBy = (key) => {
    const sortedData = [...data].sort((a, b) => (a[key] > b[key] ? 1 : -1));
    setData(sortedData); 
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://financialmodelingprep.com/api/v3/income-statement/AAPL?period=annual&apikey=PHH9Afck4nJEXlzZ8MHiodTjCE0IB9UI'
        );
        setOriginalData(response.data); 
        setData(response.data); 
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-center pb-5">Financial Data</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300 text-sm">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2">Date</th>
              <th className="border border-gray-300 p-2">Revenue</th>
              <th className="border border-gray-300 p-2">Net Income</th>
              <th className="border border-gray-300 p-2">Gross Profit</th>
              <th className="border border-gray-300 p-2">EPS</th>
              <th className="border border-gray-300 p-2">Operating Income</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td className="border border-gray-300 p-2">{item.date}</td>
                <td className="border border-gray-300 p-2">{item.revenue}</td>
                <td className="border border-gray-300 p-2">{item.netIncome}</td>
                <td className="border border-gray-300 p-2">{item.grossProfit}</td>
                <td className="border border-gray-300 p-2">{item.eps}</td>
                <td className="border border-gray-300 p-2">{item.operatingIncome}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mb-4 flex flex-col sm:flex-row p-10">
        <label className="flex flex-col sm:mr-4">
          <span className="mb-2 sm:mb-0">Start Year:</span>
          <input
            type="number"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="border p-2"
          />
        </label>
        <label className="flex flex-col mt-4 sm:mt-0">
          <span className="mb-2 sm:mb-0">End Year:</span>
          <input
            type="number"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="border p-2"
          />
        </label>
      </div>

      <div className="mb-4">
        <label htmlFor="sort" className="mr-2">
          Sort By:
        </label>
        <select
          id="sort"
          className="border p-2"
          onChange={(e) => sortBy(e.target.value)}
        >
          <option value="date">Date</option>
          <option value="revenue">Revenue</option>
          <option value="netIncome">Net Income</option>
        </select>
      </div>
    </div>
  );
}

export default App;
