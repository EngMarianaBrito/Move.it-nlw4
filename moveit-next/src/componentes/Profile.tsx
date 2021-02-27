import styles from '../styles/components/Profile.module.css'

export function Profile() {
    return (
        <div className = { styles.profileContainer}>
            <img src = "https://github.com/EngMarianaBrito.png"  alt = "Lia Mariana"/>
            <div>
                <strong> Lia Mariana </strong>
                <p> 
                    <img src = "icons/level.svg" alt = "Level"/>    
                    Level 1 
                </p>
            </div>
        </div>
    )
}