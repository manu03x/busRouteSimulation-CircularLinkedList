// Crear nodo base
// Crear ruta
// Crear funcion para sumar minutos


class BusStop {
    constructor(name, minutes) {
        this.name = name
        this.minutes = minutes
        this.next = null
    }
}


class Route {
    constructor() {
        this.head = null
    }

    add(busStop) {
        if (!this.head) {
            this.head = busStop
        } else {
            let temp= this.head;
            while(temp.next != this.head) {
                temp = temp.next
            }
            temp.next = busStop
        }

        busStop.next = this.head


    }

    showBusStops() {
        let temp = this.head;
        let txt = ''
        while(temp.next != this.head) {
            txt += temp.name + ' '
            temp = temp.next
        }

        txt += temp.name

        return txt;
    }

    start( name, hour, minutes, endHour, endMinutes ) {
        let output = ''
        let busStop = this.search(name)
        let time = [hour, minutes]
        let counter = 1

        while ( endHour >= time[0]) {
            output += `stop: ${counter} Bus stop: ${busStop.name} hour: ${time} \n`
            busStop = busStop.next
            time = timeManagement(time, busStop.minutes)
            counter++
        }

        return output;
    }

    search(name) {
        let temp = this.head;

        do {
            if(temp.name == name){
                return temp;
            }
            temp = temp.next;
        }
        while(temp != this.head) 

        return null;

    }
}

const newRoute = new Route();
let busStop = new BusStop('Colima', 20);
newRoute.add(busStop)
busStop = new BusStop('Guadalajara', 60);
newRoute.add(busStop)
busStop = new BusStop('Michoacan', 20);
newRoute.add(busStop)
busStop = new BusStop('Morelia', 20);
newRoute.add(busStop)
busStop = new BusStop('Guanajuato', 100);
newRoute.add(busStop)
console.log(newRoute.showBusStops())
// console.log(newRoute.search('Micho'))


function timeManagement(dateHour, minutes) {
    dateHour[1] += minutes
    if (dateHour[1] >= 60) {
        dateHour[1] -= 60
        dateHour[0]++
    }
    return dateHour
}

console.log(newRoute.start('Colima', 4, 30, 9, 20))
