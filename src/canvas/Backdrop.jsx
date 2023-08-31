import {easing} from "maath";
import {useFrame} from "@react-three/fiber";
import {AccumulativeShadows, RandomizedLight} from "@react-three/drei";
import {useRef} from "react";

const Backdrop = () => {
    const shadows = useRef();
    return (
        <AccumulativeShadows
        ref={shadows}
        temporal={true}
        frames={60}
        alphaTest={0.23}
        scale={10}
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, 0, -0.14]}
        >
            <RandomizedLight
            amount={4}
            radius={10}
            intensity={0.60}
            ambient={0.25}
            position={[2 , 2, -6]}
            />
            <RandomizedLight
            amount={4}
            radius={5}
            intensity={0.25}
            ambient={0.55}
            position={[-5 , 5, -6]}
            />
        </AccumulativeShadows>
    )
}

export default Backdrop