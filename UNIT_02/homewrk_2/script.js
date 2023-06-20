console.log('power_on')
debugger
let cpu = {
    producer: 'AMD',  
    amount: 250.00,
    family: 'AMD Ryzen 7',
    name: 'Ryzen 7 3700x',  
    sale(p){
        return (this.amount / 100) * 95
    }
}  

let memory = {
    __proto__: cpu
} 

memory.producer = 'Hynix',
memory.amount = 60,
memory.memory = 2048,  
memory.name = 'Hynix DDR4-2666',
memory.family = 'DDR4'

cpu.image =  `https://i2.youfon.net/thumbs/2022-07/1658219129.jpg` 

memory.image = `https://img3.akspic.ru/previews/7/4/2/8/6/168247/168247-kosti_3d-igra_v_kosti_3d-azartnaya_igra-pitevaya_igra-kazino-500x.jpg`

console.log(cpu.amount)
console.log(memory.family)
console.log(memory.amount)  
console.log(cpu.image)
console.log(memory.image)
