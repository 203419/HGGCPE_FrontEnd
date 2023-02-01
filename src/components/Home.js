
import { Link } from "react-router-dom";

function Home(){

    return(

        <div className="modal-dialog text-center ">
            <div className="col-sm-10 container">
                <div className="modal-content">

                <h3 className="modal-title mt-5 mb-3">Home</h3>

                <form className="">
                    <div className="mb-3 mb-0">
                        <label for="exampleInputEmail1" className="form-label">Loggin</label>
                        <div className="pb-3">
                            <Link role="button" className="text-white btn btn-info col-sm-6" to='/login'> 
                                Login 
                            </Link>
                        </div>
                    </div>
                    

                    <div className="mb-3 mb-4 ">
                        <label for="exampleInputEmail1" className="form-label">Register</label>
                        <div className="pb-5">
                            <Link role="button" className="text-white btn btn-info col-sm-6" to='/register'> 
                                Register 
                            </Link>
                        </div>
                    </div>

                    
                </form>

                </div>
            </div>
        </div>

    )
}

export default Home;