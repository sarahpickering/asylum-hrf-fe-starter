import pieChart from '../../../assets/pie-chart.png';
import lineGraph from '../../../assets/line-graph.png';
import barGraph from '../../../assets/bar-graph.png';
import paperStack from '../../../assets/paper-stack.jpg';
import { useNavigate } from 'react-router-dom';
import { useDownloadData } from '../../../hooks/useDownloadData.js';
import {decodeBase64} from '../../../utils/decodeBase64.js';
import { humanRightFirstURL } from '../../../utils/constants.js';

/**
 * TODO: Ticket 1:
 * Implement structure and styles of the Landing page using Tailwind
 * Implement any button functionality implied by the landing page screenshot example (tickets/examples)
 */
export const LandingPage = () => {
  const navigate = useNavigate();
  const { downloadCSV } = useDownloadData();

  const scrollToTop = () => {
    let scrollStep = -window.scrollY / 20; // Adjust the divisor for speed
    let scrollInterval = setInterval(() => {
      if (window.scrollY === 0) {
        clearInterval(scrollInterval);
      } else {
        window.scrollBy(0, scrollStep);
      }
    }, 10); // Adjust the interval time for smoothness
  };

  const handleReadMore = () => {
    // TODO: navigate to the humanrightsfirst.org homepage
  };

  return (
    <div className='flex-c w-[100vw] secondary-c'>
      <section className='flex primary-c pt-4 pb-8'>
        <div className='flex-c mx-auto'>
          <h1 className='text-5xl mb-8 text-white font-body'>Asylum Office Grant Rate Tracker</h1>
          <h3 className='text-white text-base text-center max-w-3xl font-body'>
            The Asylum Office Grant Rate Tracker provides asylum seekers, researchers, policymakers, and the public an interactive tool to explore USCIS data on Asylum Office decisions.
          </h3>
        </div>
      </section>
      <section className='graphs-section flex-c pt-10'>
      <div className='flex-c'>
          <div className='flex justify-center m-14 gap-20 text-lg'>
            <div className='flex-c gap-3 font-body'>
              <img src={barGraph} alt="Bar Graph" className='w-64 mb-4' />
              <h3>Search Grant Rates By Office</h3>
            </div>
            <div className='flex-c gap-3 font-body'>
              <img src={pieChart} alt='Pie Chart' className='w-64 mb-4' />
              <h3>Search Grant Rates by Nationality</h3>
            </div>
            <div className='flex-c gap-3 font-body'>
              <img src={lineGraph} alt='Line Graph' className='w-64 mb-4' />
              <h3>Search Grant Rates Over Time</h3>
            </div>
          </div>
          <div className='flex align-center mx-auto gap-8 font-body'>
              <button
                className='bg-[#aaa] px-[10px] py-[5px] text-white text-md font-semibold
                hover:opacity-85 hover:scale-105'
                onClick={() => navigate('/graphs')}
              >
                View The Data
              </button>
            </div>
      </div>
      </section>
      Landing Page
      <div>{'Type this into Canvas: ' + decodeBase64('VGltZTJDb2RlIQ==')}</div>
    </div>
  );
};
