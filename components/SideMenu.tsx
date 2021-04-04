// import '../App.css'
import { Menu } from 'antd'

// submenu keys of first level

const SideMenu = (): JSX.Element => {
  return (
    <Menu className='side-menu' defaultSelectedKeys={['1']} mode='inline'>
      <Menu.Item key='1'>Option 1</Menu.Item>
      <Menu.Item key='2'>Option 2</Menu.Item>
      <Menu.Item key='10'>Option 10</Menu.Item>
      <Menu.Item key='11'>Option 11</Menu.Item>
      <Menu.Item key='12'>Option 12</Menu.Item>
    </Menu>
  )
}
export default SideMenu
