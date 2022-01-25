import React, { useState } from "react";

const ShareUpdateNumber = ({share, updateShareNo, setShowForm}) => {

    const [noOfShares, setNoOfShares] = useState(0)

    const onChange = (e) => setNoOfShares(e.target.value)

    const onSubmit = (e) =>{

        e.preventDefault();
        
        const payload = {
            "name": share.name,
            "symbol": share.symbol,
            "noOfShares": Number(noOfShares),
            "currentPrice": Number(share.currentPrice)
            }
        
        updateShareNo(share._id, payload);

        setNoOfShares(0);

        setShowForm(false);
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