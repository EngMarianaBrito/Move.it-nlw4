import { ExperienceBar } from "../componentes/ExperienceBar";
import { Profile } from "../componentes/Profile";
import { CompletedChanllenges } from "../componentes/CompletedChallenges";


import styles from '../styles/pages/Home.module.css'

export default function Home() {
  return (
    <div className = {styles.container } >
      <ExperienceBar/>

      <section>
        <div>
          <Profile/>
          <CompletedChanllenges/>
        </div>
      </section>

    </div>
  )
}
