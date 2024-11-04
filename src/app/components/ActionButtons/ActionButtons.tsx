import styles from './ActionButtons.module.scss';
import { Button } from "@mui/material";

const ActionButtons = () => {
    return (
        <>
            <div className={styles['btn-container']}>
                <Button className={`btn ${styles['button']}`}>
                    Deploy
                </Button>
                <Button className={`btn ${styles['button']}`}>
                    Learn
                </Button>
            </div>
        </>
    )
}
export default ActionButtons;