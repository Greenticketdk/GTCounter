var GT = GT || {Views: {}};
(function (GT) {
    GT.Views.Countdown = function (options) {
        var CountDownCircle = function (ctx, x, y, radius, lineWidth, color) {
            if(!ctx || ctx === undefined) {
                throw 'Must provide context parameter';
            }
            this.ctx = ctx;
            this.x = x || 600;
            this.y = y || 200;
            this.radius = radius || 30;
            this.lineWidth = lineWidth || 5;
            this.color = color || '#E1F6BC';

            this.draw = function (count) {
                this.ctx.beginPath();
                this.ctx.arc(this.x, this.y, this.radius, 0, count * Math.PI, false);
                this.ctx.lineWidth = this.lineWidth;
                this.ctx.strokeStyle = this.color;
                this.ctx.stroke();
            };
        };

        var CountdownNumber = function (ctx, x, y, size, txt, color) {
            if(!ctx || ctx === undefined) {
                throw 'Must provide context parameter';
            }
            this.ctx = ctx;
            this.x = x || 200;
            this.y = y || 200;
            this.txt = txt || 'min';
            this.color = color || '#ACD762';
            this.size = size || 50;

            this.draw = function (val) {
                this.ctx.textAlign = 'center';
                this.ctx.textBaseline = 'middle';
                this.ctx.font = this.size + "px Helvetica Neue";
                this.ctx.fillStyle = this.color;
                this.ctx.fillText(val, this.x, this.y);
                this.ctx.font = (this.size / 2) + "px Helvetica Neue";
                this.ctx.fillText(this.txt, this.x, this.y + 25);
            };
        };

        var mergeOptions =  function (obj1,obj2) {
            var obj3 = {};
            for (var attrname in obj1) { obj3[attrname] = obj1[attrname]; }
            for (var attrname1 in obj2) { obj3[attrname1] = obj2[attrname1]; }
            return obj3;
        };

        var reload = function () {
            canvas.width = canvas.width;
            var now = new Date();
            var milliseconds = new Date(self.settings.goal - now).getMilliseconds();
            var delta = Math.abs(self.settings.goal - now) / 1000;
            var minutes = (delta / 60) % 60;

            delta -= Math.floor(minutes) * 60;

            var seconds = delta % 60;
            var minCount = (minutes / 10) * 2;
            var secCount = (seconds / 60) * 2;
            var milliCount = (milliseconds / 1000) * 2;
            if (self.settings.showCircles) {
                minuteCircle.draw(minCount);
                secondCircle.draw(secCount);
                milliCircle.draw(milliCount);
            }
            secondText.draw((Math.floor(seconds) < 10 ? '0'+Math.floor(seconds) : Math.floor(seconds)));    
            minuteText.draw(Math.floor(minutes));

        };

        this.start = function () {
            setInterval(reload, 0);
            if (!self.settings.showCircles) {
                self.ctx.textAlign = 'center';
                self.ctx.textBaseline = 'middle';
                self.ctx.font = 27 + "px Helvetica Neue";
                self.ctx.fillStyle = 'black';
                self.ctx.fillText(':dasdas', 0, 0);
            }
        };

        this.settings = {
            goal: new Date(new Date().getTime() + 600000),
            id: 'gt-counter-canvas',
            container: 'gt-counter-container',
            minuteColor: '#ACD762',
            secondColor: '#CCEF91',
            milliColor: '#E1F6BC',
            width: 300,
            height: 300,
            minText: 'min',
            secText: 'sec',
            textColor: '#ACD762',
            showCircles: true
        };
        this.settings = mergeOptions(this.settings, options);
        var canvas = document.createElement('canvas');
        canvas.setAttribute('id', this.settings.id);
        canvas.setAttribute('width', this.settings.width);
        canvas.setAttribute('height', this.settings.height);
        var cont = document.getElementById(this.settings.container);
        cont.appendChild(canvas);
        this.ctx = canvas.getContext("2d");

        var counterx = (canvas.width / 3) * 1.75;
        var countery = canvas.height / 2;
        var numberx = (this.settings.showCircles ? (counterx - (canvas.width / 2)) : 10);
        var area = canvas.width * canvas.height;
        var textSize = (this.settings.showCircles ? (Math.sqrt(area) / 7) : this.settings.height);
        var minuteCircle = new CountDownCircle(this.ctx, counterx, countery, Math.sqrt(area) / 3, Math.sqrt(area) / 20, this.settings.minuteColor);
        var secondCircle = new CountDownCircle(this.ctx, counterx, countery, Math.sqrt(area) / 4.5, Math.sqrt(area) / 30, this.settings.secondColor);
        var milliCircle = new CountDownCircle(this.ctx, counterx, countery, Math.sqrt(area) / 9, Math.sqrt(area) / 60, this.settings.milliColor);
        var minuteText = new CountdownNumber(this.ctx, (this.settings.showCircles ? numberx : numberx + 30), (this.settings.showCircles ? countery - 40 : countery), textSize, this.settings.minText, this.settings.textColor);
        var secondText = new CountdownNumber(this.ctx, (this.settings.showCircles ? numberx : numberx + 30 + textSize), (this.settings.showCircles ? countery + 40 : countery), textSize, this.settings.secText, this.settings.textColor);
        var self = this;
    };
})(GT);
