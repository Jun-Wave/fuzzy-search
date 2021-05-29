<template>
  <div class="about">
    <input type="text" v-model="search_value" @input="debounceOnInput" />
  </div>
</template>

<script>
import _debounce from "@/utils/index";
export default {
  data() {
    return {
      search_value: "",
    };
  },
  methods: {
    debounceOnInput: _debounce(function () {
      this.onInput();
    }, 300),
    onInput() {
      if(this.search_value==="") {
        return;
      }
      //组装查询地址
      const sugurl =
        `http://suggestion.baidu.com/su?wd=${this.search_value}&cb=window.baidu.sug`;
      //定义回调函数
      window.baidu = {
        sug: function (json) {
          console.log(json.s);
        },
      };
      //动态添加JS脚本
      var script = document.createElement("script");
      script.src = sugurl;
      //添加script标签
      document.body.appendChild(script);
      //添加完成并发送请求后 删除标签
      script.onload = function () {
        document.body.removeChild(script);
      };
    },
  },
};
</script>

