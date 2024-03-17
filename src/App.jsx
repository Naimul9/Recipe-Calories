import { useEffect, useState } from 'react'
import './App.css'
import SingleRecipe from './SingleRecipe'


function App() {
  

const [recipes, setRecipe] =useState([])

const [items, setItem]  = useState([])
const [cookingItems, setCookingItems] = useState([]);

const handlePrepare = (id)=>{
const newItem=items.filter(item=>item.recipe_id!=id)
setItem(newItem)
const preparingItem = items.find(item => item.recipe_id === id);
setCookingItems(prevCookingItems => [...prevCookingItems, preparingItem]);
}







const handleCount = (p) =>{
  
const isExist = items.find(item=>item.recipe_id==p.recipe_id)
if(!isExist){

  setItem([...items, p])
}
else{
  alert("Recipe Already Exists")
}
 
}

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
    <a className="btn btn-ghost text-[10px] lg:text-[30px]">Recipe Calories</a>
  </div>
  <div className="navbar hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-2xl">
      <li><a>Home</a></li>
      <li><a>Recipes</a></li>
      <li><a>About</a></li>
      <li><a>Search </a></li>
      
    </ul>
  </div>

  <div className="flex-none gap-2">
   <label id="hide" className="input input-bordered  mx-auto  flex  rounded-[50px] h-[50px] "  >
   <button id="apply" className="btn btn-ghost btn-circle">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
      <input type="text" placeholder="Search" className="input w-24 md:w-auto border-none " />
     
    </label>
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
<section className="w-11/12 lg:w-[1320px] mx-auto bg-cover h-[530px] lg:h-[660px] mt-6 bg-no-repeat rounded-2xl text-white  bg-[url('../src/images/Rectangle1.png')]" >



<h1 className='font-bold lg:text-[52px] text-[24px] text-center lg:px-52 pt-20 lg:pt-[129px]'>Discover an exceptional cooking class tailored for you!</h1>
 
 <p className='lg:pt-8 pt-4 text-[18px] font-normal px-2 lg:px-48 text-center'>Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
  
<div className='flex mt-10 lg:mx-64 justify-center gap-5  '>
  <button className='btn bg-[#0BE58A] h-[65px] lg:w-[187px] rounded-full text-[20px] font-semibold'>Explore Now </button>
  <button className='btn h-[65px] lg:w-[201px] rounded-full bg-transparent text-[20px] font-semibold text-white'>Our Feedback</button>
</div>

</section>

{/* Our Recipies */}

<section className='mt[100px] w-11/12 lg:max-w-[1320px] mx-auto mt-4 '>

<h1 className='text-[40px] font-semibold text-center'>Our Recipies</h1>
<p className='mt-5 text-center lg:w-[1000px] mx-auto font-normal'>
Delight in our diverse recipes, from comforting classNameics like Chicken Curry and Spaghetti Bolognese to healthier options like Vegetable Stir Fry. Indulge in Grilled Salmon or decadent Chocolate Cake.</p>

<div className='mt-7 flex lg:flex-row flex-col gap-5'>

<div className=' lg:w-2/3'>

 
 
  <div className='text-start pr-5 my-6 grid lg:grid-cols-2 grid-cols-1 gap-5 -ml-5 '>
    
    {recipes.map((rp)=>(<SingleRecipe handleCount={handleCount} recipe={rp} ></SingleRecipe>))}
   
    
  </div>


</div>


<div className='mx-auto mt-6 border h-min border-gray-400 lg:w-1/3 w-full rounded-xl '>
  {/* Want to cook */}
  <div> 
<h1 className='mt-6 text-2xl font-semibold text-center'> Want to Cook: {items.length} </h1>

<p className='border-b-2 mt-2 mb-4 w-64 mx-auto'></p>

<div className='text-[#878787] font-medium text-[#282828B3]'>
  <table className="table mb-4">
 
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
      </tr>
    </thead>
    <tbody>

   
        {
          items.map((item, index)=>(
        <tr key={index} className="bg-gray-200  rounded-xl h-[84px] mt-2">
        <th>{index + 1} </th>
        <td>{item.recipe_name}</td>
        <td>{item.preparing_time} </td>
        <td>{item.calories} </td>
       <button  onClick={()=>{handlePrepare(item.recipe_id)}} className='  bg-[#0BE58A] capitalize w-[115px] h-[38px] btn rounded-full mt-4 text-[18px] font-medium text-[#150B2B] px-2 py-1'>
  Preparing
</button>
      </tr>))}
    </tbody>
  </table>
</div>


  </div>
{/* Currently Cooking */}

<div>
                <h1 className='text-2xl font-semibold mb-3 text-center'>Currently Cooking: {cookingItems.length}</h1>
                {/* Currently cooking content */}
                <div className='text-[#878787] font-medium text-[#282828B3]'>
                  <table className="table mb-4">
                    <thead>
                      <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Time</th>
                        <th>Calories</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cookingItems.map((item, index) => (
                        <tr key={index} className="bg-gray-100 rounded-xl h-[84px]">
                          <th>{index + 1}</th>
                          <td>{item.recipe_name}</td>
                          <td>{item.preparing_time}</td>
                          <td>{item.calories}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>


</div>




</div>





</section>

   </main>
    
     
    </>
  )
}

export default App
