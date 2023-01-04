import './index.css'

const Original = props => {
  const {eachPhotoDetails} = props
  const {imageUrl, imageAltText} = eachPhotoDetails

  return (
    <li className="original-li-el">
      <img src={imageUrl} alt={imageAltText} />
    </li>
  )
}

export default Original
