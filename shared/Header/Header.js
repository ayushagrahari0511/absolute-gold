import styles from './Header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faMicrophone, faUserCog } from '@fortawesome/free-solid-svg-icons'

const Header = ({ desc, img, title }) => {
    return (
        <div className={`registerHeader ${styles.wrapper}`}
            style={{
                background: `url(${img})`,
            }}
        >
            <div className={styles.container}>
                <div className={styles.searchInput}>
                    <form className={styles.search_container}>
                        <label htmlFor="search">
                            <FontAwesomeIcon icon={faSearch} className={styles.search} />
                        </label>
                        <input type="text" id='search' placeholder='Search topics or keyword' />
                        <div className={styles.microphone}>
                            <FontAwesomeIcon icon={faMicrophone} className={styles.mike} />
                        </div>
                    </form>
                </div>
                {
                    title ?
                        <div className={styles.my_account}>
                            <div className={styles.title}>
                                <h1>
                                    {title}
                                </h1>
                            </div>
                            <p>{desc}</p>
                        </div>
                        :
                        <div className={styles.my_account}>
                            <div className={styles.title}>
                                <i className="fa fa-user-cog" />
                                <h1>
                                    MY ACCOUNT
                                </h1>
                            </div>
                        </div>
                }
            </div>
        </div>
    )
}

export default Header