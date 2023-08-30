
/*
* 绘制小球
* */
function drawBall(numhber) {
  var ballDom = document.createElement("div");
  ballDom.innerText = numhber;
  ballDom.style.width = "20px";
  ballDom.style.height = "20px";
  ballDom.style.border = "1px solid #ccc";
  ballDom.style.background = "#fcb5f7";
  ballDom.style.borderRadius = "50%";
  ballDom.style.position = "absolute";
  ballDom.style.textAlign = "center";
  ballDom.style.fontSize = "12px";

  return ballDom;
}


/**
 * js抛物线动画
 * @param  {[object]} origin [起点元素]
 * @param  {[object]} target [目标点元素]
 * @param  {[object]} element [要运动的元素]
 * @param  {[number]} a [抛物线弧度]
 * @param  {[number]} time [动画执行时间]
 * @param  {[function]} callback [抛物线执行完成后回调]
 */
class Parabola {
  constructor(config) {
    this.$ = selector => {
      return document.querySelector(selector);
    };
    this.b = 0;
    this.INTERVAL = 15;
    this.timer = null;

    this.config = config || {};
    // 起点
    this.origin = this.config.origin || null;
    // 终点
    this.target = this.config.target || null;
    // 小球里面的数字
    this.buy_num = this.config.buy_num || 1;

    // 曲线弧度
    this.radian = this.config.radian || 0.004;
    // 运动时间(ms)
    this.time = this.config.time || 1000;
    // 计算中心
    var origion_center_x = (this.origin.getBoundingClientRect().left + this.origin.getBoundingClientRect().right) / 2;
    var origion_center_y = (this.origin.getBoundingClientRect().top + this.origin.getBoundingClientRect().bottom) / 2;
    this.originX = origion_center_x;
    this.originY = origion_center_y;
    this.targetX = this.target.getBoundingClientRect().left;
    this.targetY = this.target.getBoundingClientRect().top;
    // 运动的元素
    this.element = this.draw_ball(this.buy_num);
    this.diffx = this.targetX - this.originX;
    this.diffy = this.targetY - this.originY;
    this.speedx = this.diffx / this.time;

    // 已知a, 根据抛物线函数 y = a*x*x + b*x + c 将抛物线起点平移到坐标原点[0, 0]，终点随之平移，那么抛物线经过原点[0, 0] 得出c = 0;
    // 终点平移后得出：y2-y1 = a*(x2 - x1)*(x2 - x1) + b*(x2 - x1)
    // 即 diffy = a*diffx*diffx + b*diffx;
    // 可求出常数b的值
    this.b =
      (this.diffy - this.radian * this.diffx * this.diffx) / this.diffx;

    this.element.style.left = `${this.originX}px`;
    this.element.style.top = `${this.originY}px`;
  }
  draw_ball(buy_num) {
    var ballDom = drawBall(buy_num);

    ballDom.style.top = `${this.originY}px`;
    ballDom.style.left = `${this.originX}px`;
    document.body.appendChild(ballDom);
    return ballDom;
  }
  // 确定动画方式
  moveStyle() {
    let moveStyle = 'position',
      testDiv = document.createElement('input');
    if ('placeholder' in testDiv) {
      ['', 'ms', 'moz', 'webkit'].forEach(function(pre) {
        var transform = pre + (pre ? 'T' : 't') + 'ransform';
        if (transform in testDiv.style) {
          moveStyle = transform;
        }
      });
    }
    return moveStyle;
  }

  move() {
    let start = new Date().getTime(),
      moveStyle = this.moveStyle(),
      _this = this;

    if (this.timer) return;
    this.element.style.left = `${this.originX}px`;
    this.element.style.top = `${this.originY}px`;
    this.element.style[moveStyle] = 'translate(0px,0px)';
    this.timer = setInterval(function() {
      if (new Date().getTime() - start > _this.time) {
        _this.element.style.left = `${_this.targetX}px`;
        _this.element.style.top = `${_this.targetY}px`;
        typeof _this.config.callback === 'function' &&
        _this.config.callback();
        clearInterval(_this.timer);
        _this.timer = null;
        return;
      }
      let x = _this.speedx * (new Date().getTime() - start);
      let y = _this.radian * x * x + _this.b * x;
      if (moveStyle === 'position') {
        _this.element.style.left = `${x + _this.originX}px`;
        _this.element.style.top = `${y + _this.originY}px`;
      } else {
        if (window.requestAnimationFrame) {
          window.requestAnimationFrame(() => {
            _this.element.style[moveStyle] =
              'translate(' + x + 'px,' + y + 'px)';
          });
        } else {
          _this.element.style[moveStyle] =
            'translate(' + x + 'px,' + y + 'px)';
        }
      }
    }, this.INTERVAL);
    return this;
  }
}

const change_shop_icon_num = (buy_num)=>{
  let shop_num_str = document.getElementById('shop_icon_number');
  const add_num = parseInt(shop_num_str.innerText) + parseInt(buy_num);
  shop_num_str.innerText = add_num.toString() ;
}
export function add_to_cart(origin_element, buy_num){
  const target_shop_icon = document.getElementById('this-shop-icon');
  let parabola = new Parabola({
    origin: origin_element,
    target: target_shop_icon,
    element: origin_element,
    buy_num: buy_num,
    callback: change_shop_icon_num(buy_num),
  });
  parabola.move();
}

// export default {add_cart_animation ,Parabola};
