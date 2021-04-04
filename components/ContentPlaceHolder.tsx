import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './ContentPlaceHolder.module.less'

const ContentPlaceHolder = (): JSX.Element => {
  const location = useRouter()
  return (
    <div className={styles.ContentPlaceHolder}>
      <p>content place holder</p>
      <p>language: {location.locale}</p>
      <p>path: {location.asPath}</p>
      <p>
        <Link href='/login'>Login</Link>
      </p>
    </div>
  )
}

export default ContentPlaceHolder
