# new Vue()做了什么？

_init():

组件实例初始化属性,比如$children，

处理自定义事件

处理插槽信息

最重要的是组件状态初始化，响应式等事情

两个生命周期钩子的调用(before created created)