import pogchamp from './pogchamp.png';
import BabyRage from './Babyrage.png';

import React,{Component} from 'react';
import Matter from 'matter-js'; 

let images = {
    'BabyRage': BabyRage,
    'PogChamp' : pogchamp
}


class Animations extends Component{
    constructor(props){
        super(props);

        this.state = {
            emotion: 'happy',
            img: 'PogChamp'
        }

        let animate = () => {

            let image = this.state.img;
            let emote = images.image;

            let choice 

            switch(image){
                case 'PogChamp':
                    choice = pogchamp
                    break;
                case 'BabyRage': 
                    choice = BabyRage
                    break;
            }

            console.log(image)

        //     var Engine = Matter.Engine,
        //     Render = Matter.Render,
        //     World = Matter.World,
        //     Bodies = Matter.Bodies,
        //     Body = Matter.Body;
          
        //   var engine = Engine.create();
          
        //   var render = Render.create({
        //     element: document.body,
        //     engine: engine,
        //     options: {
        //       width: 800,
        //       height: 400,
        //       wireframes: false,
        //       wireFrameBackground : 'transparent',
        //       background: 'transparent'
        //     }
        //   });

        let {Engine,Render,World,Bodies, engine, render} = this.props
          
          
          var bottomWall = Bodies.rectangle(500, 400, 1100, 20, { isStatic: true,render: {opacity : .01}});
          var leftWall = Bodies.rectangle(.1, 210, 20, 600, { isStatic: true, render: {opacity : .01}});
          var rightWall = Bodies.rectangle(800, 210, 20, 600, { isStatic: true,render: {opacity : .01}});
          
          bottomWall.render.opacity = .01
          
          var boxA = Bodies.circle(100, 10, 30,{
            render:{
              sprite: {
                texture: choice,
                xScale: .3,
                yScale: .3
              }
            },
            restitution: .8
          });
          
          var boxB = Bodies.circle(250, 10, 30,{
            render:{
              sprite: {
                texture: choice,
                xScale: .3,
                yScale: .3
              }
            },
            restitution: .8
          });
          
          var boxC = Bodies.circle(300, 10, 30,{
            render:{
              sprite: {
                texture: choice,
                xScale: .3,
                yScale: .3
              }
            },
            restitution: .8
          });
          
          var boxD = Bodies.circle(150, 10, 30,{
            render:{
              sprite: {
                texture: choice,
                xScale: .3,
                yScale: .3
              }
            },
            restitution: .8
          });
          
          var boxE = Bodies.circle(350, 10, 30,{
            render:{
              sprite: {
                texture: choice,
                xScale: .3,
                yScale: .3
              }
            },
            restitution: .8
          });
          
          
          
          World.add(engine.world, [rightWall,leftWall,bottomWall,boxA,boxB,boxC,boxD,boxE]);
          
          Engine.run(engine);
          
          Render.run(render);
          
          let run = (callback) => {
            console.log('runing')
            Render.run(render);
            callback();
          }
          
          let stop = () => {
            setTimeout(() => {render.canvas.remove()},5000)
           
          }
          
          run(stop);
          }

          animate()
          
    }

    // socker.on(emotion)
   
render(){

    

    return(
        <div>

        </div>
    )
}
   
}

export default Animations;