// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {eachThumbnailDetails, updateActiveId} = props
  const {id, thumbnailUrl, thumbnailAltText} = eachThumbnailDetails

  const onGetCurrentid = () => {
    updateActiveId(id)
  }

  return (
    <li className="Thumb-list-el">
      <button onClick={onGetCurrentid} type="button" className="button">
        <img src={thumbnailUrl} alt={thumbnailAltText} />
      </button>
    </li>
  )
}
export default ThumbnailItem
