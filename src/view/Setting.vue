<script setup >
import * as THREE from 'three'
import { OBJLoader, MTLLoader } from "three-obj-mtl-loader"
import { baseUrl } from "../api/data.js"

// init

const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10)
camera.position.z = 1

const scene = new THREE.Scene()

var lightAm = new THREE.AmbientLight('#DFDFDF', 1)
scene.add(lightAm)

var lightDirect = new THREE.DirectionalLight(0xffffff, 0.6)
lightDirect.position.set(50, 200, -50)
scene.add(lightDirect)


const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2)
const material = new THREE.MeshNormalMaterial()

const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

let objLoader = new OBJLoader();
let mtlLoader = new MTLLoader();
mtlLoader.load(baseUrl+'getObj?name=testmeshA.mtl', function (materials) {
    objLoader.setMaterials(materials);
    objLoader.load(baseUrl+'getObj?name=testmeshA.obj', function (obj) {
        //obj.position.set(10, 0, -6);
        //obj.scale.set(0.01, 0.01, 0.01);
        scene.add(obj);
    })
})
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
renderer.setSize(600, 600)

// animation

function animation(time) {

    mesh.rotation.x = time / 2000;
    mesh.rotation.y = time / 1000;

    renderer.render(scene, camera);

}
function Render() {
    let container = document.getElementById('container')
    container.appendChild(renderer.domElement)
    renderer.setAnimationLoop(animation)

    animation(1000)
}
</script>

<template>
    <div>
        <el-button @click="Render">3D Model</el-button>
        <div id="container" style="height:600px; width:600px"></div>
    </div>
</template>

<style scoped>
</style>