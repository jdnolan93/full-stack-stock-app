import React, { useState } from "react";

const ShareUpdateNumber = ({share, updateShareNo}) => {

    const [noOfShares, setNoOfShares] = useState(0)

    const onChange = (e) => setNoOfShares(e.target.value)

    const onSubmit = (e) =>{

        e.preventDefault();

        console.log(share.name, share.symbol, noOfShares, share.currentPrice);
        
        const payload = {
            name: share.name,
            symbol: share.symbol,
            noOfShares: Number(noOfShares),
            currentPrice: share.currentPrice
            }

        console.log(payload);
        
        updateShareNo(share._id, payload);

        setNoOfShares(0);
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