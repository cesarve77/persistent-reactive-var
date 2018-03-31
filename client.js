/**
 * Created by cesar on 9/11/16.
 */
import {Tracker} from 'meteor/tracker'
const PREFIX = '___persistent_reactive_var___'

const set = function (key, val) {
    localStorage.setItem(PREFIX + key, JSON.stringify(val));
}

const get = function (key) {
    let val = localStorage.getItem(PREFIX + key)
    if (val) val = JSON.parse(val)
    return val
}

export class PersistentReactiveVar {
    constructor(id, initialValue, expires) {
        this.id = id
        this.dep = new Tracker.Dependency;
        this.setDefault(initialValue, expires)
        window.addEventListener('storage', (ev) => {
            if (ev.key === (PREFIX + id)) this.dep.changed()

        })

    }

    set(val, expires) {
        this.val = val
        let options = {}
        if (!isNaN(expires)) {
            options = {expires}
            if (expires > 0) {
                Meteor.setTimeout(() => {
                    this.dep.changed()
                }, expires + 100)
            } else {
                return
            }
        }
        set(this.id, val);
        this.dep.changed()
    }

    get() {
        this.dep.depend()
        return get(this.id);

    }

    setDefault(val, expires) {
        if (get(this.id) === null) {
            return this.set(val, expires)
        }
    }
}

