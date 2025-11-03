import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import testData from '../data/test_data.json';
import { useLocalStorage } from '../hooks/useLocalStorage.js';

const AppContext = createContext({});
const API_URL = 'https://asylum-be.onrender.com';

/**
 * TODO: Ticket 2:
 * - Use axios to fetch the data
 * - Store the data
 * - Populate the graphs with the stored data
 */
const useAppContextProvider = () => {
  const [graphData, setGraphData] = useState(testData);
  const [isDataLoading, setIsDataLoading] = useState(false);

  useLocalStorage({ graphData, setGraphData });

  const getFiscalData = async () => {
    const fiscalRes = await axios.get(`${API_URL}/fiscalSummary`);
    console.log(fiscalRes.data)
    const fiscalResData = fiscalRes.data;
    return fiscalResData;
  };

  const getCitizenshipResults = async () => {
    const citizenRes = await axios.get(`${API_URL}/citizenshipSummary`);
    const citizenData = citizenRes.data;
    return citizenData;
  };

  const updateQuery = async () => {
    setIsDataLoading(true);
  };

  const fetchData = async () => {
    const [fiscalData, citizenshipResults] = await Promise.all([getFiscalData(), getCitizenshipResults()]);
    setGraphData({ ...fiscalData, citizenshipResults });
    setIsDataLoading(false);
  };

  const clearQuery = () => {
    setGraphData({});
  };

  const getYears = () => graphData?.yearResults?.map(({ fiscal_year }) => Number(fiscal_year)) ?? [];

  useEffect(() => {
    if (isDataLoading) {
      fetchData();
    }
  }, [isDataLoading]);

  return {
    graphData,
    setGraphData,
    isDataLoading,
    updateQuery,
    clearQuery,
    getYears,
  };
};

export function useAppContext() {
  return useContext(AppContext);
}

export function ProvideAppContext({ children }) {
  const contextValue = useAppContextProvider();

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
}
