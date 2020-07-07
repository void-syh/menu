export default class mouseHandle {
    arr = [];
    constructor() { };
    listener() {
        window.addEventListener("mousemove", () => {
            let x = event.clientX;
            let y = event.clientY;
            if (this.arr.length == 10) this.arr.shift();
            this.arr.push({ 'x': x, 'y': y });
        })
    }
    ifClose(childLength, id) {
        const aim = (childLength * 24) / 80;
        const end = this.arr[this.arr.length - 1];
        const start = this.arr[0];
        const now = (end.y - start.y) / (end.x - start.x);
        if (now > 0 && now <= aim) return [true, id];
        else return [false, id];
    }
    ifOpen(id){
        const end = this.arr[this.arr.length - 1];
        const start = this.arr[0];
        const now = (end.y - start.y) / (end.x - start.x);
        if(now<0) return [true,id];
        else return [false,id]
    }
}