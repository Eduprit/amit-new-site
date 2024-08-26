'use client';

import React, { useEffect, useState, useRef } from 'react';
import { Chart, ChartConfiguration } from 'chart.js/auto';

interface PageData {
  [key: string]: string;
}

interface ChartDataType {
  labels: string[];
  dataPoints: number[];
}

const NowPageContent: React.FC<{ initialData: PageData | null }> = ({ initialData }) => {
  const [data, setData] = useState<PageData | null>(initialData);
  const [runningData, setRunningData] = useState<ChartDataType>({ labels: [], dataPoints: [] });
  const [stepsData, setStepsData] = useState<ChartDataType>({ labels: [], dataPoints: [] });
  const runningChartRef = useRef<Chart | null>(null);
  const stepsChartRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (data) {
      setRunningData(processChartData(data["Running Data:"]?.split('Monthly,')[1]));
      setStepsData(processChartData(data["Steps Data:"]?.split('Monthly,')[1]));
    }
  }, [data]);

  useEffect(() => {
    if (runningData.labels.length > 0) {
      createChart('runningChart', 'Running (km)', runningData, runningChartRef);
    }
    if (stepsData.labels.length > 0) {
      createChart('stepsChart', 'Steps', stepsData, stepsChartRef);
    }
  }, [runningData, stepsData]);

  const processContent = (content: string) => {
    if (!content) return '';
    return content.split(',').filter(item => item.trim()).map(item => {
      const trimmedItem = item.trim();
      const urlMatch = trimmedItem.match(/(.*?)\s*(https?:\/\/\S+)/);
      if (urlMatch) {
        const [, text, url] = urlMatch;
        return `<li class="mb-2">${text.trim()} <a href="${url.trim()}" target="_blank" class="text-blue-500 hover:underline">(link)</a></li>`;
      }
      return `<li class="mb-2">${trimmedItem}</li>`;
    }).join('');
  };

  const processChartData = (dataString: string): ChartDataType => {
    if (!dataString) return { labels: [], dataPoints: [] };
    const items = dataString.split(',').slice(1);
    const labels: string[] = [];
    const dataPoints: number[] = [];
    items.forEach(item => {
      const match = item.trim().match(/([A-Za-z]+)\s?'?(\d{2})\s+([\d.]+)(km)?/);
      if (match) {
        const [, month, year, value] = match;
        labels.unshift(`${month} '${year}`);
        dataPoints.unshift(parseFloat(value));
      }
    });
    return { labels, dataPoints };
  };

  const createChart = (canvasId: string, label: string, chartData: ChartDataType, chartRef: React.MutableRefObject<Chart | null>) => {
    const ctx = document.getElementById(canvasId) as HTMLCanvasElement;
    if (ctx) {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
      const config: ChartConfiguration = {
        type: 'line',
        data: {
          labels: chartData.labels,
          datasets: [{
            label: label,
            data: chartData.dataPoints,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: false
            }
          }
        }
      };
      chartRef.current = new Chart(ctx, config);
    }
  };

  if (!data) {
    return <div className="text-center py-8">No data available. Please try again later.</div>;
  }

  const interestsKey = Object.keys(data).find(key => key.startsWith("A few topics I'm currently interested in"));

  return (
    <div className="space-y-8">
      {data["These days I am:"] && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Currently</h2>
          <ul className="list-disc pl-5" dangerouslySetInnerHTML={{ __html: processContent(data["These days I am:"]) }}></ul>
        </div>
      )}

      {interestsKey && data[interestsKey] && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Interests</h2>
          <ul className="list-disc pl-5" dangerouslySetInnerHTML={{ __html: processContent(data[interestsKey]) }}></ul>
        </div>
      )}

      {(data["Books"] || data["Movies"] || data["TV Shows"]) && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Media</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-2">Category</th>
                  <th className="border p-2">Favorites</th>
                  <th className="border p-2">Last</th>
                  <th className="border p-2">Current/Next</th>
                </tr>
              </thead>
              <tbody>
                {["Books", "Movies", "TV Shows"].map(category => {
                  if (data[category]) {
                    const items = data[category].split(',').map(item => item.trim());
                    return (
                      <tr key={category}>
                        <td className="border p-2 font-semibold">{category}</td>
                        <td className="border p-2">{items[0] || 'N/A'}</td>
                        <td className="border p-2">{items[1] || 'N/A'}</td>
                        <td className="border p-2">{items[2] || 'N/A'}</td>
                      </tr>
                    );
                  }
                  return null;
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {data["Running Records"] && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Running Records</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-2">Distance</th>
                  <th className="border p-2">Record</th>
                  <th className="border p-2">Date</th>
                </tr>
              </thead>
              <tbody>
                {data["Running Records"].split('\n').map((record, index) => {
                  const [distance, time, date] = record.split(',').map(item => item.trim());
                  return (
                    <tr key={index}>
                      <td className="border p-2 font-semibold">{distance}</td>
                      <td className="border p-2">{time}</td>
                      <td className="border p-2 italic text-gray-600">{date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {data["Steps Records"] && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Steps Records</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-2">Category</th>
                  <th className="border p-2">Record</th>
                  <th className="border p-2">Date/Period</th>
                </tr>
              </thead>
              <tbody>
                {data["Steps Records"].split('\n').map((record, index) => {
                  const [category, value, date] = record.split(',').map(item => item.trim());
                  return (
                    <tr key={index}>
                      <td className="border p-2 font-semibold">{category}</td>
                      <td className="border p-2">{value}</td>
                      <td className="border p-2 italic text-gray-600">{date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Running</h2>
          <div className="h-80">
            <canvas id="runningChart"></canvas>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Steps</h2>
          <div className="h-80">
            <canvas id="stepsChart"></canvas>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NowPageContent;