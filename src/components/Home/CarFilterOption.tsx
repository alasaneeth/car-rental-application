import React from 'react'

const CarFilterOption = () => {
    return (
        <div className='mt-10 flex items-center justify-between'>
            <div>
                <h2 className='text-[30px] font-bold'>Cars Catelog</h2>
                <h2>Explore our cars you might likes</h2>
            </div>
            <div className='flex gap-5'>
                <select defaultValue="Pick a color" className="select select-bordered hidden md:block w-full max-w-xs bg-white border border-gray-500"
                >
                    <option disabled>Price</option>
                    <option>Max to Min</option>
                    <option>Min to max</option>
                </select>
                <select defaultValue="Manufactural"  className="select select-bordered hidden md:block w-full  max-w-xs bg-white border border-gray-500"
                >
                    <option disabled>Manu Factural</option>
                    <option>Honda</option>
                    <option>BMW</option>
                    <option>Toyota</option>
                </select>
            </div>
        </div>
    )
}

export default CarFilterOption
