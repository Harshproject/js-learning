// In Java, you can call a static method using an object, but it’s bad practice.
// Static methods in Java should always be called using the class name.
// In JavaScript, calling a static method using an object throws an error.
// JS strictly requires static methods to be called via the class only.
// In Java, static methods are inherited by child classes.
// But Java static methods are not overridden, they are hidden.
// Because of this, Java static methods do not support runtime polymorphism.
// In JavaScript, static methods are also inherited via the prototype chain.
// JS allows overriding static methods, and the child version is called.
// Overall: Java static = compile-time binding, JS static = prototype-based behavior.