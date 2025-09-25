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
    let scrollStep = -window.scrollY / 20; 
    let scrollInterval = setInterval(() => {
      if (window.scrollY === 0) {
        clearInterval(scrollInterval);
      } else {
        window.scrollBy(0, scrollStep);
      }
    }, 10); 
  };

  const handleReadMore = () => {
    window.open(humanRightFirstURL, "_blank")
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
        <div className="w-full flex justify-center">
            <div className="flex gap-20 font-body">

          <div className='w-64 flex flex-col items-center gap-3 font-body'>
            <div className="w-64 h-64 flex items-center justify-center">
              <img src={barGraph} alt="Bar Graph" className="object-contain max-w-full max-h-full" />
            </div>
            <h3>Search Grant Rates By Office</h3>
            </div>

            <div className='w-64 flex flex-col items-center gap-3 font-body'>
              <div className="w-64 h-64 flex items-center justify-center">
              <img src={pieChart} alt="Pie Chart" className="object-contain max-w-full max-h-full" />
              </div>
              <h3>Search Grant Rates By Nationality</h3>
            </div>

            <div className='w-64 flex flex-col items-center gap-3 font-body'>
              <div className="w-64 h-64 flex items-center justify-center">
              <img src={lineGraph} alt='Line Graph' className="object-contain max-w-full max-h-full" />
            </div>
            <h3>Search Grant Rates Over Time</h3>
            </div>
          </div>
        </div>

          <div className='flex align-center mx-auto gap-7 font-body mt-8'>
              <button
                className='bg-[#aaa] px-[10px] py-[5px] text-white text-md font-semibold
                hover:opacity-85 hover:scale-105'
                onClick={() => navigate('/graphs')}
              >
                View The Data
              </button>
              <button
                className='bg-[#aaa] px-[10px] py-[5px] text-white text-md font-semibold
                hover:opacity-85 hover:scale-105'
                onClick={ downloadCSV }
              >
                Download The Data
                </button>
            </div>
      </section>

      <section className='about-section flex'>
        <div className='flex-1 hrf-img-container content-center p-20'>
          <img src={paperStack} alt="Human Rights First" className="hrf-img rounded-3xl h-[70%] w-[100%]" />
        </div>
        <div className='about-section-text-container flex-1 content-center p-20'>
          <p className='text-sm font-body'>
            Human Rights First has developed a search tool that provides a user-friendly way to explore a dataset of 
            asylum decisions made by the USCIS Asylum Office between FY 2016 and May 2021, obtained through a Freedom 
            of Information Act request. Users can search asylum grant rates by year,
            nationality, and asylum office, visualize the data with charts and heat maps, and download the dataset.
          </p>
        </div>
      </section>

      <section className='insights-section flex-c gap-12'>
        <div className='insights-section-header'>
          <h3 className='text-3xl font-body'>Systematic Disparity Insights</h3>
        </div>

        <div className="flex justify-center gap-12">
          <div className='w-92 flex flex-col items-center gap-4 font-body'>
            <div className="w-64 flex items-center justify-center">
              <h3>36%</h3>
            </div>
              <p className="text-xs">By the end of the Trump administration, the average asylum office grant rate had fallen 36% 
                from an average of 44 percent in fiscal year 2016 to 28 percent in fiscal year 2020.</p>
          </div>

          <div className='w-92 flex flex-col items-center gap-4 font-body'>
            <div className="w-64 flex items-center justify-center">
              <h3>5%</h3>
            </div>
              <p className="text-xs">The New York asylum office grant rate dropped to 5 percent in fiscal year 2020.</p>
          </div>

          <div className='w-92 flex flex-col items-center gap-4 font-body'>
            <div className="w-64 flex items-center justify-center">
              <h3>6x Lower</h3>
            </div>
              <p className='text-xs mb-0'>Between fiscal year 2017 and 2020, the New York asylum office's average grant
                rate was 6 times lower than the San Francisco asylum office.
              </p>
          </div>
        </div>
      </section>


          <div className='flex items-center mx-auto gap-4 font-body mt-8 mb-0'>
            <button
              className='bg-[#666555] px-3 py-1 text-white text-md font-semibold
              hover:opacity-85 hover:scale-105'
              onClick={handleReadMore}
              >
              Read More
            </button>
          </div>

          <div className='scroll-to-top p-6'>
            <button className="scroll-to-top text-xs rounded-lg" 
            onClick={scrollToTop}>
              Back To Top ^
            </button>
          </div>

      
      
    </div>
  );
};
