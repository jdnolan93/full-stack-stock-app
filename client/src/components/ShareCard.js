import ShareUpdateNumber from './ShareUpdateNumber';
import { useState } from 'react';

const ShareCard = ({share, removeShareFromDB, updateShareNo}) => {
  const [showForm, setShowForm] = useState(false)

  const handleDelete = () => removeShareFromDB(share._id);

  
  
  const handleEdit = () => {
      setShowForm(true);
  }
  if(showForm){

  return <div className='share-list'> 
      <p> {share.name} </p>
      <p> {share.noOfShares}</p>
      <p> {share.symbol} </p>
      <p>{Number(share.noOfShares)*Number(share.currentPrice)}</p>
      <ShareUpdateNumber share = {share} updateShareNo={updateShareNo} setShowForm={setShowForm}/>
      <button onClick={handleDelete}><i className="fas fa-trash"></i></button>
      <button onClick={handleEdit}> <i className="fas fa-edit"></i> </button>
  </div>;
}

  else{
    return (
        <div className='share-list'> 
      <b> {share.name} </b>
      <p> {share.noOfShares}</p>
      <p> {share.symbol} </p>
      <p>{Number(share.noOfShares)*Number(share.currentPrice)}</p>
      <button onClick={handleDelete}><i className="fas fa-trash"></i></button>
      <button onClick={handleEdit}> <i className="fas fa-edit"></i> </button>
      </div>
    )
}
} 
export default ShareCard;
