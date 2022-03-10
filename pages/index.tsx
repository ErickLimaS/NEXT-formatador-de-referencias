import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { setLocal, setRefType1, setRefType2 } from '../redux/FormContext'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const { refType1, refType2,local } = useSelector((state:any) => state.allData);
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>

      <h1>Count: {refType1}</h1>
      <button onClick={() => dispatch(setRefType1('1'))}>+</button>

      <Link href={'/step1'}><a>teste</a></Link>
      
      <h1>Count: {local}</h1>
      <button onClick={() => dispatch(setLocal('oi'))}>+</button>

      
    </div>
  )
}

export default Home
