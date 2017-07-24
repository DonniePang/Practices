;
(function () {
    //模块私有方法
    function getTransform() {
        let transformer = ['transform', 'webkitTransform', 'MozTransform', 'msTransform', 'OTransform'],
            transform = '',
            divStyle = document.createElement('div').style,

            i = 0,
            len = transformer.length;
        for (; i < len; i++) {
            if (transformer[i] in divStyle) {
                return transform = transformer[i]
            }
        }
        return transform;
    }

    let transform = getTransform();

    function Drag(selector) {
        this.elem = document.querySelector(selector);
        this.startX = 0;
        this.stratY = 0;
        this.sourceX = 0;
        this.sourceY = 0;

        this.init();
    }

    Drag.prototype = {
        constructor: Drag,

        init: function () {
            this.setDrag()
        },

        getStyle: function (property) {
            return window.getComputedStyle(this.elem)[property];
        },

        getTargetPos: function () {
            let pos = {
                x: 0,
                y: 0
            };
            let transformValue = this.getStyle(transform);
            if (transformValue === "none") {
                this.elem.style[transform] = 'tranlate(0, 0)';
                return pos;
            } else {
                let temp = transformValue.match(/-?\d+/g);
                return pos = {
                    x: parseInt(temp[4]),
                    y: parseInt(temp[5])
                }
            }
        },

        setTargetPos: function (pos) {
            this.elem.style.transform = `translate(${pos.x}px, ${pos.y}px)`
        },

        setDrag: function () {
            
            let that = this;//注意addEventListener会改变this的指向
            
            this.elem.addEventListener('mousedown', start);

            function start(event) {

                that.startX = event.clientX;
                that.startY = event.clientY;

                let pos = that.getTargetPos();

                that.sourceX = pos.x;
                that.sourceY = pos.y;

                that.elem.addEventListener('mousemove', move);
                that.elem.addEventListener('mouseup', end);
            }

            function move(event) {
                let currentX = event.clientX,
                    currentY = event.clientY;
                let distanceX = currentX - that.startX,
                    distanceY = currentY - that.startY;
                that.setTargetPos({
                    x: (that.sourceX + distanceX),
                    y: (that.sourceY + distanceY)
                })
            }

            function end(event) {
                that.elem.removeEventListener('mousemove', move);
                that.elem.removeEventListener('mouseup', end);
            }
        },

    }

    window.Drag = Drag;

})()