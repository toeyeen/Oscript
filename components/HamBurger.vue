<template>
  <div class="nav">
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}

/* Icon 1 */

.nav {
  width: 60px;
  height: 45px;
  position: relative;

  transform: rotate(0deg);

  transition: 0.5s ease-in-out;
  cursor: pointer;
}

.nav span {
  display: block;
  position: absolute;
  height: 9px;
  width: 100%;
  background: #d3531a;
  border-radius: 9px;
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.25s ease-in-out;
  -moz-transition: 0.25s ease-in-out;
  -o-transition: 0.25s ease-in-out;
  transition: 0.25s ease-in-out;
}

.nav span:nth-child(1) {
  top: 0px;
}

.nav span:nth-child(2),
.nav span:nth-child(3) {
  top: 18px;
}

.nav span:nth-child(4) {
  top: 36px;
}

.nav.open span:nth-child(1) {
  top: 18px;
  width: 0%;
  left: 50%;
}

.nav.open span:nth-child(2) {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}

.nav.open span:nth-child(3) {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

.nav.open span:nth-child(4) {
  top: 18px;
  width: 0%;
  left: 50%;
}
</style>
