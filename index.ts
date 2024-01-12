class Singleton {
  private static instance: Singleton;
  private constructor() {
  }
  
  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }
  
  public someMethod(): void {
    console.log("¡Método de la instancia Singleton!");
  }
}
  
const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();
  
console.log(instance1 === instance2); // Debería imprimir true
  
instance1.someMethod(); // Debería imprimir "¡Método de la instancia Singleton!"