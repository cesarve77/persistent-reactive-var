/**
 * Created by cesar on 16/11/16.
 */
import {PersistentReactiveVar} from './client'
import {_} from 'meteor/underscore'
Tinytest.add('Basic testing', (test) => {
    const obj={a:'simple object'}
    const res1 = new PersistentReactiveVar('id1',obj);
    test.equal(  _.isEqual(res1.get() ,obj),true);

    const res2 = new PersistentReactiveVar('id2',5);
    test.equal(res2.get(), 5);
    res2.set(9)
    test.equal(res2.get(), 9);
    const res3 = new PersistentReactiveVar('id1',15);
    test.equal(res3.get(), 15);
    test.equal(res3.get(), 15);
     test.equal(res1.get(), 5);


});