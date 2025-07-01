// GSAP Animations
gsap.from("#name", { duration: 1, y: -50, opacity: 0, ease: "bounce" });
gsap.from(".tagline", { duration: 1, delay: 0.5, y: -30, opacity: 0 });
gsap.from("nav ul li", {
  duration: 1,
  opacity: 0,
  y: -20,
  stagger: 0.2,
  delay: 1,
});

// THREE.js 3D Background
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById("three-canvas"),
  alpha: true,
});
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.z = 5;

const geometry = new THREE.TorusKnotGeometry();
const material = new THREE.MeshStandardMaterial({ color: 0x00ff88 });
const torusKnot = new THREE.Mesh(geometry, material);
scene.add(torusKnot);

const light = new THREE.PointLight(0xffffff, 1);
light.position.set(5, 5, 5);
scene.add(light);

function animate() {
  requestAnimationFrame(animate);
  torusKnot.rotation.x += 0.01;
  torusKnot.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();
