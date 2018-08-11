##  vue http请求说明：

1. axios        一个发送http请求的组件库
2. vue-axios    一个 集成axios到vue中的 集成器

集成axios 方式1：
main.js:
```ecmascript 6
	import {post,fetch,patch,put,http} from './http.js'
	
	Vue.prototype.$post = post;
	Vue.prototype.$fetch = fetch;
	Vue.prototype.$patch = patch;
	Vue.prototype.$put = put;
	Vue.prototype.$http = http;
```

说明：
> 上述方式目的是为了在全局使用 axios。所以我们使用原型的特性，在一个Vue的原型上绑定一个引用(在这里，我们使用原型绑定了多个对象)。

集成axios 方式2：
使用 vue-axios
main.js:
```ecmascript 6
	import  Vue from 'vue'
	import axios from 'axios'
	import  VueAxios from 'vue-axios'
	Vue.use(VueAxios,axios)
```
说明：
> 上述方式目的也是为了全局使用 axios。

vue-axios只有一个文件，会在文末尾贴上来，使用方式为：
```ecmascript 6
Vue.axios.get(api).then((response) => {
  console.log(response.data)
})
// 注意：这里的this等同于Vue对象
this.axios.get(api).then((response) => {
  console.log(response.data)
})
// 注意：这里的this等同于Vue对象
this.$http.get(api).then((response) => {
  console.log(response.data)
})
```

>仔细看下文，可以发现，vue-axios目的是为了统一开发规范，毕竟原型的定义是一个写死的步骤，
甚至于有的人可能压根没有想到使用利用Vue对象的(反正我没有想到这个操作)原型做引用。





```javascript
(function () {

/**
 * Install plugin
 * @param Vue
 * @param axios
 */

function plugin(Vue, axios) {

  if (plugin.installed) {
    return
  }
  plugin.installed = true

  if (!axios) {
    console.error('You have to install axios')
    return
  }

  Vue.axios = axios

  Object.defineProperties(Vue.prototype, {

    axios: {
      get() {
        return axios
      }
    },

    $http: {
      get() {
        return axios
      }
    }

  })
}

if (typeof exports == "object") {
  module.exports = plugin
} else if (typeof define == "function" && define.amd) {
  define([], function(){ return plugin })
} else if (window.Vue && window.axios) {
  Vue.use(plugin, window.axios)
}

})();

```
