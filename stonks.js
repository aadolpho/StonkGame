class Introduction extends Engine.Scene {
    setup() {
        this.engine.setTitle("Stonks 4.0");
        this.engine.addAction("begin");
        this.engine.show("Get ready to trade!");
    }

    handleAction() {
        this.engine.gotoScene(Trading);
    }
}

class Trading extends Engine.Scene {
    setup() {
        this.stonks = 0;
        this.cash = 1000;
        this.price = 0;
        this.money = 500;

        this.engine.setTitle("Trade Stonks");

        this.engine.addAction("buy");
        this.engine.addAction("sell");
        this.engine.addAction("money");
    }


    update(time) {
        if (Math.random() < 0.05) {
            this.price = 100 + 20 * Math.sin(time / 1000.0);
        }

        this.engine.show(JSON.stringify({
            stonks: this.stonks,
            cash: this.cash,
            money: this.money,
            price: this.price
        }, null, 1));
    }

    handleAction(action) {
        if (action == "buy" && this.cash > this.price) {
            this.stonks += 1;
            this.cash -= this.price;
        }

        if (action == "sell" && this.stonks > 0) {
            this.stonks -= 1;
            this.cash += this.price;
        }

        if(action == "money") {
            this.cash += 500;
        }

        if(this.cash > 2000) {
            this.engine.show('Cash > $2k, noice!');
            this.engine.gotoScene(Victory);
        }
    }
}

class Introduction extends Engine.Scene {
    setup() {
        this.engine.setTitle("Stonks 4.0");
        this.engine.addAction("go!");
        this.engine.show("Are you ready to trade?");
    }

    handleAction() {
        this.engine.gotoScene(Trading);
    }
}

class Victory extends Engine.Scene {
    setup() {
        this.engine.setTitle("Victory");
        this.engine.addAction("replay");
        this.engine.show("Noice! Play again?");
    }

    handleAction() {
        this.engine.gotoScene(Trading);
    }
}

let game = new Engine.Game(Introduction, 'gameContainer');
