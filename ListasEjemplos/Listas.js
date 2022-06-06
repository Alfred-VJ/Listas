function Lista() {
    this.head = null;
}

function Node(value) {
    this.value = value;
    this.next = null;
}


//Este método es para poder agragar nodos a nuestra lista(si viste el video seria como los vagones)
Lista.prototype.add = function (value) {
    if (!this.head) this.head = new Node(value);
    else {
        let referencia = this.head;
        while (referencia.next) {
            referencia = referencia.next;
        }
        referencia.next = new Node(value);
    }
}

//Este método es para buscar un valor de algun nodo
Lista.prototype.search = function (value) {
    if (this.head.value === value) return true;
    else {
        let referencia = this.head;
        while (referencia.next) {
            if (referencia.next.value === value) return true;
            referencia = referencia.next;
        }
    }
    return false;
}


//Este metodo es para cambiar un Nodo completo de la lista 
Lista.prototype.changeNode = function (value, newNode) {
    if (this.head.value === value) {
        let referencia = this.head.next;
        this.head = newNode;
        this.head.next = referencia
    } else {
        let referencia = this.head;
        while (referencia.next) {
            if (referencia.next.value === value) {
                let referencia2 = referencia.next.next;
                referencia.next = newNode;
                referencia.next.next = referencia2;
            } else {
                referencia = referencia.next;
            }

        }
    }
}


//Intenta crear el metodo que convine la lista actual con una lista nueva que te pasaran por parametro y prueba si funciona.

Lista.prototype.conbine = function(newLista){

}

let list = new Lista();
list.add(56);
list.add(87);
list.add(10);
list.add(5)
list.changeNode(5, new Node(6))
console.log(list.head.next) //Aquí solo estoy consologueando para checar que funcione cada metodo.




//si tienes alguna duda mandame un correo a micaminodeprogramador@gmail.com