<template>
    <canvas id="bg-canvas"></canvas>
</template>
<script>
export default {
  data () {
    return {
      bgCanvas: {
        width: window.innerWidth,
        height: window.innerHeight,
        point: 10,
        canvas: null,
        context: null,
        line: {},
        circle: {},
        circleArr: []
      }
    };
  },
  mounted () {
    var self = this;
    // 获取画布
    self.bgCanvas.canvas = document.getElementById('bg-canvas');
    // 设置宽高
    self.bgCanvas.canvas.width = self.bgCanvas.width;
    self.bgCanvas.canvas.height = self.bgCanvas.height;
    // 获取绘图环境
    self.bgCanvas.context = self.bgCanvas.canvas.getContext('2d');
    // 笔触的颜色
    self.bgCanvas.context.strokeStyle = 'rgba(0, 0, 0, 0.01)';
    // 描边的宽度
    self.bgCanvas.context.strokeWidth = 1;
    // 填充的颜色
    self.bgCanvas.context.fillStyle = 'rgba(0, 0, 0, 0.09)';
    // 初始化背景
    self.canvasInit();
    setInterval(() => {
      for (var i = 0; i < self.bgCanvas.point; i++) {
        var circle = self.bgCanvas.circleArr[i];
        circle.x += circle.moveX;
        circle.y += circle.moveY;
        if (circle.x > self.bgCanvas.width) circle.x = 0;
        else if (circle.x < 0) circle.x = self.bgCanvas.width;
        if (circle.y > self.bgCanvas.height) circle.y = 0;
        else if (circle.y < 0) circle.y = self.bgCanvas.height;
      }
      self.draw();
    }, 20);
  },
  methods: {
    /**
     * 画线
     * x,y线条开始的x,y坐标;_x,_y线条结束的想x,y坐标;o,线条透明度
     * */
    Line: function (x, y, _x, _y, o) {
      const self = this;
      self.bgCanvas.line.beginX = x;
      self.bgCanvas.line.beginY = y;
      self.bgCanvas.line.closeX = _x;
      self.bgCanvas.line.closeY = _y;
      self.bgCanvas.line.o = o;
      // console.log('line:', self.bgCanvas.line);
    },
    /**
     * 画圆
     * x,y圆心坐标;r半径;moveX,moveY每帧移动xy的距离
     * */
    Circle: function (x, y, r, moveX, moveY) {
      const self = this;
      self.bgCanvas.circle.x = x;
      self.bgCanvas.circle.y = y;
      self.bgCanvas.circle.r = r;
      self.bgCanvas.circle.moveX = moveX;
      self.bgCanvas.circle.moveY = moveY;
    },
    /**
     * 生成max和min之间的随机数
     * */
    num: function (max, _min) {
      const min = arguments[1] || 0;
      return Math.floor(Math.random() * (max - min + 1) + min);
    },
    /**
     * 绘制原点
     * */
    drawCircle: function (context, x, y, r, moveX, moveY) {
      const self = this;
      self.Circle(x, y, r, moveX, moveY);
      // const circle = self.bgCanvas.circle;
      self.bgCanvas.context.beginPath();
      self.bgCanvas.context.arc(x, y, r, 0, 2 * Math.PI);
      self.bgCanvas.context.closePath();
      self.bgCanvas.context.fill();
      // console.log('draw circle:', x, y, r);
      return {
        x: x,
        y: y,
        r: r,
        moveX: moveX,
        moveY: moveY
      };
    },
    /**
     * 绘制线条
     * */
    drawLine: function (context, x, y, _x, _y, o) {
      const self = this;
      self.Line(x, y, _x, _y, o);
      const line = self.bgCanvas.line;
      self.bgCanvas.context.beginPath();
      // self.bgCanvas.context.strokeStyle = 'rgba(0, 0, 0, ' + line.o + ')';
      self.bgCanvas.context.strokeStyle = 'rgba(0, 0, 0, 0.008)';
      self.bgCanvas.context.moveTo(line.beginX, line.beginY);
      self.bgCanvas.context.lineTo(line.closeX, line.closeY);
      self.bgCanvas.context.closePath();
      self.bgCanvas.context.stroke();
      // console.log('draw line:', context, x, y, _x, _y, o);
    },
    /**
     * 每帧绘制
     * */
    draw: function () {
      const self = this;
      const point = self.bgCanvas.point;
      const _circleArr = self.bgCanvas.circleArr;
      self.bgCanvas.context.clearRect(0, 0, self.bgCanvas.width, self.bgCanvas.height);
      // self.debug.consoleCount ++;
      // if (self.debug.consoleCount <= 2) {
      //   console.log(self.debug.consoleCount, JSON.stringify(_circleArr));
      // }
      for (var i = 0; i < point; i++) {
        self.drawCircle(self.bgCanvas.context, _circleArr[i].x, _circleArr[i].y, _circleArr[i].r);
      }
      for (var j = 0; j < point; j++) {
        for (var k = 0; k < point; k++) {
          if (j + k < point) {
            var _a = Math.abs(_circleArr[j + k].x - _circleArr[j].x);
            var _b = Math.abs(_circleArr[j + k].y - _circleArr[j].y);
            var lineLength = Math.sqrt(_a * _a + _b * _b);
            var _c = 1 / lineLength * 7 - 0.009;
            var lineOpacity = _c > 0.03 ? 0.03 : _c;
            if (lineLength > 0) {
              self.drawLine(self.bgCanvas.context, _circleArr[j].x, _circleArr[j].y, _circleArr[j + k].x, _circleArr[j + k].y, lineOpacity);
            }
          }
        }
      }
    },
    /**
     * 初始化生成原点
     * */
    canvasInit: function () {
      var self = this;
      self.bgCanvas.circleArr = [];
      for (var i = 0; i < self.bgCanvas.point; i++) {
        self.bgCanvas.circleArr.push(self.drawCircle(self.bgCanvas.context, self.num(self.bgCanvas.width), self.num(self.bgCanvas.height), self.num(12, 2), self.num(10, -10) / 40, self.num(10, -10) / 40));
      }
      self.draw();
    }
  }
};
</script>

<style lang="less" scoped>
    #bg-canvas {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: -1;
    }
</style>

