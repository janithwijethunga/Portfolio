import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useSpring, animated } from "@react-spring/web";

import PCC from "../Assets/pcc.png";

// const Homepage = () => {
//   // Simple fade + slide animation for heading 1
//   const fadeIn1 = useSpring({
//     from: { opacity: 0, transform: "translateY(40px)" },
//     to: { opacity: 1, transform: "translateY(0px)" },
//     config: { tension: 120, friction: 20 },
//     delay: 300,
//   });

//   // Different fade + slide for heading 2
//   const fadeIn2 = useSpring({
//     from: { opacity: 0, transform: "translateY(40px)" },
//     to: { opacity: 1, transform: "translateY(0px)" },
//     config: { tension: 120, friction: 20 },
//     delay: 800,
//   });

  return (
    <div>
      
    </div>
   
  );
};

export default Homepage;


//  <div className="w-full h-screen">
//       <Parallax pages={4}>
//         {/* Background Layer */}
//         <ParallaxLayer
//           offset={0}
//           speed={0.2}
//           factor={4}
//           style={{
//             backgroundImage:
//               'url("https://plus.unsplash.com/premium_photo-1685656440548-d8cad874d5d8?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGF0dGVybiUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D")',
//             backgroundSize: "cover",
//           }}
//         />

//         {/* Midground Image Layer */}
//         <ParallaxLayer
//           offset={1}
//           speed={0.6}
//           factor={2}
//           style={{
//             backgroundImage: `url(${PCC})`,
//             backgroundSize: "contain",
//             backgroundRepeat: "no-repeat",
//             backgroundPosition: "center",
//           }}
//         />

//         {/* Sticky Logo */}
//         <ParallaxLayer sticky={{ start: 0.2, end: 2 }}>
//           <div className="flex justify-center items-center h-full">
//             <img
//               src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
//               alt="Logo"
//               className="w-24 h-24 opacity-80"
//             />
//           </div>
//         </ParallaxLayer>

//         {/* Animated Text 1 */}
//         <ParallaxLayer offset={0.6} speed={0.5}>
//           <animated.h1
//             style={fadeIn1}
//             className="text-4xl md:text-6xl text-white font-bold text-center mt-40"
//           >
//             Welcome to My Cool Parallax
//           </animated.h1>
//         </ParallaxLayer>

//         {/* Animated Text 2 */}
//         <ParallaxLayer offset={2.5} speed={0.8}>
//           <animated.h1
//             style={fadeIn2}
//             className="text-3xl md:text-5xl text-yellow-300 font-semibold text-center mt-20"
//           >
//             My Name is Janith!
//           </animated.h1>
//         </ParallaxLayer>
//       </Parallax>
//     </div>