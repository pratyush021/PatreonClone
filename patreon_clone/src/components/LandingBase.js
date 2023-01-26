
import LandingNavbar from "./LandingNavbar"

const LandingBase=({title="welcome to patreon", children})=>{
    return (
        <div className="container">
            <LandingNavbar/>
            {children}
        </div>
    )
}

export default LandingBase; 