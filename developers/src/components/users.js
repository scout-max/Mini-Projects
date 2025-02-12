import './users.css'
import React from 'react'

const UserDetails = (props) => {
    const { newDetails } = props;
    const { name, role, current_position, dp } = newDetails;


    return (
        <> <div className='card-main'>

            <div className="container">
                <div className="row d-flex flex-row justify-content-center ">
                    <div className="mb-5 col-lg-6 col-md-8 col-12 ">
                        <div class="cards d-flex flex-row ">

                            <img src={dp} className="card-img-top profile" alt="LOADING " />
                            <div className="card-outer" >
                                <div className="card-body text-center ">
                                    <h3><b>{name}</b></h3>

                                    <p class="card-text"><span><b>Expertise:</b></span> {role}</p>
                                    <p ><span><b>Designation:</b></span> {current_position}</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


            </div>

        </div>





        </>
    )
}
export default UserDetails;