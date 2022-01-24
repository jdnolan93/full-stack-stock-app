import SharesAppContainer from '../containers/SharesAppContainer';
import { deleteShare } from '../SharesService';

const ShareCard = ({share, removeShare}) => {

  const handleDelete = () => {
      deleteShare(share._id).then(()=>{
          removeShare(share._id);
      })
  }
  return <ul> 
      <h1> {share.name} </h1>
      <p> {share.noOfShares}</p>
      <p> {share.symbol} </p>
      <button onClick={handleDelete}><i className="fas fa-trash"></i></button>
  </ul>;
};

export default ShareCard;
