
import { Link } from "react-router-dom"
export default function About(){

  return(
    <div>
    <h2>This is About Page</h2>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt error quasi voluptatibus optio aliquid. Voluptate odio nulla minima dignissimos consequuntur nam voluptates. Asperiores perspiciatis error repellat nemo quibusdam molestias beatae?</p>
    <button className="btn about-btn"><Link to="/">Go Back</Link></button>
    </div>
  )
}