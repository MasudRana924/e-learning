import React from 'react';
import './Feature.css'
const studentData = [
    { id: 1, name: 'John Doe', position: 'Software Engineer', company: 'GP', imageUrl: 'https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg' },
    { id: 2, name: 'Jane Smith', position: 'Product Manager', company: 'Robi', imageUrl: 'https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg' },
    { id: 3, name: 'Mike Johnson', position: 'UX Designer', company: 'Bkash Limited', imageUrl: 'https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg' },
    { id: 4, name: 'Emily Davis', position: 'Marketing Specialist', company: 'Vivasoft', imageUrl: 'https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg' },
    { id: 5, name: 'David Brown', position: 'Data Analyst', company: 'Brain Station 23', imageUrl: 'https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg' },
];

const Students = () => {

    return (
        <div className="mt-8 lg:mt-32 border border-gray-900 rounded-lg p-8 ">
            <h1 className="text-6xl text-gray-400">Where are our students now </h1>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 mt-16">
            {studentData.map(student => (
                <div key={student.id} className="flex gap-4 p-8 rounded-md bg-gray-900" >
                    <div>
                        <img src={student.imageUrl} alt="" className="h-16 w-16 border border-gray-900 rounded-full" />
                    </div>
                    <div>
                    <p className="text-start text-xl text-gray-400 font-serif">{student.name}</p>
                    <p className="text-start text-sm text-gray-400 mt-4">{student.position}</p>
                    <p className="text-start text-sm text-gray-400 mt-4">at {student.company}</p>
                    </div>
                </div>
            ))}
        </div>
        </div>
    );
};

export default Students;