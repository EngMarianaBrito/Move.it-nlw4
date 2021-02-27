import styles from '../styles/components/CompletedChallenges.module.css';

export function CompletedChanllenges() {
    return (
        <div className = { styles.completedChallengesContainer }>
            <span>Desafios Completos</span>
            <span>5</span>
        </div>
    )
}