import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { CreatAuth } from "../firebase/Authproviders";

const UpdateProfile = () => {
    
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {upadateprofile} = useContext(CreatAuth);

    const onSubmit = data => {
        console.log(data); 
        upadateprofile(data.name, data.photourl)
        
    };

    return (
        <div className="w-full md:w-[50%] mx-auto border-2 rounded-md my-10">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-xl font-semibold">New name</span>
                    </label>
                    <input type="text" placeholder="Enter your new Name" name="name" className="input input-bordered" required {...register("name")} />
                </div>
                <div className="form-control relative">
                    <label className="label">
                        <span className="label-text text-xl font-semibold">Photo URL</span>
                    </label>
                    <input type='text' name="photourl" placeholder="Enter your new Photo URL" className="input input-bordered" required {...register("photourl")} />
                </div>
                <div className="form-control mt-5">
                    <button className="btn bg-[#403F3F] hover:text-black shadow text-white">Update Profile</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateProfile;