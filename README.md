# Reactive local storage

## Install

``` cmd
$ meteor add cesarve:persistent-reactive-var
```

## Usage


```javascript 1.8
//create var
foo= new PersistentReactiveVar('uniqueId',defaultValue)

//set value
foo.set({foo:'bar'})

//get
foo.get()

//set default value
foo.setDefault(val) 

//clear var
foo.set(undefined)
```

Very simple api, tiny footprint just (use amplify behind the scene)

Licence MIT

