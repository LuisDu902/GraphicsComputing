import { MyFlower } from './flower/MyFlower.js';
<<<<<<< HEAD
import { CGFobject } from '../../../lib/CGF.js';

export class MyGarden extends CGFobject{
    constructor(scene, numRows, numCols, leaf, stem, petals = []) {
        super(scene);
        this.numRows = numRows;
        this.numCols = numCols;
        this.leafAppearance = leaf;
        this.stemAppearance = stem;
        this.petalAppearances = petals;
=======
import { CGFobject, CGFappearance } from '../../../lib/CGF.js';

export class MyGarden extends CGFobject{
    constructor(scene, numRows, numCols) {
        super(scene);
        this.numRows = numRows;
        this.numCols = numCols;
        this.flowers = [];

>>>>>>> 44186d6fe787f68fd31d4921314c21c7a88fee16
        this.createFlowers();
    }

    createFlowers() {
        this.flowers = [];
        for (let i = 0; i < this.numRows; i++) {
            this.flowers.push([]);
            for (let j = 0; j < this.numCols; j++) {
                const nrPetals = Math.floor(Math.random() * 10) + 5;
                const cylinderNumber = Math.round(Math.random() * 4) + 2 ;
                const corollaRadius = Math.random() * 2 + 1; 
                const receptacleRadius = Math.random(3, 7); 
                const stemRadius = Math.random() * 0.2 + 0.1; 
                const stemHeight = Math.random() * 3 + 4;
                const petalColor = [Math.random(), Math.random(), Math.random(), 1];
                const receptacleColor = [Math.random(), Math.random(), Math.random(), 1]; 
                const stemColor = [Math.random(), Math.random() * 0.1 + 0.9, Math.random(), 1]; 
                const leafColor = [Math.random(), Math.random() * 0.1 + 0.9, Math.random(), 1]; 
                const petalAngle = Math.random() * 40; 
                const minAngle = Math.random() * 30; 
                const maxAngle = minAngle + Math.random() * 20; 
                const petalAppearance = this.petalAppearances[Math.floor(Math.random() * this.petalAppearances.length)];

                this.flowers[i].push(new MyFlower(
                    this.scene,
                    nrPetals,
                    cylinderNumber,
                    corollaRadius,
                    receptacleRadius,
                    stemRadius,
                    stemHeight,
                    petalColor,
                    receptacleColor,
                    stemColor,
                    leafColor,
                    petalAngle,
                    maxAngle,
                    minAngle,
                    this.leafAppearance,
                    this.stemAppearance,
                    this.scene.receptacleAppearance,
                    petalAppearance
                ));
            }
        }
    }

    display() {
        for (let i = 0; i < this.numRows; i++) {
            for (let j = 0; j < this.numCols; j++) {
                this.scene.pushMatrix();
                    this.scene.translate(i * 2, 0, j * 2); 
                    this.flowers[i][j].display();
                this.scene.popMatrix();
            }
        }
    }
}
