import styles  from './OurServices.module.css'

export default function OurServices(){

    return(

        <div className={styles.musicBox}>
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={styles.serviceBox}>
                        <div className={styles.forBox}>
                            <i><img src="icons/icon1.png" alt="icon" className={styles.servicePic}/></i>
                            <h3 className={styles.serviceTitle}>Upload Albums</h3>
                            <p className={styles.serviceText}>Sign up and start filling the Repository with info on classic records</p>
                        </div>
                    </div>
                    <div className={styles.serviceBox}>
                        <div className={styles.forBox}>
                            <i><img src="icons/icon4.png" alt="icon" className={styles.servicePic}/></i>
                            <h3 className={styles.serviceTitle}>Detailed Information</h3>
                            <p className={styles.serviceText}>Full info on the given album, it's tracklist and the musicians</p>
                        </div>
                    </div>
                    <div className={styles.serviceBox}>
                        <div className={styles.forBox}>
                            <i><img src="icons/icon3.png" alt="icon" className={styles.servicePic}/></i>
                            <h3 className={styles.serviceTitle}>Ratings And Opinions</h3>
                            <p className={styles.serviceText}>Leave comments, likes and disslikes. Share your opinion with the rest of the community</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )

}