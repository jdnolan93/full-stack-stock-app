import SharesAppContainer from '../containers/SharesAppContainer';
import { deleteShare } from '../SharesService';
import ShareUpdateNumber from './ShareUpdateNumber';
import { useState } from 'react';

const ShareCard = ({share, removeShare}) => {
  const [showForm, setShowForm] = useState(false)
  const handleDelete = () => {
      deleteShare(share._id).then(()=>{
          removeShare(share._id);
      })
  }
  const handleEdit = () => {
      setShowForm(true)
  }
  if(showForm){

  return <ul> 
      <h1> {share.name} </h1>
      <p> {share.noOfShares}</p>
      <p> {share.symbol} </p>
      <ShareUpdateNumber id = {share._id}/>
      <button onClick={handleDelete}><i className="fas fa-trash"></i></button>
      <button onClick={handleEdit}> <i className="fas fa-edit"></i> </button>
  </ul>;
}

  else{
    return (
        <ul> 
      <h1> {share.name} </h1>
      <p> {share.noOfShares}</p>
      <p> {share.symbol} </p>
      <button onClick={handleDelete}><i className="fas fa-trash"></i></button>
      <button onClick={handleEdit}> <i className="fas fa-edit"></i> </button>
      </ul>
    )
}
} 
export default ShareCard;
