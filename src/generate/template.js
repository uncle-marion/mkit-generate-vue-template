'use strict';

function humpToDash(str) {
  return str.replace(/([A-Z])/g,"-$1").toLowerCase();
}

module.exports = {
  jsTemplate: fileName => {
    return `'use strict';

export default {
  name: '${fileName}',
  props: [],
  data: {},
  methods: getMethods(),
  created: createdHandler,
  mounted: mountedHandler,
  updated: updatedHandler,
};

function getMethods() {
  return {};
}
function createdHandler() {}
function mountedHandler() {}`;
  },
  lessTemplate: fileName => {
    return `/* ${fileName} */
.${humpToDash(fileName)} {
  your code
}`;
  },
  vueTemplate: fileName => {
    return `<template>
  <div class="${humpToDash(fileName)}">
    your code
  </div>
</template>
<script src="./${fileName}.js"></script>
<style lang="less" src="./${fileName}.less"></style>`;
  },
};
