'use client';

import React from 'react';
import NowPageContent from './NowPageContent';

async function getData() {
  try {
    const res = await fetch('https://raw.githubusercontent.com/Eduprit/Now/main/_data/site_content.json');
    
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
   
    return res.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

export default async function NowPage() {
  const data = await getData();

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Amit's Now Page</h1>
      <NowPageContent initialData={data} />
    </div>
  );
}