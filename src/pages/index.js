import React from "react"
import { Link } from "gatsby"
import "../styles/style.less"
export default function Home() {
  return (
    <div>
      Hello world! <Link to="/about">About</Link>
    </div>
  )

}
