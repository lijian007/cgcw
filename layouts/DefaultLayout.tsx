import { Col, Divider, Layout, Row } from 'antd'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import CgcwFooter from '../components/CgcwFooter'
import SideMenu from '../components/SideMenu'
import TopMenu, { TopMenuLink } from '../components/TopMenu'

const zhLinks: TopMenuLink[] = [
  { to: '/', text: '主页' },
  {
    text: '新朋友',
    id: 'info',
    links: [
      { to: '/info/pastor_message', text: '牧师寄语' },
      { to: '/info/introduction', text: '介绍' },
      { to: '/info/meeting_info', text: '聚会时间地点' },
      { to: '/info/faq', text: '常见问题' }
    ]
  },

  {
    text: '教会事工',
    id: 'ministries',
    links: [
      { to: '/ministries/events', text: '团契生活' },
      { to: '/ministries/clark', text: 'Clark' },
      { to: '/ministries/wpi', text: 'WPI' },
      { to: '/ministries/timothy', text: 'Timothy' },
      { to: '/ministries/youth', text: '青年事工' },
      { to: '/ministries/children', text: '儿童事工' },
      { to: '/ministries/enoch', text: 'Enoch' }
    ]
  },
  {
    text: '资源',
    id: 'resources',
    links: [
      { to: 'resources/sermon', text: '讲道信息' },
      { to: 'resources/videos', text: '视屏' },
      { to: 'resources/calendar', text: '日历' },
      { to: 'resources/member', text: 'Member' }
    ]
  },
  { to: '/donation', text: '奉献支持' },
  { to: '/covid', text: '新冠肺炎' }
]

const enLinks: TopMenuLink[] = [
  { to: '/', text: 'Home' },
  {
    text: 'New Here?',
    id: 'info',
    links: [
      { to: '/info/pastor_message', text: 'Pastor Greetings' },
      { to: '/info/introduction', text: 'What to expect' },
      { to: '/info/meeting_info', text: 'Time & Directions' },
      { to: '/info/faq', text: 'FAQ' }
    ]
  },

  {
    text: 'Community Groups',
    id: 'ministries',
    links: [
      { to: '/ministries/events', text: 'Events' },
      { to: '/ministries/clark', text: 'Clack' },
      { to: '/ministries/wpi', text: 'WPI' },
      { to: '/ministries/timothy', text: 'Timothy' },
      { to: '/ministries/youth', text: 'Youth' },
      { to: '/ministries/children', text: 'Children' },
      { to: '/ministries/enoch', text: 'Enoch' }
    ]
  },
  {
    text: 'Resources',
    id: 'resources',
    links: [
      { to: 'resources/sermon', text: 'Sermons' },
      { to: 'resources/videos', text: 'Video Library' },
      { to: 'resources/calendar', text: 'Calendar' }
    ]
  },
  { to: '/donation', text: 'Donations' },
  { to: '/parking', text: 'Parking' },
  { to: '/covid', text: 'Covid' }
]

const { Header, Content, Footer } = Layout

interface DefaultLayoutProps {
  children: React.ReactNode
}

const DefaultLayout = ({ children }: DefaultLayoutProps): JSX.Element => {
  const router = useRouter()
  return (
    <Layout className='layout'>
      <Header>
        <div className='header-row'>
          <div className='logo-container'>
            <img
              className='logo-image'
              src='/images/logo.png'
              alt='吾思德基督福音教會 : Christian Gospel Church in Worcester'
            />
          </div>
          <div className='language-selection-zone'>
            <span className='language-selection-text'>
              <Link
                locale={router.locale === 'zh' ? 'en' : 'zh'}
                href={router.asPath}
              >
                {router.locale === 'zh' ? 'en' : 'zh'}
              </Link>
            </span>
          </div>
        </div>
      </Header>

      <Content style={{ padding: '0 50px' }}>
        <div>
          <Content style={{ zIndex: -1 }}>
            <TopMenu links={router.locale === 'en' ? enLinks : zhLinks} />

            <Row justify='center'>
              <Col xs={{ span: 24, offset: 0 }} lg={{ span: 19, offset: 2 }}>
                {children}
              </Col>
              <Col xs={{ span: 24, offset: 0 }} lg={{ span: 2, offset: 1 }}>
                <SideMenu />
              </Col>
            </Row>
          </Content>
        </div>
      </Content>
      <Divider className='page-divider' />
      <Footer className='footer-box'>
        <CgcwFooter />
      </Footer>
    </Layout>
  )
}

export default DefaultLayout
