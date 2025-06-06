import wmsu_logo from "../assets/home/Western_Mindanao_State_University.png"

const NavBar = () => {
    return (
        <nav className="flex justify-between items-center fixed top-8 right-16 left-16 z-50">
                  <img src={wmsu_logo} alt="" className="size-12" />
                  <div className="flex items-center text-lg gap-6 drop-shadow-md font-medium text-primary">
                    <a href="">Home</a>
                    <a href="" >Events</a>
                    <a href="">Sports</a>
                    <a href="">Departments</a>
                  </div>
        </nav>
    )
}

export default NavBar