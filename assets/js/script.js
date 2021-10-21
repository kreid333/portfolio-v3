let scene, camera, renderer, sphere;

function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  const canvas = document.querySelector(".globe");

  renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);

  const geometry = new THREE.SphereGeometry( 5, 32, 16 );
  const material = new THREE.MeshBasicMaterial( { color: 0x01f7b6, wireframe: true } );
  sphere = new THREE.Mesh( geometry, material );
  scene.add(sphere);

  camera.position.z = 10;
}

const animate = function () {
  requestAnimationFrame(animate);

  sphere.rotation.y += 0.005;

  renderer.render(scene, camera);
};

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener("resize", onWindowResize, false);

init();
animate();
