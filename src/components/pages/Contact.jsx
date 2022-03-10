import { Link } from "react-router-dom"
export default function Contact() {

  return (
    <div>
      <h2>This is Contact page</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam architecto maxime illum quia dicta repellat! A quod expedita voluptatem laudantium id distinctio ut perspiciatis minus. Voluptatibus architecto sit minima porro!</p>
      <button className="btn about-btn"><Link to="/">Go Back</Link></button>
    </div>
    
  )
}