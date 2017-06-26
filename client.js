/**
 * Created by cesar on 9/11/16.
 */
import {Tracker} from 'meteor/tracker'
export class PersistentReactiveVar {
    constructor(id, initialValue, expires) {
        this.id = id
        this.dep = new Tracker.Dependency;
        this.setDefault(initialValue, expires)
    }

    set(val, expires) {
        this.dep.changed()
        this.val = val
        let options={}
        if (!isNaN(expires)){
            options =  {expires}
            if (expires>0){
                Meteor.setTimeout(() => {
                    this.dep.changed()
                },expires+100)
            }else{
                return
            }
        }
        amplify.store(this.id, val, options)
    }

    get() {
        this.dep.depend()
        return amplify.store(this.id);

    }

    setDefault(val, expires) {
        if (amplify.store(this.id) === undefined) {
            return this.set(val, expires)
        }
        const oldVal = localStorage.getItem('__amplify__' + this.id)
        if (oldVal && oldVal.expires) {
            const expires = new Date().getTime() - oldVal.expires
            if (expires>0){
                Meteor.setTimeout(() => {
                    this.dep.changed()
                },expires)
            }else{
                this.set(null)
            }
        }
    }
}

