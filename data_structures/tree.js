class Node{
    constructor(value){
        this.left =  null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    insert(value){
        //Creamos una instancia del nuevo nodo.
        const newNode = new Node(value);

        //Verificamos si la raiz del arbol tiene hijos
        //en caso de que no tenga, la raiz va apuntar al nodo que acabamos de instanciar.
        if(this.root === null){
            this.root = newNode;
            return this;
        }else{
            //En caso de que la raiz tenga hijos, creamos una variable que apunte a la raiz
            let currentNode = this.root;

            //Entramos en un ciclo "infinito"
            while(true){

                //Varificamos si el valor a insertar es menor al nodo al que estamos apuntado
                //La primera vez que se ejecuta siempre revisa el valor del nodo raiz
                if(value < currentNode.value){

                    //Si el valor es menor verificamos si el nodo izquierdo es null
                    //Si es null el nodo va apuntar al nodo que instanciamos
                    if(currentNode.left === null){
                        currentNode.left = newNode;
                        return this;
                    }else{
                        //En caso de que el nodo no sea null:
                        //la variable que apuntaba a raiz empieza a apuntar al nodo izquierdo existente
                        //El ciclo empieza otra vez
                        currentNode = currentNode.left;
                    }
                }else{
                    //En caso de que el valor a insertar sea mayor
                    //Verificamos si el nodo derecho es null
                    //Si es null el nodo va apuntar al nodo que instanciamos
                    if(currentNode.right === null){
                        currentNode.right = newNode;
                        return this;
                    }else{
                        //Si no es null 
                        //La variable que apunta a raiz empieza a apuntar al nodo derecho existente
                        //El ciclo empieza otra vez
                        currentNode = currentNode.right;
                    }
                }
            }
        }
    }

    search(value){
        //Verificamos si la raiz es nula, si es nula regresamos null
        if(this.root === null){
            return null;
        }
        //Verificamos si el valor es igual a la raiz, si es igual, regresamos la raiz
        if(value === this.root.value){
            return this.root;
        }else{
            //Si el valor no es igual a la raiz:

            //Creamos una variable que apunte a la raiz
            let currentNode = this.root;

            //Entramos en un ciclo "infinito"
            while(true){
                
                //Verificamos si el nodo al que apuntamos es nulo, si es nulo retornamos null
                if(currentNode === null){
                    return null;
                }
                //Verificamos si el valor es igual al valor del nodo al que apuntamos, si el igual retornamos el nodo
                if(value === currentNode.value){
                    return currentNode;
                }
                //Verificamos si el valor es menor al valor del nodo al que apuntamos
                if(value < currentNode.value){
                    //Si el valor buscado es menor al nodo, currentNode apunta al sub-arbol izquierdo del nodo
                    currentNode = currentNode.left;
                    continue;
                }
                //Verificamos si el valor es mayor al valor del nodo al que apuntamos
                if(value > currentNode.value){
                    //Si el valor buscado es mayor al nodo, currentNode apunta al sub-arbol derecho del nodo
                    currentNode = currentNode.right;
                    continue;
                }
            }
        }
    }

    delete(value){
        if(this.search(value) === null){
            return "El valor no se encuentra dentro del arbol";
        }else{
            
        }
    }
}

let tree = new BinarySearchTree();