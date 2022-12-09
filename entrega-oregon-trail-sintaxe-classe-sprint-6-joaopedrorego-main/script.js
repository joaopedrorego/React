class Traveler{
    constructor(name,food = 1,isHealthy = true){
        this.name = name
        this.food = food
        this.isHealthy = isHealthy
    }

    hunt(){
       this.food += 2

    }

    eat(){
        if(this.food > 0){
            this.food = -1
        }else{
            this.isHealthy = false
        }
    }
}

class Wagon{
    constructor(capacity,passageiros = []){
        this.capacity = capacity
        this.passageiros = passageiros
    }

    get _capacity(){
        return this.capacity
    }

    set _passageiros(passageiro){
        if(this.getAvailableSeatCount() > 0){
            this.passageiros.push(passageiro)
            this.capacity += -1 
        }
    }

    getAvailableSeatCount(){
        return this.capacity
    }

    join(passageiro){
       
        if(this.getAvailableSeatCount() > 0){
            this.passageiros.push(passageiro)
            this.capacity += -1 
        }
    }

    shouldQuarantine(){
        for(let i = 0; i < this.passageiros.length; i++){
            if(this.passageiros[i].isHealthy == true){
                return true
            }
        }
        return false
    }

    totalFood(){
        let result = 0
        for(let i = 0; i < this.passageiros.length; i++){
            return result += this.passageiros[i].food
        }
        return result
    }
}

// Criar uma carroça que comporta 2 pessoas
let wagon = new Wagon(2);
// Criar três viajantes
let henrietta = new Traveler('Henrietta');
let juan = new Traveler('Juan');
let maude = new Traveler('Maude');
 
console.log(`${wagon.getAvailableSeatCount()} should be 2`);
 
wagon.join(henrietta);
console.log(`${wagon.getAvailableSeatCount()} should be 1`);
 
wagon.join(juan);
wagon.join(maude); // Não tem espaço para ela!
console.log(`${wagon.getAvailableSeatCount()} should be 0`);
 
henrietta.hunt(); // pega mais comida
juan.eat();
juan.eat(); // juan agora está com fome (doente)
 
console.log(`${wagon.shouldQuarantine()} should be true since juan is sick`);
console.log(`${wagon.totalFood()} should be 3`); 