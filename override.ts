class Test {
    add(x: number, y: number);
    add(x: number, y: number, z: number);
    add(x: number, y: number, z?: number) {
        if (x !== undefined && y !== undefined && z !== undefined) {
            return x + y + z;
        }
        return x + y;
    }
}

const a = new Test();

a.add(1, 2);
a.add(1, 2, 3);
