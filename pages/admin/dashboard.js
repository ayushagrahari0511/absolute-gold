import { useState, useEffect } from 'react'
import AdminLayout from "../../shared/AdminLayout/AdminLayout"
import styles from '../../styles/Dashboard.module.css'
import Link from 'next/link'
import CardDisplay from "../../shared/CardDisplay/CardDisplay"
import { IoStorefrontOutline } from 'react-icons/io5'
import { TbShoppingCart } from 'react-icons/tb'
import { FaRegUser } from "react-icons/fa"
import { HiOutlineUsers } from 'react-icons/hi'
import { ResponsiveContainer, BarChart, XAxis, Tooltip, Bar, Cell } from 'recharts'
import CounterUp from '../../shared/CounterUp'

const tableData = [
  {
    name: "Avatar",
    rank: 1,
    year: 2009,
    rating: "83%",
    gross: "$2.7B"
  },
  {
    name: "Titanic",
    rank: 2,
    year: 1997,
    rating: "88%",
    gross: "$2.1B"
  }, {
    name: "The Avengers",
    rank: 3,
    year: 2012,
    rating: "92%",
    gross: "$1.5B"
  }, {
    name: "Harry Potter and the Deathly Hallows-Part 2",
    rank: 4,
    year: 2011,
    rating: "83%",
    gross: "$1.2B"
  }, {
    name: "Frozen",
    rank: 5,
    year: 2013,
    rating: "83%",
    gross: "$2.7B"
  },
]

const data = [
  {
    name: "Jan",
    Visits1: 320,
    Visits2: 556
  },
  {
    name: "Feb",
    Visits1: 540,
    Visits2: 349
  }, {
    name: "Mar",
    Visits1: 1284,
    Visits2: 1342
  }, {
    name: "Apr",
    Visits1: 899,
    Visits2: 895
  }, {
    name: "May",
    Visits1: 1670,
    Visits2: 320
  }, {
    name: "Jun",
    Visits1: 413,
    Visits2: 540
  }, {
    name: "Jul",
    Visits1: 755,
    Visits2: 1284
  }, {
    name: "Aug",
    Visits1: 980,
    Visits2: 899
  }, {
    name: "Sep",
    Visits1: 678,
    Visits2: 1670
  }, {
    name: "Oct",
    Visits1: 556,
    Visits2: 413
  }, {
    name: "Nov",
    Visits1: 349,
    Visits2: 756
  }, {
    name: "Dec",
    Visits1: 1342,
    Visits2: 980
  },
]

const Dashboard = () => {
  const [timing, setTiming] = useState("Yearly");
  const [focusBar, setFocusBar] = useState(null)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, []);

  return (
    <>
      <div className={styles.wrapper}>


        {/* Welcome Message starts here---------------
        ------------------------- */}
        <div className={styles.welcome}>
          <div className={styles.welcome_left}>
            <h2>Hi, welcome back!</h2>
            <h6>Last login was 23 hours ago.</h6>
          </div>
          <div className={styles.welcome_right}>
            <Link href="/">
              Create Report
            </Link>
          </div>
        </div>


        {/* Statistics starts here--------------
        ----------------- */}
        {
          isMounted &&
          <div className={styles.statistics}>
            <div className={styles.quickOverview}>
              <CardDisplay
                icon={<IoStorefrontOutline />}
                iconColor="#fff"
                total="6337"
                currency="$"
                totalColor="#fff"
                titleColor="#fff"
                title="Orders Value"
                backgroundColor="#EDB42D" />
              <CardDisplay
                icon={<TbShoppingCart />}
                iconColor="#fff"
                total="492"
                currency="$"
                totalColor="#fff"
                titleColor="#fff"
                title="Average Order"
                backgroundColor="#9A6C38" />
              <CardDisplay
                icon={<TbShoppingCart />}
                iconColor="#fff"
                total="7248"
                totalColor="#fff"
                titleColor="#fff"
                title="Daily Visits"
                backgroundColor="#DAC36E" />
              <CardDisplay
                icon={<FaRegUser />}
                iconColor="#ccc"
                total="325"
                totalColor="#9a6c38"
                titleColor="#000"
                title="New Users"
                backgroundColor="#fff" />
            </div>


            {/* Bar graph starts here ----------------
          ------------------------ */}
            <div className={styles.balance}>
              <div className={styles.button_wrapper}>
                <button className={timing === "Yearly" ? `${styles.button} ${styles.active}` : styles.button}
                  onClick={() => setTiming("Yearly")}>
                  Yearly
                </button>
                <button className={timing === "Monthly" ? `${styles.button} ${styles.active}` : styles.button}
                  onClick={() => setTiming("Monthly")}>
                  Monthly
                </button>
                <button className={timing === "Daily" ? `${styles.button} ${styles.active}` : styles.button}
                  onClick={() => setTiming("Daily")}>
                  Daily
                </button>
              </div>
              <h1>
                +$
                {<CounterUp total={1829} />}
              </h1>
              <p>Balance</p>
              <div className={styles.chart_wrapper}>
                <div className={styles.chart}>
                  <ResponsiveContainer width="99%" height="100%" debounce={(i) => console.log(i)} >
                    <BarChart
                      data={data}
                      barGap="10%"
                      onMouseMove={(state) => {
                        if (state.isTooltipActive) {
                          setFocusBar(state.activeTooltipIndex)
                        }
                        else {
                          setFocusBar(null)
                        }
                      }}
                      barCategoryGap="25%" >
                      <XAxis dataKey="name" axisLine={false} tickLine={false} />

                      <Bar dataKey="Visits1" fill="#137DFC">
                        {
                          data.map((entry, index) => (
                            <Cell key={index} fill={focusBar === index ? "#137DFC" : "#c3cffe"} />
                          ))
                        }
                      </Bar>
                      <Bar dataKey="Visits2" fill="#68E2AB">
                        {
                          data.map((entry, index) => (
                            <Cell key={index} fill={focusBar === index ? "#68E2AB" : "#BFF4E5"} />
                          ))
                        }
                      </Bar>

                      <Tooltip content={<CustomTooltip />} cursor={false} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>


            {/* Table section starts here--------------
          --------------- */}
            <div className={styles.table_wrapper}>
              <div className={styles.table_header}>
                TableSaw
              </div>
              <table >
                <tr className={styles.table_row_header}>
                  <th>Movie Title</th>
                  <th>Rank</th>
                  <th>Year</th>
                  <th>Rating</th>
                  <th>Gross</th>
                </tr>
                {
                  tableData.map((data, i) => (
                    <tr key={i}>
                      <td>
                        {data.name}
                      </td>
                      <td>{data.rank}</td>
                      <td>{data.year}</td>
                      <td>{data.rating}</td>
                      <td>{data.gross}</td>
                    </tr>
                  ))
                }
              </table>
            </div>
          </div>
        }
      </div>
    </>
  )
}

// Custome tooltip for bar chart-----------
// -----------------
function CustomTooltip({ active, payload, label }) {
  if (active) {
    return (

      <div className={styles.tooltip}>
        <h4>{label}</h4>
        {
          payload.map((item, i) => (
            <div className={styles.data} key={i}>
              <div
                style={{
                  width: "1.5rem",
                  height: "1.5rem",
                  background: item.color,
                  border: "1px solid #fff"
                }}
              >
              </div>
              {item.name} : {item.value}
            </div>
          ))
        }
      </div>
    )
  }
}

// Layout here ------------------------
// ------------------
Dashboard.getLayout = function GetLayout(page) {
  return (
    <AdminLayout>
      {page}
    </AdminLayout>
  )
}

export default Dashboard