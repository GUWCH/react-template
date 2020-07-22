import React, { Component } from 'react'

const menu = [
  { title: '首页', icon: 'shouye', link: '/' },
  { title: '购物车', icon: 'cart', link: '/cart' },
  { title: '订单列表', icon: 'dingdanliebiao', link: '/orderList' },
  { title: '用户中心', icon: 'wode', link: '/user' },
]

export default class BottomNav extends Component {
  render() {
    return (
      <div>
        <h3>BottomNav</h3>
        {menu.map((item, index) => (
          <MenuItem key={item.link} {...item} />
        ))}
      </div>
    )
  }
}

function MenuItem({ title, icon }) {
  return (
    <div>
      <span>{title}</span>
    </div>
  )
}
