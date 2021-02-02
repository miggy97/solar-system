<template>
  <div>
    <router-link to="/">
      <span class="left">
        <span class="circle-left"></span>
        <span class="circle-right"></span>
      </span>
      <span class="right">
        <span class="circle-left"></span>
        <span class="circle-right"></span>
      </span>
    </router-link>
  </div>
</template>

<style scoped lang="scss">
  @mixin transition() {
    transition: all .4s cubic-bezier(.215,.61,.355,1);
}

div {
  a {
    width: 50px;
    height: 50px;
    position: absolute;
    right: 1.5vw;
    top: 3vh;
    background-color: #ffffff;
    border-radius: 50px;
    opacity: 1;
    @include transition();
    -webkit-box-shadow: 0px 0px 30px 0px rgba(247,149,29,0.5);
    -moz-box-shadow: 0px 0px 30px 0px rgba(247,149,29,0.5);
    box-shadow: 0px 0px 30px 0px rgba(247,149,29,0.5);
    
    & > span {
      background-color: #f5a700;
      display: block;
      height: 6px;
      border-radius: 6px;
      position: relative;
      @include transition();
      position: absolute;
      top: 55%;
      margin-top: -6px;
      left: 5px;
      width: 40px;
      display: -webkit-box;
      display: -moz-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-justify-content: space-between;
      justify-content: space-between;
      -moz-justify-content: space-between;
      -ms-justify-content: space-between;

      span {
        display: block;
        background-color: #ed7f00;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        @include transition();
        position: absolute;
        left: 0px;
        top: 0.4px;
      }

      &.left {
        transform: rotate(45deg);
        transform-origin: center;

        .circle-left {
          @include transition();
          margin-left: 0px;
        }

        .circle-right {
          @include transition();
          margin-left: 34.6px;
        }
      }

      &.right {
        transform: rotate(-45deg);
        transform-origin: center;

        .circle-left {
          @include transition();
          margin-left: 0;
        }

        .circle-right {
          @include transition();
          margin-left: 34.6px;
        }
      }
    }

    &:hover {
      & > span {
        background-color: #2faee0;
        @include transition();

        span {
          @include transition();
          background-color: #008ac9;
        }

        &.left {

          .circle-left {
            @include transition();
            margin-left: 34.6px;
          }

          .circle-right {
            @include transition();
            margin-left: 0;
          }
        }

        &.right {

          .circle-left {
            @include transition();
            margin-left: 34.6px;
          }

          .circle-right {
            @include transition();
            margin-left: 0;
          }
        }
      }
    }
  }
}
</style>