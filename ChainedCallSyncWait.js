/* call like: 
 *  p('rainey').wait(1).eat().go(5)

 *  output like:
 *  (wait 1s)
 *  rainey eat
 *  (wait 5s)
 *  rainey go
 * */
 
class Person {
    constructor(name) {
        this.name = name;
        this.line = [];
    }

    sleep(s = 0) {
        var date = +new Date();
        while((+new Date()) < date + s*1000) {
            // 
        }
        return ;
    }

    wait(s) {
        this.sleep(s);
        return this;
    }

    eat(s) {
        this.sleep(s);
        console.log(`${this.name} eat`);
        return this;
    }

    go(s) {
        this.sleep(s);
        console.log(`${this.name} go`);
        return this;
    }
}

(new Person('rainey')).wait(1).eat().go(5)