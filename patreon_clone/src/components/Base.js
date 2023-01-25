import CustomNavbar from "./CustomNavbar"


const Base=({title="welcome", children})=>{
    return (
        <div className="container-fluid p-0 m-0">

            <div className="container">
                <CustomNavbar/>

                {children}
            </div>
        </div>
    )
}

export default Base; 