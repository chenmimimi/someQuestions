// components/swipe-action/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    leftText: {
      type: 'string',
      value: '处理',
    },
    rightText: {
      type: 'string',
      value: '删除'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLeftTap(e) {
      this.triggerEvent('onLeftTap', {}, {});
    },
    onRightTap(e) {
      this.triggerEvent('onRightTap', {}, {});
    }
  }
})
