import Layout from '../../shared/Layout'
import styles from '../../styles/category.module.css'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import { data } from "../../categoryData"

const Category = () => {
  const router = useRouter()
  const { category } = router.query
  return (
    <div className={`wrapper ${styles.wrapper}`}>
      <div className={`container ${styles.container}`}>
        <div className="navigation">
          <Link href={`/home`}>Home</Link>
          /
          <p>
            {`${category} designs`}
          </p>
        </div>
        <div className={styles.category}>
          {
            data.earrings.map((item, index) => (
              <Link href="/" key={index}>
                <div className={styles.category_box}>
                  <div className={styles.category_icon}>
                    <div className={styles.front_content}>
                      <Image src={item.img} width={100} height={100} />
                      <Image src={item.img} width={100} height={100} />
                    </div>
                  </div>
                  <h4>{item.title}</h4>
                </div>
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  )
}

Category.getLayout = function getLayout(page) {
  const router = useRouter()
  const { category } = router.query
  return (
    <Layout
      title={`${category} Designs online`}
      desc={`A multi dimension B2B platform for Gold traders`}
      img="/4.webp">
      <main>
        {
          page
        }
      </main>
    </Layout>
  )
}

export default Category