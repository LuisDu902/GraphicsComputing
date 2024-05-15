import { CGFobject } from '../../lib/CGF.js';

export class MySingleGrass extends CGFobject {
    constructor(scene) {
        super(scene);
        this.initBuffers();
    }

    initBuffers() {
        this.vertices = [
            -0.1, 0, 0,
            0.1, 0, 0,
            0, 1, 0,
            -0.1, 0, 0,
            0.1, 0, 0,
            0, 1, 0
        ];

        this.indices = [
            0, 1, 2,
            5, 4, 3,
        ];

        this.normals = [
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
            0, 0, -1,
            0, 0, -1,
            0, 0, -1
        ];

        this.texCoords = [
            0, 0,
            0, 1,
            1, 0,
            0, 0,
            0, 1,
            1, 0
        ];

        this.primitiveType = this.scene.gl.TRIANGLES;

        this.initGLBuffers();
    }
}
