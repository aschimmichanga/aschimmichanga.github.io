import { useEffect, useRef } from 'react';
import * as Matter from 'matter-js';
import DatadogBubble from '~/assets/bubbles/datadog_bubble.svg';
import FigmaBubble from '~/assets/bubbles/figma_bubble.svg';
import FoxgloveBubble from '~/assets/bubbles/foxglove_bubble.svg';
import LinkedinBubble from '~/assets/bubbles/linkedin_bubble.svg';
import FlxderBubble from '~/assets/bubbles/flxder_bubble.svg';

function BubbleStack() {
    const sceneReference = useRef(null);

    useEffect(() => {
        // Create a physics engine
        const engine = Matter.Engine.create();

        // Set up the renderer to use the sceneReference
        const renderer = Matter.Render.create({
            element: sceneReference.current,
            engine: engine,
            options: {
                width: 800,
                height: 600,
                wireframes: false,
                background: 'transparent',
                showBody: (engine, body, context) => {
                    context.beginPath();
                    context.arc(body.position.x, body.position.y, body.circleRadius, 0, 2 * Math.PI);
                    context.fillStyle = body.render.fillStyle; // Use the fillStyle set on the body
                    context.fill();
                }
            }
        });

        // Create physics representations of the bubbles
        const bubbles = [
            Matter.Bodies.circle(500, 200, 175, { restitution: 0.8, render: { fillStyle: 'transparent' } },),
            Matter.Bodies.circle(600, 150, 150, { restitution: 0.8, render: { fillStyle: 'transparent' } },),
            Matter.Bodies.circle(550, 300, 50, { restitution: 0.8, render: { fillStyle: 'transparent' } },),
            Matter.Bodies.circle(600, 300, 125, { restitution: 0.8, render: { fillStyle: 'transparent' } },),
            Matter.Bodies.circle(550, 300, 40, { restitution: 0.8, render: { fillStyle: 'transparent' } },)
        ];

        // Create ground
        const ground = Matter.Bodies.rectangle(700, 700, 6000, 60, { isStatic: true, render: { fillStyle: 'transparent' } });

        // Create left and right walls
        const wallThickness = 60; // Adjust thickness as needed
        const leftWall = Matter.Bodies.rectangle(-wallThickness / 2, 600, wallThickness, renderer.options.height + 200, { isStatic: true });
        const rightWall = Matter.Bodies.rectangle(800, 600, wallThickness, renderer.options.height + 1000, { isStatic: true, render: { fillStyle: 'transparent' } });


        // Add bodies to the world
        Matter.World.add(engine.world, [...bubbles, ground, leftWall, rightWall]);

        // Run the engine
        Matter.Runner.run(engine);

        // Run the renderer
        Matter.Render.run(renderer);

        // Update loop to move the SVG elements
        Matter.Events.on(engine, 'afterUpdate', () => {
            bubbles.forEach((bubble, index) => {
                const svgElement = document.getElementById(`bubble${index}`);
                if (svgElement) {
                    svgElement.style.transform = `translate(${bubble.position.x - bubble.circleRadius}px, ${bubble.position.y - bubble.circleRadius}px)`;
                }
            });
        });

        return () => {
            Matter.Render.stop(renderer);
            Matter.World.clear(engine.world);
            Matter.Engine.clear(engine);
        };
    }, []);

    return (
        <div id="matterContainer" ref={sceneReference} className="relative h-screen">
            <img src={DatadogBubble} id="bubble0" className="absolute" />
            <img src={FigmaBubble} id="bubble1" className="absolute" />
            <img src={FoxgloveBubble} id="bubble2" className="absolute" />
            <img src={LinkedinBubble} id="bubble3" className="absolute" />
            <img src={FlxderBubble} id="bubble4" className="absolute" />
        </div>
    );
}

export default BubbleStack;
