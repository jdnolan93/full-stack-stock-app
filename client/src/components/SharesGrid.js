// import { ShareCard } from "./ShareCard";
import ShareCard from "./ShareCard"

const SharesGrid = ({shares}) => {
  const sharesList = shares.map((share) => {
  return <ShareCard share={share} key={share._id}/>
})

  return (
    <>
        {sharesList}
    </>
  )
  }

export default SharesGrid

