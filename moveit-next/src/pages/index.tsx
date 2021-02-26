import { ExperienceBar } from "../componentes/ExperienceBar";
import { Profile } from "../componentes/Profile";

import styles from '../styles/pages/Home.module.css'

export default function Home() {
  return (
    <div className = {styles.container } >
      <ExperienceBar/>

      <section>
        <div>
          <Profile/>
        </div>
      </section>

    </div>
  )
}
