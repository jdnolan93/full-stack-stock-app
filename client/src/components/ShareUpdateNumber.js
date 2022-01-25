import React, { useState } from "react";

const ShareUpdateNumber = (share, updateShareNo) => {

    const [formData, setFormData] = useState({})

    const onChange = (e) =>{
        formData[e.target.id] = e.target.value;
        setFormData(formData);
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        console.log(formData);
        updateShareNo(share._id, formData)
        }

    return (
        <form onSubmit={onSubmit} id="update-number">
            <div className="updateFormWrap">
                <input type="hidden" value={share.name}/>
                <input type="hidden"  value={share.id}/>
                <label htmlFor="noOfShares"></label>
                <input onChange={onChange} type="number" id="noOfShares"  />
            </div>
        <input type="submit" value="Update" id="save"/>
        </form>
    )
}


export default ShareUpdateNumber