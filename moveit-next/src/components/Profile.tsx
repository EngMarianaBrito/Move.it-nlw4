import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';
import { ThemeContext } from '../contexts/ThemeContext';

export function Profile() {
  const { toggleTheme, currentTheme } = useContext(ThemeContext);
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileRow}>
      <div className={styles.profileContainer}>
        <img src="https://github.com/EngMarianaBrito.png" alt="Alícia Foureax"/>
        <div>
          <strong>Lia Mariana</strong>
          <p>
            <img src="icons/level.svg" alt="Level"/>
            Level {level}
          </p>
        </div>
      </div>
    </div>
  );
}