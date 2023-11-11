import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";

import Loader from "./Loader";
import Island from "./models/island";
import HomeInfo from "./HomeInfo";

const Home = () => {{
    const [isRotating, setIsRotating] = useState(false);
    const [currentStage, setCurrentStage] = useState(1);

    const adjustIslandForScreenSize = () => {
        let screenScale = null;
        let screenPosition = [0, -8.5, -37];
        let rotation = [0.1, 4.7, 0];

        if(window.innerWidth < 768) {
            screenScale = [0.9, 0.9, 0.9];
            screenPosition = [0, -6.5, -43];
        }else {
            screenScale = [1,1,1];
        }
        return [screenScale, screenPosition, rotation]
    }

    const [islandScale, islandPosition, islandRotaion] = adjustIslandForScreenSize();

    return (
        <section className="w-full h-screen relative">
            <div className="fixed py-5 w-full max-w-[560px] top-[15%] left-[50%] translate-x-[-50%] rounded-2xl text-center">
            {currentStage && (
                    <HomeInfo currentStage={currentStage} />
            )}
            </div>
            <Canvas
                className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
                camera={{near:0.1, far:1000}}
            >
                <Suspense>
                    <directionalLight position={[1,1,1]} intensity={2}/>
                    <ambientLight intensity={0.5}/>
                    <hemisphereLight skyColor="#b1e1ff" groundColor="#000" intensity={1}/>

                    <Island position={islandPosition} scale={islandScale} rotation={islandRotaion} isRotating={isRotating} setIsRotating={setIsRotating} setCurrentStage={setCurrentStage}/>
                </Suspense>
            </Canvas>
        </section>
    );
}}

export default Home;