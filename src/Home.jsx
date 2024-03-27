import NavBarComp from "./NavBar"


function Home() {
  return (
    <div className="bg-[#4c1d95] w-full">
        <NavBarComp/>
        <div className="flex items-center justify-center ">
            <h1 className="flex items-start gap-4 text-[90px]"> 
            <span> Welcome </span> <span>to</span>  <span>React</span>  <span>Convertor </span>  </h1>
        </div>
    </div>
  )
}

export default Home