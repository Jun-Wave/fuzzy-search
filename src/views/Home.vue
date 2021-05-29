<template>
  <div class="home">
    <input type="text" v-model="search_value" @input="debounceOnInput" />
  </div>
</template>

<script>
import axios from "axios";
import _debounce from "@/utils/index"
export default {
  name: "Home",
  components: {},
  data() {
    return {
      search_value: "",
    };
  },
  methods: {

    debounceOnInput: _debounce(function() {
      this.onInput();
    },300),
    onInput() {
      if (this.search_value !== "") {
        axios({
          method: "get",
          url:
            "/myapi" +
            `/AS/Suggestions?&mkt=zh-cn&qry=${this.search_value}&cvid=424B27801E9A4B5CB75333B5C1DB2A0A`,
        }).then((res) => {
          var regex = /(?<=query=")(.*?)(?=" stype)/gi;
          let arr = res.data.match(regex);
          if(null!==arr) {
            console.log(arr);
          }else {
            arr = []
          }
        });
      }
    },
  },
};
</script>
