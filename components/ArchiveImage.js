function Post({ date, image, title, ...post }) {
  let { file, description } = image
  return (
    <div className="post">
      <img className="collage" alt={title} src={`https:${file.url}`} />
      <div className="description">{description}</div>
    </div>
  )
}

export default Post