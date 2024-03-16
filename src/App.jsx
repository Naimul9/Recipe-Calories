

import { useEffect, useState } from 'react'
import './App.css'
import Singlerecipe from './Singlerecipe'
import SingleRecipe from './Singlerecipe'

function App() {
  

const [recipes, setRecipe] =useState([])

useEffect(()=>{
fetch("./recipies.json")
.then((res)=>res.json())
.then((data)=> {setRecipe(data)})
}, [])

console.log(recipes)



  return (
    <>
   <nav className='w-full lg:max-w-[1320px] lg:mx-auto font-lexend'>
   <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabindex="0" role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabindex="0" className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><a>Home</a></li>
      <li><a>Recipes</a></li>
      <li><a>About</a></li>
      <li><a>Search</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-[10px] lg:text-[20px]">Recipe Calories</a>
  </div>
  <div className="navbar hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>
      <li><a>Recipes</a></li>
      <li><a>About</a></li>
      <li><a>Search</a></li>
    </ul>
  </div>

  <div className="flex-none gap-2">
    <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    </div>
    <div className="dropdown dropdown-end">
      <div tabindex="0" role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
           <img alt="Tailwind CSS Navbar component" src="../src/images/Frame 5.png" />
        </div>
      </div>



      <ul tabindex="0" className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li><a>Profile</a></li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div> 
   </nav>


   <main>
{/* banner  */}
<section className='max-w-[1320px] mx-auto h-[600px] '>

<div className='bg-[]'>


<img src="../src/images/Rectangle1.png"/>
  


</div>


</section>

{/* Our Recipies */}

<section className='mt[100px] max-w-[1320px] mx-auto'>

<h1 className='text-[40px] font-semibold'>Our Recipies</h1>
<p className='mt-5 text-center w-[1000px] mx-auto font-normal'>
Delight in our diverse recipes, from comforting classNameics like Chicken Curry and Spaghetti Bolognese to healthier options like Vegetable Stir Fry. Indulge in Grilled Salmon or decadent Chocolate Cake.</p>

<div className='mt-7 flex'>

<div className='w-2/3'>

 
 
  <div className='text-start pr-4 my-6 grid grid-cols-2 gap-5 -ml-10 '>
    
    {recipes.map( (rp)=>(<SingleRecipe recipe={rp} ></SingleRecipe>))}
   
    
  </div>


</div>


<div className='w-1/3' >
Single 
</div>


</div>






</section>

   </main>
    
     
    </>
  )
}

export default App
