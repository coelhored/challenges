function circle(radius) {
    this.radius = radius
    let location = {x: 1, y: 3,}

    Object.defineProperty(this, 'getsetLocation', {
        get: function(value) {
            return location;
        },
        set : function(value) {
            if (typeof value.y !== 'number') {
                throw new Error(' use only number values!')
            } 
            location = value;
        }
    })



}
let myCircle = new circle(4)
