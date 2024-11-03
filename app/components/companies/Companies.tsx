import React from 'react';
import Image from "next/image";
import img from "../../../Public/clocket.png"
const Companies = () => {
  const company = [
    {
      image: img, 
      des: "testtttttttttttt",
      color: "red"
    },
    {
      image: img, 
      des: "testtttttttttttt",
      color: "blue"
    },
    {
      image: img, 
      des: "testtttttttttttt",
      color: "yellow"
    },
    {
      image: img, 
      des: "testtttttttttttt",
      color: "white"
    },
  ];

  return (
    <div className="mt-10">
      <div className='image-company h-[150px] md:h-[250px]'>
       <h2 className='text-white text-center text-2xl mt-0 md:mt-8'>Companies<span className='text-main text-6xl'>.</span></h2>
      </div>
      <div className='flex flex-col md:flex-row justify-center mt-0 md:mt-10 gap-5'>
        {company.map((product, index) => (
          <div className='flex flex-col items-center' key={index}>
            <Image className='w-[60%]' src={product.image} alt="company logo" />
            <p className='text-white mt-3'>{product.des}</p>
            <button className={`border-2 border-${product.color}-500 text-white rounded-md p-2 mt-3`} >See More</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Companies;
