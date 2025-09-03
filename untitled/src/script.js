document.addEventListener('DOMContentLoaded', function() {

    const canvas = document.getElementById('networkCanvas');

    const ctx = canvas.getContext('2d');

    

    // تعيين حجم Canvas ليتناسب مع الشاشة

    function resizeCanvas() {

        canvas.width = window.innerWidth;

        canvas.height = window.innerHeight;

    }

    

    resizeCanvas();

    window.addEventListener('resize', resizeCanvas);

    

    // إعداد شبكة الخطوط

    class Node {

        constructor(x, y) {

            this.x = x;

            this.y = y;

            this.vx = (Math.random() - 0.5) * 0.5;

            this.vy = (Math.random() - 0.5) * 0.5;

            this.radius = Math.random() * 2 + 1;

        }

        

        update() {

            this.x += this.vx;

            this.y += this.vy;

            

            if (this.x < 0 || this.x > canvas.width) this.vx *= -1;

            if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

        }

        

        draw() {

            ctx.beginPath();

            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);

            ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';

            ctx.fill();

        }

    }

    

    // إنشاء العقد

    const nodes = [];

    const nodeCount = 50;

    

    for (let i = 0; i < nodeCount; i++) {

        const x = Math.random() * canvas.width;

        const y = Math.random() * canvas.height;

        nodes.push(new Node(x, y));

    }

    

    // رسم الخطوط بين العقد

    function drawLines() {

        for (let i = 0; i < nodes.length; i++) {

            for (let j = i + 1; j < nodes.length; j++) {

                const dx = nodes[i].x - nodes[j].x;

                const dy =