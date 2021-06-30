        class HashTable{
            constructor(size){
                this.data = new Array(size);
            }

            //Esta función nos generea un hash 
            hashMethod(key){
                let hash = 0;
                for (let i = 0; i < key.length; i++) {
                    hash = (hash + key.charCodeAt(i) * i) % this.data.length;
                }
                return hash;
            }

            //El método set recibe dos parametro que va almacenar en la tabla de hash.
            set(key, value){
                const address = this.hashMethod(key);

                //Si no existe el espacio con indice en nuestro hash creamos un arreglo vacío para guardar la información
                if(!this.data[address]){
                    this.data[address] = [];
                }

                //Agregamos la llave y el valor en el indice del hash, si ya existe un par ordenado en esa posición se va a generar una coalisión.
                this.data[address].push([key,value]);
                return this.data;
            }

            //La función get nos premite obtener el valor mediante una key
            get(key){

                //Obtenemos el hash mediante el key que se paso como parametro
                const address = this.hashMethod(key);

                //Guardamos el bucket del hash
                const currentBucket = this.data[address];

                //Si el bucket existe vamos a buscar entre sus elementos la llave.
                if(currentBucket){
                    for(let i = 0; i < currentBucket.length; i++){
                        if(currentBucket[i][0] === key){
                            return currentBucket[i][1];
                        }
                    }
                }
                return undefined;
            }

            //Hacer metodo para eliminar elementos dentro de la tabla
            delete(key){
                const address = this.hashMethod(key);
                const targetBucket = this.data[address];
                if(targetBucket){
                    for(let i = 0; i < targetBucket.length; i++){
                        if(targetBucket[i][0] === key){
                            const deletedValue = targetBucket[i];
                            targetBucket[i].splice(i,1);
                            return deletedValue;
                        }
                    }
                }
                return undefined;
            }
            //Hacer el metodo para obtener los key mediante los values
            getAllKeys(){
                const keys = [];
                for(let i = 0; i < this.data.length; i++){
                    if(this.data[i]){
                        for(let j = 0; j < this.data[i].length; i++){
                            keys.push(this.data[i][j][0]);
                        }
                    }
                }
                return keys;
            }
        }

        let myHashTable = new HashTable(50);