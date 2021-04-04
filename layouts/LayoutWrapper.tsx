import React from 'react'
import DefaultLayout from './DefaultLayout'

const LAYOUTS = {
  default: DefaultLayout
}

interface LayoutWrapperProps {
  children: React.ReactNode
  layoutType?: keyof typeof LAYOUTS
}

const LayoutWrapper = ({
  children,
  layoutType = 'default'
}: LayoutWrapperProps): JSX.Element => {
  const Layout = LAYOUTS[layoutType]

  return <Layout>{children}</Layout>
}

export default LayoutWrapper
