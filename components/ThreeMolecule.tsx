import { Canvas, useFrame } from "react-three-fiber"
import { Cylinder, OrthographicCamera, Sphere, TrackballControls } from '@react-three/drei'
import { Euler, Matrix4, Mesh, Vector3 } from "three";
import { CIF, Molecule } from '@jenskrumsieck/moleculesjs'
import React, { useEffect, useRef, useState } from 'react';

export default function ThreeMolecule(props) {
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
                ref.current.rotation.y += 0.002
                ref.current.rotation.x += 0.005
                ref.current.rotation.z += 0.001
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
        return (
            <group position={[0, 0, 0]} ref={ref}>
                {molecule.atoms.map((a, i) => {
                    var col = a.symbol == "C" ? "#222831" : `#${toHex(a.color)}`
                    var location = new Vector3(a.location.x, a.location.y, a.location.z).multiplyScalar(75)
                    var scale = a.radius * 25 / 77
                    return (
                        <Sphere key={a.title + "_" + i} position={location} args={[scale, 32, 32]}>
                            <meshBasicMaterial flatShading color={col} reflectivity={0} />
                        </Sphere>
                    );
                })}
                {molecule.bonds.map((b, i) => {
                    var col = "#999"
                    var a1 = b.atom1.location
                    var a2 = b.atom2.location

                    var start = new Vector3(a1.x, a1.y, a1.z).multiplyScalar(75)
                    var end = new Vector3(a2.x, a2.y, a2.z).multiplyScalar(75)
                    var location = start.lerp(end, 0.5)

                    const up = new Vector3(0, 1, 0)
                    var line = end.sub(start)
                    var axis = up.clone().cross(line)
                    var rad = Math.acos(up.dot(line.clone().normalize()))
                    var mat = new Matrix4().makeRotationAxis(axis.normalize(), rad)
                    var eu = new Euler().setFromRotationMatrix(mat)
                    return (
                        <Cylinder position={location} key={i} scale={[5, line.length() * 2, 5]} rotation={eu} >
                            <meshBasicMaterial flatShading color={col} reflectivity={0} />
                        </Cylinder>
                    );
                })}
            </group>
        );
    }

    return (
        <>
            <Canvas colorManagement gl={{ antialias: true }} orthographic pixelRatio={global.window?.devicePixelRatio}>
                <scene>
                    <OrthographicCamera makeDefault position={[0, 0, 1000]} far={10000} near={0.00001}>
                        <pointLight color={0xffffff} intensity={0.75} />
                    </OrthographicCamera>
                    <ambientLight intensity={.1} color={0x333333} />
                    <TrackballControls />
                    <Molecule3D />
                </scene>
            </Canvas>
        </>
    )
}