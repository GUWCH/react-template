import React, { Component } from 'react'
import styles from './index.module.scss'

console.log(styles)

const menu = [
  {
    title: '首页',
    icon: 'shouye',
    link: '/',
  },
  {
    title: '购物车',
    icon: 'gouwuchezhengpin',
    link: '/cart',
  },
  {
    title: '订单列表',
    icon: 'dingdan',
    link: '/orderList',
  },
  {
    title: '用户中心',
    icon: 'wode',
    link: '/user',
  },
]

export default class BottomNav extends Component {
  render() {
    const { activenum, setActivenum } = this.props
    return (
      <div className={styles.main}>
        {menu.map((item, index) => (
          <MenuItem
            key={item.link}
            {...item}
            activenum={activenum === index}
            onClick={() => {
              setActivenum(index)
            }}
          />
        ))}
      </div>
    )
  }
}

function MenuItem({ title, icon, activenum, onClick }) {
  return (
    <div
      className={`${styles.menuItem} ${activenum ? styles.selected : ''}`}
      onClick={onClick}
    >
      <span className={`icon iconfont icon-${icon}`}></span>
      <span className={styles.title}> {title} </span>
    </div>
  )
}
