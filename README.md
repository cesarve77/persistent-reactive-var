# Reactive local storage

## Install

``` cmd
$ meteor add cesarve:persistent-reactive-var
```

## Usage


```javascript 1.8

/***
* create new var
* take to params
* uniqueId required: an unique string foe each new persistent var
* defaultValue: a initial value if the storage var does not exist (no accept functions)
*/
foo= new PersistentReactiveVar(uniqueId: String,defaultValue: Any)
// example foo=PersistentReactiveVar('MyUniqueString',{a:1})


/***
* set value
* take one param
* value
*/
foo.set({foo:'bar'})
// example foo=set({a:2})

/***
* get storaged value
* take no params
* return Any value
*/
foo.get()

/***
* set an initial value
* take one param
* val Any value
*/
foo.setDefault(val) 

//clear var
foo.set(undefined)
```

Very simple api, tiny footprint just (use amplify behind the scene)

Licence MIT

