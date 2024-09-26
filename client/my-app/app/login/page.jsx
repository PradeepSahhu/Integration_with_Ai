"use client";
import { useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

export default function Login() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Scene setup
    const scene = new THREE.Scene();

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 1, 5); // Better initial camera position

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Orbit controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.update();

    // Lighting (adding ambient and directional light)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 10, 7.5);
    scene.add(directionalLight);

    // GLTF Loader to load 3D model
    const loader = new GLTFLoader();
    let object;
    const objToRender = "la_night_city"; // Your model name

    loader.load(
      `/models/${objToRender}/scene.gltf`,
      function (gltf) {
        object = gltf.scene;
        object.scale.set(0.5, 0.5, 0.5); // Scale the object (adjust as needed)
        object.position.set(0, -1, 0); // Adjust position if needed
        scene.add(object);
      },
      function (xhr) {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      function (error) {
        console.log("An error occurred:", error);
      }
    );

    // Animation loop
    function animate() {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    }

    animate();

    // Handle window resize
    window.addEventListener("resize", () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", () => {});
      document.body.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <>
      <h1>Login</h1>
    </>
  );
}
