import { useState } from 'react'
import styles from './Filters.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faShare, faSearch, faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import {IoFilter} from 'react-icons/io5'
import {BsFilterLeft} from 'react-icons/bs'

const Filters = () => {
    const [priceFrom, setPriceFrom] = useState(0);
    const [priceTo, setPriceTo] = useState(100)
    const [isMenu, setIsMenu] = useState(false)

    return (
        <div className={isMenu && styles.filters}>
            {
                isMenu ? <FontAwesomeIcon
                    icon={faXmark}
                    onClick={() => setIsMenu(false)}
                    className={styles.faBars} />
                    :
                    <BsFilterLeft
                        onClick={() => setIsMenu(true)}
                        className={styles.faBars} />
            }
            <div className={isMenu ? `${styles.wrapper} ${styles.active}` : styles.wrapper} >

                {/* Price Secion Starts here-----------------------
            ------------------------------ */}
                <div className={styles.container}>
                    <h5>
                        <FontAwesomeIcon icon={faShare} className={styles.shareIcon} />
                        Price
                    </h5>
                    <div className={styles.checkbox}>
                        <li>
                            <label className={styles.checkboxLabel}>
                                <input type="checkbox" name="checkbox" id="check1" />
                                <span className={styles.cr}>
                                    <FontAwesomeIcon icon={faCheck} className={styles.checkIcon} />
                                </span>
                                $5,000 and below (1345)
                            </label>
                        </li>
                        <li>
                            <label className={styles.checkboxLabel}>
                                <input type="checkbox" name="checkbox" />
                                <span className={styles.cr}>
                                    <FontAwesomeIcon icon={faCheck} className={styles.checkIcon} />
                                </span>
                                $5,000 - $10,000 (738)
                            </label>
                        </li>
                        <li>
                            <label className={styles.checkboxLabel}>
                                <input type="checkbox" name="checkbox" />
                                <span className={styles.cr}>
                                    <FontAwesomeIcon icon={faCheck} className={styles.checkIcon} />
                                </span>
                                $10,000 - $15,000 (1238)
                            </label>
                        </li>
                    </div>
                    <h4>${priceFrom * 200} to ${priceTo * 200}</h4>
                    <div className={styles.price_range}>
                        <div>
                            <div
                                style={{
                                    background: `linear-gradient(to right, #f5f5f5 ${priceFrom}%, #e2dcdc ${priceFrom}%, #e2dcdc ${priceTo}%, #f5f5f5 ${priceTo}% )`
                                }}>
                                <input
                                    type="range"
                                    name="price-from"
                                    min="0"
                                    max="100"
                                    step="1"
                                    id=""
                                    aria-label='From'
                                    value={priceFrom}
                                    onChange={(e) => setPriceFrom(e.target.value)} />
                                <input
                                    type="range"
                                    name="price-to"
                                    min={0}
                                    max={100}
                                    step="1"
                                    aria-label="To"
                                    value={priceTo}
                                    onChange={(e) => setPriceTo(e.target.value)} />
                            </div>
                        </div>
                    </div>
                    <div className={styles.priceInput}>
                        <input type="number" placeholder='0' />
                        to
                        <input type="number" placeholder='20000' />
                        <button>Go</button>
                    </div>
                </div>
                {/* Price Section Ends here ------------------------
            --------------------------------*/}


                {/* BRAND SECTION STARTS-----------------------
            ------------------------------ */}
                <div className={styles.container}>
                    <h5>
                        <FontAwesomeIcon icon={faShare} className={styles.shareIcon} />
                        Brand
                    </h5>
                    <form className={styles.searchBox}>
                        <input type="text" placeholder='Search' />
                        <FontAwesomeIcon icon={faSearch} className={styles.searchIcon} />
                    </form>
                    <div className={styles.checkbox}>
                        <li>
                            <label className={styles.checkboxLabel}>
                                <input type="checkbox" name="checkbox" id="check1" />
                                <span className={styles.cr}>
                                    <FontAwesomeIcon icon={faCheck} className={styles.checkIcon} />
                                </span>
                                New Arrivals
                            </label>
                        </li>
                        <li>
                            <label className={styles.checkboxLabel}>
                                <input type="checkbox" name="checkbox" />
                                <span className={styles.cr}>
                                    <FontAwesomeIcon icon={faCheck} className={styles.checkIcon} />
                                </span>
                                Earrings
                            </label>
                        </li>
                        <li>
                            <label className={styles.checkboxLabel}>
                                <input type="checkbox" name="checkbox" />
                                <span className={styles.cr}>
                                    <FontAwesomeIcon icon={faCheck} className={styles.checkIcon} />
                                </span>
                                Tanzanites
                            </label>
                        </li>
                        <li>
                            <label className={styles.checkboxLabel}>
                                <input type="checkbox" name="checkbox" />
                                <span className={styles.cr}>
                                    <FontAwesomeIcon icon={faCheck} className={styles.checkIcon} />
                                </span>
                                Bracelets
                            </label>
                        </li>
                        <li>
                            <label className={styles.checkboxLabel}>
                                <input type="checkbox" name="checkbox" />
                                <span className={styles.cr}>
                                    <FontAwesomeIcon icon={faCheck} className={styles.checkIcon} />
                                </span>
                                Accessories
                            </label>
                        </li>
                    </div>
                </div>

                {/* BRAND SECTIONS ENDS HERE--------------------
            ------------------------- */}

                {/* CATEGORIES SECTION STARTS-----------------------
            ------------------------------ */}
                <div className={styles.container}>
                    <h5>
                        <FontAwesomeIcon icon={faShare} className={styles.shareIcon} />
                        Categories
                    </h5>
                    <form className={styles.searchBox}>
                        <input type="text" placeholder='Search' />
                        <FontAwesomeIcon icon={faSearch} className={styles.searchIcon} />
                    </form>
                    <div className={styles.checkbox}>
                        <li>
                            <label className={styles.checkboxLabel}>
                                <input type="checkbox" name="checkbox" id="check1" />
                                <span className={styles.cr}>
                                    <FontAwesomeIcon icon={faCheck} className={styles.checkIcon} />
                                </span>
                                New Arrivals
                            </label>
                        </li>
                        <li>
                            <label className={styles.checkboxLabel}>
                                <input type="checkbox" name="checkbox" />
                                <span className={styles.cr}>
                                    <FontAwesomeIcon icon={faCheck} className={styles.checkIcon} />
                                </span>
                                Earrings
                            </label>
                        </li>
                        <li>
                            <label className={styles.checkboxLabel}>
                                <input type="checkbox" name="checkbox" />
                                <span className={styles.cr}>
                                    <FontAwesomeIcon icon={faCheck} className={styles.checkIcon} />
                                </span>
                                Tanzanites
                            </label>
                        </li>
                        <li>
                            <label className={styles.checkboxLabel}>
                                <input type="checkbox" name="checkbox" />
                                <span className={styles.cr}>
                                    <FontAwesomeIcon icon={faCheck} className={styles.checkIcon} />
                                </span>
                                Bracelets
                            </label>
                        </li>
                        <li>
                            <label className={styles.checkboxLabel}>
                                <input type="checkbox" name="checkbox" />
                                <span className={styles.cr}>
                                    <FontAwesomeIcon icon={faCheck} className={styles.checkIcon} />
                                </span>
                                Accessories
                            </label>
                        </li>
                    </div>
                </div>
                {/* CATEGORIES SECTIONS ENDS HERE--------------------
            ------------------------- */}

                {/* SIZE SECTION STARTS-----------------------
            ------------------------------ */}
                <div className={styles.container}>
                    <h5>
                        <FontAwesomeIcon icon={faShare} className={styles.shareIcon} />
                        Size
                    </h5>
                    <form className={styles.searchBox}>
                        <input type="text" placeholder='Search' />
                        <FontAwesomeIcon icon={faSearch} className={styles.searchIcon} />
                    </form>
                    <div className={styles.checkbox}>
                        <li>
                            <label className={styles.checkboxLabel}>
                                <input type="checkbox" name="checkbox" id="check1" />
                                <span className={styles.cr}>
                                    <FontAwesomeIcon icon={faCheck} className={styles.checkIcon} />
                                </span>
                                14.0 mm
                            </label>
                        </li>
                        <li>
                            <label className={styles.checkboxLabel}>
                                <input type="checkbox" name="checkbox" />
                                <span className={styles.cr}>
                                    <FontAwesomeIcon icon={faCheck} className={styles.checkIcon} />
                                </span>
                                14.4 mm
                            </label>
                        </li>
                        <li>
                            <label className={styles.checkboxLabel}>
                                <input type="checkbox" name="checkbox" />
                                <span className={styles.cr}>
                                    <FontAwesomeIcon icon={faCheck} className={styles.checkIcon} />
                                </span>
                                14.8 mm
                            </label>
                        </li>
                        <li>
                            <label className={styles.checkboxLabel}>
                                <input type="checkbox" name="checkbox" />
                                <span className={styles.cr}>
                                    <FontAwesomeIcon icon={faCheck} className={styles.checkIcon} />
                                </span>
                                Motorola (1)
                            </label>
                        </li>
                        <li>
                            <label className={styles.checkboxLabel}>
                                <input type="checkbox" name="checkbox" />
                                <span className={styles.cr}>
                                    <FontAwesomeIcon icon={faCheck} className={styles.checkIcon} />
                                </span>
                                15.4 mm
                            </label>
                        </li>
                    </div>
                </div>
                {/* SIZE SECTIONS ENDS HERE--------------------
            ------------------------- */}

                {/* POPULAR TAGS SECTION STARTS-----------------------
            ------------------------------ */}
                <div className={styles.container}>
                    <h5>
                        <FontAwesomeIcon icon={faShare} className={styles.shareIcon} />
                        Popular Tags
                    </h5>
                    <form className={styles.searchBox}>
                        <input type="text" placeholder='Search' />
                        <FontAwesomeIcon icon={faSearch} className={styles.searchIcon} />
                    </form>
                    <div className={styles.checkbox}>
                        <li>
                            <label className={styles.checkboxLabel}>
                                <input type="checkbox" name="checkbox" id="check1" />
                                <span className={styles.cr}>
                                    <FontAwesomeIcon icon={faCheck} className={styles.checkIcon} />
                                </span>
                                Pendants
                            </label>
                        </li>
                        <li>
                            <label className={styles.checkboxLabel}>
                                <input type="checkbox" name="checkbox" />
                                <span className={styles.cr}>
                                    <FontAwesomeIcon icon={faCheck} className={styles.checkIcon} />
                                </span>
                                Earrings
                            </label>
                        </li>
                        <li>
                            <label className={styles.checkboxLabel}>
                                <input type="checkbox" name="checkbox" />
                                <span className={styles.cr}>
                                    <FontAwesomeIcon icon={faCheck} className={styles.checkIcon} />
                                </span>
                                Bangles
                            </label>
                        </li>
                        <li>
                            <label className={styles.checkboxLabel}>
                                <input type="checkbox" name="checkbox" />
                                <span className={styles.cr}>
                                    <FontAwesomeIcon icon={faCheck} className={styles.checkIcon} />
                                </span>
                                Bracelets
                            </label>
                        </li>
                        <li>
                            <label className={styles.checkboxLabel}>
                                <input type="checkbox" name="checkbox" />
                                <span className={styles.cr}>
                                    <FontAwesomeIcon icon={faCheck} className={styles.checkIcon} />
                                </span>
                                Necklace
                            </label>
                        </li>
                    </div>
                </div>
                {/* POPULAR TAGS SECTIONS ENDS HERE--------------------
            ------------------------- */}
            </div>
        </div>
    )
}

export default Filters