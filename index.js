// 1. Create a variable to store the singleton instance of the bank branch. "bankBranchInstance"
let bankBranchInstance = null;
// 2. Define a class called `BankBranch` for managing branch information.
class BankBranch {
//    - Create a constructor that takes `branchInfo` as a parameter.
    constructor(branchInfo) {
//    - Inside the constructor, check if the `bankBranchInstance` variable is null (indicating no instance exists).
        if (bankBranchInstance === null) {
//    - If `bankBranchInstance` is null, create a new instance with the provided `branchInfo` and assign it to `bankBranchInstance`.
            this.branchInfo = branchInfo;
            bankBranchInstance = this;
        }
        return bankBranchInstance;
    }
// 4. Add methods to the `BankBranch` class for managing branch-related information. For example, you can add a method like `getBranchInfo` to retrieve branch details.
    getBranchInfo(){
        return this.branchInfo;
    }
}
//    - Create instances of the `BankBranch` class, such as `branchA` and `branchB`, with different branch information.
const branchA = new BankBranch ({
    name : "North Branch",
    address : "Limpopo, Polokwane"
})
const branchB = new BankBranch({
    name : "South Branch",
    address : "Western Cape, Stellenbosch"
})
//    - Use the `getBranchInfo` method to retrieve branch information from the instances.
console.log(branchA.getBranchInfo())
console.log(branchB.getBranchInfo())
//    - Verify that `branchA` and `branchB` are both referring to the same instance by comparing them using `===`.
console.log(branchA === branchB)

