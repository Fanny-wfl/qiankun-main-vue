function onClick() {
  alert('qiankun 子应用')
}

const render = () => {
  document.getElementById('purehtml-container').innerHTML = 'Hello, render with jQuery'
  document.getElementById('title').addEventListener('click', () => {
    onClick()
  })
  return Promise.resolve()
}

;((global) => {
  global['app-purehtml'] = {
    bootstrap: () => {
      console.log('purehtml bootstrap')
      return Promise.resolve()
    },
    mount: () => {
      console.log('purehtml mount')
      return render()
    },
    unmount: () => {
      console.log('purehtml unmount')
      return Promise.resolve()
    },
  }
})(window)
