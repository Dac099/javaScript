class Node{
    constructor(value){
        this.left =  null;
        this.right = null;
        this.father = null;
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
                        newNode.father = currentNode;
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
                        newNode.father = currentNode;
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

    deleteNode(value){
        if(this.search(value) === null){
            return "El valor no se encuentra dentro del arbol";
        }else{
            let nodeToDelete = this.search(value);
            
            //Si es un nodo hoja
            if (nodeToDelete.left === null && nodeToDelete.right === null){
                let holdingNode = nodeToDelete.father;
                //Verificar si es un nodo derecho o izquierdo
                if(holdingNode.left === nodeToDelete){
                    holdingNode.left = null;
                    return this;
                }else{
                    holdingNode.right = null;
                    return this;
                }
            }

            //Si es un nodo con un hijo
            if(nodeToDelete.left === null){
                let holdingNode = nodeToDelete.father;
                let childNode = nodeToDelete.right;
                childNode.father = holdingNode;
                if(nodeToDelete === holdingNode.left){
                    holdingNode.left = childNode;
                    nodeToDelete.right = null;
                    nodeToDelete.father = null;
                    return this;
                }else{
                    holdingNode.right = childNode;
                    nodeToDelete.right = null;
                    nodeToDelete.father = null;
                    return this;
                }
            }
            if(nodeToDelete.right === null){
                let holdingNode = nodeToDelete.father;
                let childNode = nodeToDelete.left;
                childNode.father = holdingNode;
                if(nodeToDelete === holdingNode.left){
                    holdingNode.left = childNode;
                    nodeToDelete.father = null;
                    nodeToDelete.left = null;
                    return this;
                }else{
                    holdingNode.right = childNode;
                    nodeToDelete.left = null;
                    nodeToDelete.father = null;
                    return this;
                }
            }

            //Si es un nodo con dos hijos
            if(nodeToDelete.left != null && nodeToDelete.right != null){
                //Buscamos el nodo con el menor valor del sub arbol derecho
                let rightTree = nodeToDelete.right;
                // Apuntamos al hijo iquierdo del sub arbol derecho del nodo a eliminar
                let leftNode =  rightTree.left;
                // En un ciclo verificamos si el nodo tiene hijo izquierdo hasta que ya no tenga hijo izquierdo
                while(true){
                    if(leftNode.left === null){
                        // Si no tiene hijo izquierdo 
                        // Su valor se le asigna al nodo al que se le estaba apuntando al principio
                        nodeToDelete.value = leftNode.value;
                        // Verificamos si tiene hijo derecho
                        if(leftNode.right != null){
                            //Si tiene hijo derecho 
                            // Se crea un apuntador al nodo buscado
                            // El padre del nodo, va apuntar al hijo del nodo 
                            leftNode.father.left = leftNode.right;
                            // En el nodo hijo, su padre va a ser el padre del nodo buscado 
                            leftNode.right.father = leftNode.father;
                        }else{
                            leftNode.father.left = null;
                        }
                        // En el nodo buscado, va apuntar a null en hijos y padre
                        leftNode.father = null;
                        leftNode.right = null;
                        leftNode.left = null;
                        return this;
                    }else{
                        // Si tiene un hijo izquierdo apuntamos a ese nodo y se repite el ciclo
                        leftNode = leftNode.left;
                        return this;
                    }
                }
            }
        }
    }
}

let tree = new BinarySearchTree();

tree.insert(4);
tree.insert(-7);
tree.insert(-9);
tree.insert(27);
tree.insert(22);
tree.insert(12);
tree.insert(49);
tree.insert(42);
tree.insert(100);