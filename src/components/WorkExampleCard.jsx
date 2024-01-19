import React from 'react';

const WorkExampleCard = ({id, title, image}) => {
    return (
        <div key={id} className="bg-gray-100 rounded-lg shadow-md p-4 flex items-center m-2 w-4/5 mx-auto hover:bg-pink-200 hover:scale-110">
            <img src={image} alt={school} className="w-8 h-8 mr-4" />
            <div>
                <p className="text-black font-semibold text-lg mb-2">{title}</p>
            </div>
        </div>
    );
};

export default WorkExampleCard;