import {FC} from "react";
import styles from './Toggle.style.module.sass';

type ToggleConfig = {
    value: any,
    onChange: Function
}

export const Toggle: FC<ToggleConfig> = ({value, onChange}) => {
    return (
        <label className={styles.switch}>
            <input
                type="checkbox"
                onClick={() => onChange()}
                checked={value}
                readOnly
            />
            <span className={styles.slider}></span>
        </label>
    )
}