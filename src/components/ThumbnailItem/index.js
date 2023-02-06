import './index.css'
// Write your code here.
const ThumbnailItem = props => {
  const {eachImage, showImage, isSelected} = props
  const {thumbnailUrl, thumbnailAltText, id} = eachImage

  const onClickImage = () => {
    showImage(id)
  }

  const activeImage = isSelected ? 'active-img' : ''

  return (
    <li className="list-items">
      <button type="button" onClick={onClickImage} className="button">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={`thumbnail-image ${activeImage}`}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
