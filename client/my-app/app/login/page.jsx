"use client";
import { useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

export default function Login() {
  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(5, 8, 15); // Better initial camera position

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Orbit controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // Enables smooth damping
    controls.dampingFactor = 0.25; // Damping factor for smoother controls

    // // Lighting setup
    // const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    // scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 10, 7.5);
    scene.add(directionalLight);

    // GLTF Loader to load the 3D model
    const loader = new GLTFLoader();
    // const modelPath = "city"; // Your model name

    let loadedModel;

    loader.load(
      `./space/scene.gltf`, // Update with the correct path to your model
      (gltf) => {
        console.log("The scene has been loaded", gltf.scene);
        loadedModel = gltf;
        // model.rotate.y = Math.PI / 8;

        loadedModel.scene.scale.set(0.1, 0.1, 0.1); // Keep positive scaling values
        loadedModel.scene.position.set(0, 0, 0); // Adjust position if needed // Adjust position if needed
        scene.add(loadedModel.scene);
      },
      (xhr) => {
        console.log(`${(xhr.loaded / xhr.total) * 100}% loaded`);
      },
      (error) => {
        console.log("An error occurred:", error);
      }
    );

    // Animation loop
    const animate = () => {
      if (loadedModel) {
        loadedModel.scene.scale.set(0.6, 0.6, 0.6);
        loadedModel.scene.rotation.y += 0.001;
        loadedModel.scene.rotation.z += 0.0001;
      }

      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup on component unmount
  }, []);

  return (
    <>
      <h1>Login</h1>
    </>
  );
}
