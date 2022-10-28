# Ecommerce App Angular 💵
Ecommerce app built following [this tutorial by Code with Mosh](https://codewithmosh.com/p/angular-master-class) 🎓

## Log of new concepts 📈
**20/10/1995**
### Fundamentals
- Typescript Interfaces
    - 'Inline annotation'
    - Defines the shape of an object
- 'Cohesion' - coding principle
    - Group related code together with a class
    - field and methods OOP
- Access modifiers
    - In ts you can initalise variable in constructor using them
- Decorators
    - Component and NgModule decorators: how angular transforms classes
    into angular objects
- String Interpolation
    - The two `{}` curly braces baby!
- Directives
    - Used to change DOM elements
    - like attributes in html e.g `*ngFor=""`
- Dependency Injection
- Coupling & Decoupling
    - You **Tightly Couple** a component to a service when you instantiate a new service in a components constructor
    - You should **Decouple** a service from a component by including the service as a parameter in the component constructor

- Dependency Injection
    - The thing that effed me up in that compare the market interview and made me realise I was a scrub that needed to formally study Angular
    - When you register a dependency as a provider in a module, Angular will create a single instance of that class for the entire module. So if there are 100 components in a class, Angular will create a singular service object shared among all those classes This **design pattern** is called a **Singleton**
    - When you add a service in a component constructor, you are making it a dependancy of that class
    - When Angular creates a component
        1. First it will instantiate the dependancies of that class. Then... ->
        2. It will inject those dependencies into the constructor of that class
    This is what we call **DEPENDENCY INJECTION**

- @Injectable
    - Decorator which tells Angular that a class is includes dependencies in its constructor
    - Isn't needed to be declared in the Component class because it is already included internally
### Displaying Data and Handling Events
- Property Binding and Attribute Binding
    - So, in HTML, attributes are defined on HTML elements and are supposed to be the *initial values* passed to them at the time of creating those elements. Once the browser creates the DOM (a.k.a. after rendering the page), the HTML elements become objects (node objects) and hence, they have properties.
    - An attribute is the additional information defined in an HTML element to be initialized upon creation. A property is a characteristic of a DOM node(object) that you can manipulate.
    Thus:
    - Attribute – Represents the initial value and does not change.
    - Property – Represents the current value and can change.
    - Things can get a little complex in our heads when trying to understand whether we should use a property or attribute. But for the most part, we will be using properties. **That’s because many HTML Attributes have a 1 to 1 mapping with DOM properties.**
    - Thus for most values we could use either property or attribute binding which would target the same value. But again, default to property binding
    - Property binding uses square brackets `[class]="myClassBinding"`
    -  Attribute binding uses `[attr.colspan]` i.e. we have to specify `attr` first
    - An example of an attribute and not a property is `colspan` this is because it is not meant to be changed. Thus we have to use attribute binding here and not property binding
    
- Class Binding
    - Can bind conditional classes by specifying `[class.btn]="{{ condition }}` (btn being an example class)
- Style Binding
    - Similar to class binding
    - Applies inline styles based on condition e.g. `[style.backgroundColor]="isActive ? 'blue' : 'white'"`
- Event Binding
    - $event
    - Event Bubbling. Event will apply for all surrounding parent elements in html
- Event filtering
    - Can do `keyup.enter` which says that the key must be 'enter' for the event instead of putting an if condition in the function call
- Template Variables
- Two-Way Binding
- Pipes
    - Format data with pipes (current, number, uppercase etc.)
    - Can make custom pipes
    - Common Module

**28/10/22**

### Building Re-usable components
- Component API's
    - Inputs and Outputs
    - `@Input()` and `@Output` properties = the API
    - **Aliasing** Can supply an alias to the Input so you don't have to change it every time ***keep the contract stable***
- Passing Event Data
    - Output is an event emitter
    - Can emit an object with custom data instead of a DOM event object
- Templates and styles can be in the component or their own file
- **View Encapsulation**
    - How styling is scoped to just the component
    - Can either emulate the Shadow dom by adding unique attributes to the component html
    - You can also specify native which uses the shadow dom
    - or you can have your styling not be specific and instead apply globally
- ngContent & ngContainer
    - Insert html from parent component by using ngContent in the child and ngContainer in the parent
- 💡 Zen Coding: allows you to quickly write html in vsCode

### Directives
Changes the appearance or behaviour of the DOM using attribute directives
- ngIf vs hidden
    - ngIf: condition rendering of html elements. rebuild Dom
    - hidden: hides and element
    - For small trees it doesnt matter what you use
    - Use ngIf to free up resources
    - Use hidden if peformance cost of rebuilding that subtree is too high
- ngSwitchCase
- ngFor and trackBy
    - ngFor detects changes of data by object reference. The contents of the object could be the same but the DOM would still rebuild because its detected a difference object reference. trackBy allows us to pass in our own function that compares our own choice of data, for instance, the values of objects, which may or may not change, and updates the elements by that instead.
- Leading asterick
    - `*` converts the element into an `ng-template` and the directive into an property binding 