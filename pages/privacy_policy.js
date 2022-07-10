import Layout from '../shared/Layout'
import styles from '../styles/Privacy.module.css'
import { FaAngleDoubleRight } from 'react-icons/fa'

const Privacy_policy = () => {
    return (
        <div className="wrapper">
            <div className={`container ${styles.container}`}>
                <h5>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec aliquet libero. Integer eget mi et lectus commodo efficitur.
                    Nulla facilisi. Nulla facilisi. Vestibulum non dapibus nibh, vitae tempus dui. Duis tincidunt felis scelerisque magna cursus dictum.
                    Cras semper a ipsum et ullamcorper. Duis facilisis neque dui, ac sagittis felis facilisis eu. Donec iaculis sapien sed elementum hendrerit.
                    Curabitur consectetur risus nunc, euismod dictum nisi sodales vel. Suspendisse lobortis ultricies diam, eget placerat massa auctor ac.
                </h5>
                <h3>
                    Nunc sagittis dui a accumsan sollicitudin. Fusce eleifend pharetra velit.
                </h3>
                <h5>
                    Quisque pulvinar ligula nec mi varius, placerat imperdiet dolor facilisis. Maecenas sit amet molestie lorem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam ac enim vel augue sodales porttitor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras dapibus at nulla non hendrerit. Praesent vehicula tincidunt malesuada. Maecenas sed arcu laoreet, tristique quam a, dignissim nunc. Praesent sit amet auctor ex, ac aliquet massa. Sed vehicula, lorem nec feugiat interdum, arcu ex porttitor augue, et tincidunt justo sapien et purus. Sed eu nibh mauris.
                </h5>
                <h5>
                    Suspendisse aliquet leo quis nisl ornare elementum. Morbi at sagittis augue. Maecenas magna ante, vehicula non consectetur at, posuere eu urna. Pellentesque imperdiet, elit ac euismod imperdiet, elit quam posuere dui, at varius enim mi non risus. Phasellus vitae nunc placerat, maximus odio quis, bibendum velit. Maecenas elementum varius mollis. Aliquam congue dolor vel tincidunt pharetra.
                </h5>
                <h3>
                    Fusce eleifend pharetra velit, vel mattis massa tincidunt in.
                </h3>
                <div className={styles.subTopics_Wrapper}>
                    <div className={styles.subTopics}>
                        <FaAngleDoubleRight />
                        <h5>Quisque pulvinar ligula nec mi varius,</h5>
                    </div>
                    <div className={styles.subTopics}>
                        <FaAngleDoubleRight />
                        <h5>

                            Maecenas sed arcu laoreet, tristique quam a, dignissim nunc.
                        </h5>
                    </div>
                    <div className={styles.subTopics}>
                        <FaAngleDoubleRight />
                        <h5>

                            Etiam ut dictum dui, at sodales orci. Aenean malesuada
                        </h5>
                    </div>
                    <div className={styles.subTopics}>
                        <FaAngleDoubleRight />
                        <h5>

                            Maecenas sed arcu laoreet, tristique quam a, dignissim nunc.
                        </h5>
                    </div>
                    <div className={styles.subTopics}>
                        <FaAngleDoubleRight />
                        <h5>

                            Etiam ut dictum dui, at sodales orci. Aenean malesuada
                        </h5>
                    </div>
                </div>
                <h3>
                    Nunc sagittis dui a accumsan sollicitudin. Fusce eleifend pharetra velit.
                </h3>
                <h5>
                    Quisque pulvinar ligula nec mi varius, placerat imperdiet dolor facilisis. Maecenas sit amet molestie lorem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam ac enim vel augue sodales porttitor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras dapibus at nulla non hendrerit. Praesent vehicula tincidunt malesuada. Maecenas sed arcu laoreet, tristique quam a, dignissim nunc. Praesent sit amet auctor ex, ac aliquet massa. Sed vehicula, lorem nec feugiat interdum, arcu ex porttitor augue, et tincidunt justo sapien et purus. Sed eu nibh mauris.
                </h5>
            </div>
        </div>
    )
}

Privacy_policy.getLayout = function GetLayout(page) {
    return (
        <Layout img="/4.webp" title="Privacy policy">
            {page}
        </Layout>
    )
}

export default Privacy_policy