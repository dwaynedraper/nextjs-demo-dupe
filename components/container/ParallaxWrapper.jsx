import React from "react";
import styles from "@/styles/ParallaxWrapper.module.scss";

export default function ParallaxWrapper({ children, imageUrl }) {
  return (
    <div
      className={styles.parallaxWrapper}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {children}
    </div>
  );
}

// import React from "react";

// export default function ParallaxWrapper({ children }) {
//   return (
//     <div className='relative h-screen'>
//       <div
//         className='absolute top-0 left-0 w-full h-full bg-cover bg-center z-neg1'
//         style={{
//           backgroundImage:
//             "url('https://source.unsplash.com/random/?1920x1080')",
//         }}
//       />
//       <div className='z-10'>{children}</div>
//     </div>
//   );
// }
