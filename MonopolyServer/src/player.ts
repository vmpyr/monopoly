export class Player {
    private id: string;
    private username: string;
    private icon:number;
    private position: number;
    private balance: number;
    private properties: Array<any>;
    private isInJail: boolean;
    private jailTurnsRemaining: number;
    constructor(_id: string, _name: string, _icon:number) {
        this.id = _id; // Unique identifier for the player
        this.username = _name; // Player's username or name
        this.icon = _icon;

        this.position = 0; // Current position on the game board (index of the cell)
        this.balance = 1500; // Player's current balance or money
        this.properties = []; // Array to store the properties owned by the player
        this.isInJail = false; // Flag to indicate if the player is in jail
        this.jailTurnsRemaining = 0; // Number of turns remaining in jail (if applicable)
    }

    to_json(){
        return {
            id:this.id,
            username:this.username,
            icon:this.icon,
            position:this.position,
            balance:this.balance,
            properties:this.properties,
            isInJail:this.isInJail,
            jailTurnsRemaining:this.jailTurnsRemaining
        }
    }
   
}
