/** @type {HTMLCanvasElement}  */

import { useEffect, useRef } from 'react';

const Trees = () => {
    const ref = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        let canvas: any = ref.current;
        let ctx: any = canvas!.getContext("2d");;
        let trees: any[] = [];
        let w = canvas.width = window.innerWidth;
        let h = canvas.height = window.innerHeight;
        let branchChance = [0.08, 0.09, 0.10, 0.11, 0.12, 0.15, 0.3];
        let branchAngles = [20, 25, 30, 35];

        interface Tree {
            x: number;
            y: number;
            branchs: any[];
        }

        class Tree {
            constructor(x: number) {
                this.x = x;
                this.y = h;
                this.branchs = [];
                this.addBranch(this.x, this.y, getRandomInt(5, 7), 180);
            }
            addBranch(x: any, y: any, radius: any, angle: any) {
                this.branchs.push(new Branch(x, y, radius, angle));
            }
            draw() {
                this.branchs.map((b) => {
                    b.draw();
                })
            }
            update() {
                this.branchs.map((b) => {
                    b.update();

                    if (b.radius > 0 && b.progress > 0.4 && Math.random() < b.branchChance && b.branchCount < 3) {
                        let newBranch = {
                            x: b.x,
                            y: b.y,
                            radius: b.radius - 1,
                            angle: b.angle + branchAngles[Math.floor(Math.random() * branchAngles.length)] * b.branchDirection
                        }
                        this.addBranch(newBranch.x, newBranch.y, newBranch.radius, newBranch.angle);

                        b.branchCount++;
                        b.branchDirection *= -1;
                    }
                })
            }
        }

        interface Branch extends Tree {
            radius: number;
            angle: number;
            sx: number;
            sy: number;
            length: number;
            progress: number;
            branchChance: number;
            branchCount: number;
            branchDirection: number;
        }

        class Branch {
            constructor(x: number, y: number, radius: number, angle: number) {
                this.x = x;
                this.y = y;
                this.radius = radius;
                this.angle = angle;
                this.branchReset();
            }
            branchReset() {
                this.sx = this.x;
                this.sy = this.y;
                this.length = this.radius * 20;
                this.progress = 0;
                this.branchChance = branchChance[7 - this.radius];
                this.branchCount = 0;
                this.branchDirection = (Math.random() < 0.5) ? -1 : 1;
            }
            draw() {
                if (this.progress > 1 || this.radius <= 0) return;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(85, 99, 124, 0.5)`;
                ctx.fill();
                ctx.closePath();
            }
            update() {
                let radian = (Math.PI / 180) * this.angle;
                this.x = this.sx + (this.length * this.progress) * Math.sin(radian);
                this.y = this.sy + (this.length * this.progress) * Math.cos(radian);

                if (this.radius == 1) {
                    this.progress += .05;
                } else {
                    this.progress += .1 / this.radius;
                }
		
                if (this.progress > 1) {
                    this.radius -= 1;
                    this.angle += (Math.floor(Math.random() * 3) - 1) * 10;
                    this.branchReset();
                }
            }
        }

        function init() {
            handleResize();
            animationLoop();
        }

        function addTree(e: MouseEvent) {
            if (e.clientX !== undefined) {
                trees.push(new Tree(e.clientX));
            }
        }

        function handleResize() {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
            trees = [];
            trees.push(new Tree(w * 0.7));
        }

        function animationLoop() {
            drawScene();
            requestAnimationFrame(animationLoop);
        }

        function drawScene() {
            trees.map((t: any) => {
                t.update();
                t.draw();
            })
        }

        function getRandomInt(min: any, max: any) {
            return Math.round(Math.random() * (max - min)) + min;
        }

        init()

        window.addEventListener("resize", handleResize);
        window.addEventListener("click", addTree);

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("click", addTree);
        }
    }, [])
    
    return (
        <div className='fixed z-20 top-[-50%] left-0 w-screen h-[50vh]'>
            <canvas ref={ref} className="w-full h-full" />
        </div>
    );
}

export default Trees;