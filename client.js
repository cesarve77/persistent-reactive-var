/**
 * Created by cesar on 9/11/16.
 */
import {Tracker} from 'meteor/tracker'
export class PersistentReactiveVar {
    constructor(id, initialValue) {
        this.id=id
        this.dep = new Tracker.Dependency;
        this.setDefault(initialValue)
    }
    set(val) {
        this.dep.changed()
        this.val = val
        amplify.store(this.id,val)

    }
    get() {
        this.dep.depend()
        return amplify.store(this.id);

    }
    setDefault(val) {
        if (amplify.store(this.id)===undefined && val !== undefined  ) {
            this.set(val)
        }

    }
}

