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
    renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(0x666666);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    var plane = new THREE.Mesh(new THREE.PlaneGeometry(30, 30, 16, 16),
    new THREE.MeshLambertMaterial({ color: 0xffff2 }));
    plane.rotation.x = -Math.PI / 2;
    plane.position.x = -6;
    plane.position.y = -4.1;
    plane.position.z = -6;
    plane.receiveShadow = true;
    scene.add(plane);



    //create car body
    var geometry = new THREE.BoxGeometry(10, 6, 6);
    var material = new THREE.MeshLambertMaterial({ color: 0xffffff });
    var carBody = new THREE.Mesh(geometry, material);
    carBody.castShadow = true;
    carBody.receiveShadow = true;
    scene.add(carBody);

    //create wheel1
    var torusGeometry = new THREE.TorusGeometry(1, 0.5, 50, 50);
    var wheel1 = new THREE.Mesh(torusGeometry, material);
    wheel1.position.set(-3, -3, 3);
    wheel1.castShadow = true;
    wheel1.receiveShadow = true;
    scene.add(carBody);
    scene.add(wheel1);

    //create wheel2
    var wheel2 = new THREE.Mesh(torusGeometry, material);
    wheel2.position.set(3, -3, 3);
    wheel2.castShadow = true;
    wheel2.receiveShadow = true;
    scene.add(wheel2);

    //create wheel3
    var wheel3 = new THREE.Mesh(torusGeometry, material);
    wheel3.position.set(3, -3, -3);
    wheel3.castShadow = true;
    wheel3.receiveShadow = true;
    scene.add(wheel3);

    //create wheel4
    var wheel4 = new THREE.Mesh(torusGeometry, material);
    wheel4.position.set(-3, -3, -3);
    wheel4.castShadow = true;
    wheel4.receiveShadow = true;
    scene.add(wheel4);

    // create light
    var light = new THREE.SpotLight(0xffffff);
    light.position.set(-10, 12, 20);
    light.castShadow = true;
    
    scene.add(light);

    //add it to html
    document.body.appendChild(renderer.domElement);
    renderer.render(scene, camera);
}

