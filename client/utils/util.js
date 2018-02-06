const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}


// 显示繁忙提示
const showBusy = text => wx.showToast({
    title: text,
    icon: 'loading',
    duration: 10000
})

// 显示成功提示
const showSuccess = text => wx.showToast({
    title: text,
    icon: 'success'
})

// 显示失败提示
const showModel = (title, content) => {
    wx.hideToast();

    wx.showModal({
        title,
        content: JSON.stringify(content),
        showCancel: false
    })
}

//获得可用屏幕宽高
const getClientSize = ()=>{
  const w = wx.getSystemInfoSync().windowWidth;
  const h = wx.getSystemInfoSync().windowHeight;
  return {
    width:w,
    height:h
  }
}



module.exports = { formatTime, showBusy, showSuccess, showModel, getClientSize }
