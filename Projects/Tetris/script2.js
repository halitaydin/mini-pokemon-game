// module aliases
const Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;

    console.log(Engine);

    console.log(Render);

    console.log(World);

    console.log(Bodies);

    console.log('test');

// create an engine
const engine = Engine.create();

// create a renderer
const render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        width: innerWidth,
        height: innerHeight
    }
});

// create two boxes and a ground
const boxA = Bodies.rectangle(450, 200, 80, 80, { isStatic: false });
const boxB = Bodies.rectangle(450, 50, 80, 80, { isStatic: true });
const ground = Bodies.rectangle(innerWidth/2, 610, innerWidth, 100, { isStatic: true });

// add all of the bodies to the world
World.add(engine.world, [boxA, boxB, ground]);

// run the engine
Engine.run(engine);

// run the renderer
Render.run(render);