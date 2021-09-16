import { Canvas, useFrame } from "@react-three/fiber"
import { Cylinder, OrbitControls, OrthographicCamera, Sphere } from '@react-three/drei'
import { Euler, Matrix4, Mesh, Vector3 } from "three";
import { CIF, Molecule } from '@jenskrumsieck/moleculesjs'
import React, { useEffect, useRef, useState } from 'react';

export default function ThreeMolecule(props) {
    let zoom = 2.5;
    if(props.zoom) zoom = props.zoom;
    const [molecule, setMolecule] = useState(new Molecule({ atoms: [], bonds: [] }));
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(props.file);
            const data = await response.text();
            const molecule = CIF.parse(data);
            setMolecule(molecule);
        }
        fetchData()
    }, [props.file]);

    function useTurntable() {
        const ref = useRef<Mesh>(null!)
        useFrame(() => {
            if (ref.current) {
                ref.current.rotation.y += 0.0002
                ref.current.rotation.x += 0.0003
                ref.current.rotation.z += 0.0001
            }
        })
        return ref
    }

    function toHex(bytes: number[]) {
        var r = bytes[0]
        var g = bytes[1]
        var b = bytes[2]
        var bin = r << 16 | g << 8 | b;
        return (function (h) {
            return new Array(7 - h.length).join("0") + h
        })(bin.toString(16).toUpperCase())
    }

    function Molecule3D() {
        const ref = useTurntable()
        var loc = new Vector3(0, 0, 0)
        molecule.atoms.forEach(a => {
            var location = new Vector3(a.location.x, a.location.y, a.location.z).multiplyScalar(5)
            loc.add(location)
        })
        loc.multiplyScalar(1 / molecule.atoms.length)

        return (
            <group position={[-loc.x, 0, -loc.z]} ref={ref}>
                {molecule.atoms.map((a, i) => {
                    var col = a.symbol == "C" ? "#222831" : `#${toHex(a.color)}`
                    var location = new Vector3(a.location.x, a.location.y, a.location.z).multiplyScalar(5)
                    var scale = a.radius *2/ 77
                    return (
                        <Sphere key={a.title + "_" + i} position={location} args={[scale, 32, 32]} attach={undefined} attachArray={undefined} attachObject={undefined} onUpdate={undefined} up={undefined} scale={undefined} rotation={undefined} matrix={undefined} quaternion={undefined} layers={undefined} dispose={undefined} material={undefined} onPointerMissed={undefined} onClick={undefined} onContextMenu={undefined} onDoubleClick={undefined} onPointerUp={undefined} onPointerDown={undefined} onPointerOver={undefined} onPointerOut={undefined} onPointerEnter={undefined} onPointerLeave={undefined} onPointerMove={undefined} onPointerCancel={undefined} onWheel={undefined} visible={undefined} type={undefined} id={undefined} uuid={undefined} name={undefined} parent={undefined} modelViewMatrix={undefined} normalMatrix={undefined} matrixWorld={undefined} matrixAutoUpdate={undefined} matrixWorldNeedsUpdate={undefined} castShadow={undefined} receiveShadow={undefined} frustumCulled={undefined} renderOrder={undefined} animations={undefined} userData={undefined} customDepthMaterial={undefined} customDistanceMaterial={undefined} isObject3D={undefined} onBeforeRender={undefined} onAfterRender={undefined} applyMatrix4={undefined} applyQuaternion={undefined} setRotationFromAxisAngle={undefined} setRotationFromEuler={undefined} setRotationFromMatrix={undefined} setRotationFromQuaternion={undefined} rotateOnAxis={undefined} rotateOnWorldAxis={undefined} rotateX={undefined} rotateY={undefined} rotateZ={undefined} translateOnAxis={undefined} translateX={undefined} translateY={undefined} translateZ={undefined} localToWorld={undefined} worldToLocal={undefined} lookAt={undefined} add={undefined} remove={undefined} clear={undefined} getObjectById={undefined} getObjectByName={undefined} getObjectByProperty={undefined} getWorldPosition={undefined} getWorldQuaternion={undefined} getWorldScale={undefined} getWorldDirection={undefined} raycast={undefined} traverse={undefined} traverseVisible={undefined} traverseAncestors={undefined} updateMatrix={undefined} updateMatrixWorld={undefined} updateWorldMatrix={undefined} toJSON={undefined} clone={undefined} copy={undefined} addEventListener={undefined} hasEventListener={undefined} removeEventListener={undefined} dispatchEvent={undefined} geometry={undefined} morphTargetInfluences={undefined} morphTargetDictionary={undefined} isMesh={undefined} updateMorphTargets={undefined}>
                            <meshBasicMaterial flatShading color={col} reflectivity={0} />
                        </Sphere>
                    );
                })}
                {molecule.bonds.map((b, i) => {
                    var col = "#999"
                    var a1 = b.atom1.location
                    var a2 = b.atom2.location

                    var start = new Vector3(a1.x, a1.y, a1.z).multiplyScalar(5)
                    var end = new Vector3(a2.x, a2.y, a2.z).multiplyScalar(5)
                    var location = start.lerp(end, 0.5)

                    const up = new Vector3(0, 1, 0)
                    var line = end.sub(start)
                    var axis = up.clone().cross(line)
                    var rad = Math.acos(up.dot(line.clone().normalize()))
                    var mat = new Matrix4().makeRotationAxis(axis.normalize(), rad)
                    var eu = new Euler().setFromRotationMatrix(mat)
                    return (
                        <Cylinder position={location} key={i} scale={[.5, line.length() * 2, .5]} rotation={eu} attach={undefined} attachArray={undefined} attachObject={undefined} onUpdate={undefined} up={undefined} matrix={undefined} quaternion={undefined} layers={undefined} dispose={undefined} material={undefined} onPointerMissed={undefined} onClick={undefined} onContextMenu={undefined} onDoubleClick={undefined} onPointerUp={undefined} onPointerDown={undefined} onPointerOver={undefined} onPointerOut={undefined} onPointerEnter={undefined} onPointerLeave={undefined} onPointerMove={undefined} onPointerCancel={undefined} onWheel={undefined} visible={undefined} type={undefined} id={undefined} uuid={undefined} name={undefined} parent={undefined} modelViewMatrix={undefined} normalMatrix={undefined} matrixWorld={undefined} matrixAutoUpdate={undefined} matrixWorldNeedsUpdate={undefined} castShadow={undefined} receiveShadow={undefined} frustumCulled={undefined} renderOrder={undefined} animations={undefined} userData={undefined} customDepthMaterial={undefined} customDistanceMaterial={undefined} isObject3D={undefined} onBeforeRender={undefined} onAfterRender={undefined} applyMatrix4={undefined} applyQuaternion={undefined} setRotationFromAxisAngle={undefined} setRotationFromEuler={undefined} setRotationFromMatrix={undefined} setRotationFromQuaternion={undefined} rotateOnAxis={undefined} rotateOnWorldAxis={undefined} rotateX={undefined} rotateY={undefined} rotateZ={undefined} translateOnAxis={undefined} translateX={undefined} translateY={undefined} translateZ={undefined} localToWorld={undefined} worldToLocal={undefined} lookAt={undefined} add={undefined} remove={undefined} clear={undefined} getObjectById={undefined} getObjectByName={undefined} getObjectByProperty={undefined} getWorldPosition={undefined} getWorldQuaternion={undefined} getWorldScale={undefined} getWorldDirection={undefined} raycast={undefined} traverse={undefined} traverseVisible={undefined} traverseAncestors={undefined} updateMatrix={undefined} updateMatrixWorld={undefined} updateWorldMatrix={undefined} toJSON={undefined} clone={undefined} copy={undefined} addEventListener={undefined} hasEventListener={undefined} removeEventListener={undefined} dispatchEvent={undefined} geometry={undefined} morphTargetInfluences={undefined} morphTargetDictionary={undefined} isMesh={undefined} updateMorphTargets={undefined} >
                            <meshBasicMaterial flatShading color={col} reflectivity={0} />
                        </Cylinder>
                    );
                })}
            </group>
        );
    }

    return (
        <>
            <Canvas gl={{ antialias: true }}>
                <scene>
                    <OrthographicCamera makeDefault position={[0, 0, 100]} zoom={zoom} key={""} attach={undefined} attachArray={undefined} attachObject={undefined} args={undefined} onUpdate={undefined} view={undefined} visible={undefined} type={undefined} id={undefined} uuid={undefined} name={undefined} parent={undefined} modelViewMatrix={undefined} normalMatrix={undefined} matrixWorld={undefined} matrixAutoUpdate={undefined} matrixWorldNeedsUpdate={undefined} castShadow={undefined} receiveShadow={undefined} frustumCulled={undefined} renderOrder={undefined} animations={undefined} userData={undefined} customDepthMaterial={undefined} customDistanceMaterial={undefined} isObject3D={undefined} onBeforeRender={undefined} onAfterRender={undefined} applyMatrix4={undefined} applyQuaternion={undefined} setRotationFromAxisAngle={undefined} setRotationFromEuler={undefined} setRotationFromMatrix={undefined} setRotationFromQuaternion={undefined} rotateOnAxis={undefined} rotateOnWorldAxis={undefined} rotateX={undefined} rotateY={undefined} rotateZ={undefined} translateOnAxis={undefined} translateX={undefined} translateY={undefined} translateZ={undefined} localToWorld={undefined} worldToLocal={undefined} lookAt={undefined} add={undefined} remove={undefined} clear={undefined} getObjectById={undefined} getObjectByName={undefined} getObjectByProperty={undefined} getWorldPosition={undefined} getWorldQuaternion={undefined} getWorldScale={undefined} getWorldDirection={undefined} raycast={undefined} traverse={undefined} traverseVisible={undefined} traverseAncestors={undefined} updateMatrix={undefined} updateMatrixWorld={undefined} updateWorldMatrix={undefined} toJSON={undefined} clone={undefined} copy={undefined} addEventListener={undefined} hasEventListener={undefined} removeEventListener={undefined} dispatchEvent={undefined} left={undefined} right={undefined} bottom={undefined} top={undefined} isOrthographicCamera={undefined} near={undefined} far={undefined} updateProjectionMatrix={undefined} setViewOffset={undefined} clearViewOffset={undefined} matrixWorldInverse={undefined} projectionMatrix={undefined} projectionMatrixInverse={undefined} isCamera={undefined}>
                        <pointLight color={0xffffff} intensity={0.75} />
                    </OrthographicCamera>
                    <ambientLight intensity={.1} color={0x333333} />
                    <OrbitControls regress addEventListener={undefined} hasEventListener={undefined} removeEventListener={undefined} dispatchEvent={undefined} />
                    <Molecule3D />
                </scene>
            </Canvas>
        </>
    )
}