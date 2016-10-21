angular.module('app').component('createUsers', {
    templateUrl: 'admin/createUsers.html',
    bindings: {},
    controller: class createUsersCtrl {
        namesblob: any;

        constructor (
            public parseNames: (namesblob: string) => [{}],
            public users: any,
            public toastr: any
        ) {
        }

        import() {
            let people = this.parseNames(this.namesblob);
            people.forEach(((person: any) => {
                this.users.createNewUser({
                    email: person.email,
                    password: "pass",
                    firstName: person.firstName,
                    lastName: person.lastName
                }).catch((error: any) => {
                    this.toastr.error("User already exists: " + person.email)
                })
            }));

            this.toastr.success("Users Created!")
        }
    }
})