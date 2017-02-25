var renderer;
var scene;
var camera;

function init() {


    //create scene
    scene = new THREE.Scene();

    //create camera
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);//相机
    camera.position.set(20, 8, 13);
    camera.lookAt(scene.position);
    scene.add(camera);

    //create renderer
    renderer = new THREE.WebGLRenderer();//渲染
    renderer.setClearColor(0x666666);
    renderer.setSize(window.innerWidth, window.innerHeight);

    //create car body
    var geometry = new THREE.BoxGeometry(10, 6, 6);
    var matarial = new THREE.MeshLambertMaterial({ color: 0xffffff });
    var carBody = new THREE.Mesh(geometry, matarial);
    scene.add(carBody);

    //create wheel1
    var torusGeometry = new THREE.TorusGeometry(1, 0.5, 50, 50);
    var wheel1 = new THREE.Mesh(torusGeometry, matarial);
    wheel1.position.set(-3, -3, 3);
    scene.add(wheel1);

    //create wheel2
    var wheel2 = new THREE.Mesh(torusGeometry, matarial);
    wheel2.position.set(3, -3, 3);
    scene.add(wheel2);

    //create wheel3
    var wheel3 = new THREE.Mesh(torusGeometry, matarial);
    wheel3.position.set(3, -3, -3);
    scene.add(wheel3);

    //create wheel4
    var wheel4 = new THREE.Mesh(torusGeometry, matarial);
    wheel4.position.set(-3, -3, -3);
    scene.add(wheel4);

    // create light
    var light = new THREE.SpotLight(0xffffff);
    light.position.set(20, 22, 15);
    scene.add(light);


    //animation
    function move() {
        camera.position.x++;
        if (camera.position.x > 100) {
            camera.position.x = 20;
        }
    }
    setInterval(move, 100);

    //add it to html
    document.body.appendChild(renderer.domElement);
    render();
}
function render() {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
}