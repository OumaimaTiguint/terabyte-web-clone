import React from 'react';
import WorkExampleCard from './WorkExampleCard';
import { recentWorkData } from '../data/recentWorkData';

function MyRecentWork() {
    return (
        <div className='mx-auto flex flex-row md:flex-col'>
            <div className='w-full p-4 md:p-8'>
                <h3 className='text-3xl font-bold text-center font-primary mb-4 text-white'>My recent work</h3>
                <div className="w-full flex flex-col md:flex-row items-center md:items-end justify-center">
                    {recentWorkData.map((ex) => (
                        <WorkExampleCard key={ex.id}
                                         id={ex.id}
                                         title={ex.title}
                                         image={ex.image}/>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MyRecentWork;