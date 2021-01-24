import { useEffect, useState } from 'react';

function Post({ date, image, title, ...post }) {
  const [opacity, setOpacity] = useState(0);
  let { file, description } = image
  useEffect(() => {
    setTimeout(() => {
        setOpacity(1);
      }, 800);
  });
  return (
    <div className="post">
      <img style={{ opacity }} alt={title} src={`https:${file.url}`} />
      <div className="description">{description}</div>
    </div>
  )
}

export default Post