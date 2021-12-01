import styles  from './OurServices.module.css'

export default function OurServices(){

    return(

        <div className={styles.musicBox}>
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={styles.serviceBox}>
                        <div className={styles.forBox}>
                            <i><img src="icons/icon1.png" alt="icon" className={styles.servicePic}/></i>
                            <h3 className={styles.serviceTitle}>Custom Player</h3>
                            <p className={styles.serviceText}>t is a long established fact that a reader will be distracted by the readable </p>
                        </div>
                    </div>
                    <div className={styles.serviceBox}>
                        <div className={styles.forBox}>
                            <i><img src="icons/icon1.png" alt="icon" className={styles.servicePic}/></i>
                            <h3 className={styles.serviceTitle}>Custom Player</h3>
                            <p className={styles.serviceText}>t is a long established fact that a reader will be distracted by the readable </p>
                        </div>
                    </div>
                    <div className={styles.serviceBox}>
                        <div className={styles.forBox}>
                            <i><img src="icons/icon1.png" alt="icon" className={styles.servicePic}/></i>
                            <h3 className={styles.serviceTitle}>Custom Player</h3>
                            <p className={styles.serviceText}>t is a long established fact that a reader will be distracted by the readable </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )

}