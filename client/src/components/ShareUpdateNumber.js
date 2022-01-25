import { useState } from "react";
import { updateShare } from "../SharesService";


const ShareUpdateNumber = (id) => {

    const [formData, setFormData] = useState({})

    const onChange = (e) =>{
        formData[e.target.id] = e.target.value;
        setFormData(formData);
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        console.log(formData);
        updateShare({id}, formData)
        }

    return (
        <form onSubmit={onSubmit} id="update-number">
            <div className="updateFormWrap">
                <label htmlFor="noOfShares"></label>
                <input onChange={onChange} type="number" id="noOfShares"  />
            </div>
        <input type="submit" value="Update" id="save"/>
        </form>
    )
}


export default ShareUpdateNumber