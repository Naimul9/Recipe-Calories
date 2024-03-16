import React from 'react';

const SingleRecipe = ({recipe}) => {
    return (
        <div  className='w-[400px] h-[680px] border border-gray-400 rounded-2xl text-start px-4 py-4 ml-5 '>
           <img className=' h-[250px] w-[360px] rounded-2xl object-cover' src={recipe.recipe_image} alt="" />
    <h1 className='mt-6 text-[20px] font-semibold'>{recipe.recipe_name} </h1>
<p className='mt-3 mb-7 h-5 text-[#878787] font-normal'>{recipe.short_description} </p>
<hr />

<h1 className='mt-6 text-[18px] font-medium' >Ingredients:6</h1>
<ol className='mt-4 mb-5 font-normal text-[18px] text-[#878787] '>
  <li>{recipe.ingredients[0]} </li>
  <li>{recipe.ingredients[1]}</li>
  <li>{recipe.ingredients[2]}</li>
</ol>
<hr />

<div className='flex gap-8 mt-3 font-normal text-[18px] text-[#282828CC]'> 
<p className='flex gap-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
 <span>{recipe.preparing_time}</span>  </p>
<p className='flex gap-2'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
</svg>
 <span>{recipe.calories}</span>  </p>
</div>


<button className='btn bg-[#0BE58A] rounded-full mt-4 text-[18px] font-medium text-[#150B2B] h-[49px] w-[170px]'>
  Want To Cook
</button>
        </div>
    );
};

export default SingleRecipe;